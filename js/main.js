// DOM Elemanları
const dragArea = document.getElementById('dragArea');
const fileInput = document.getElementById('fileInput');
const browseBtn = document.getElementById('browseBtn');
const base64Input = document.getElementById('base64Input');
const clearBtn = document.getElementById('clearBtn');
const pasteBtn = document.getElementById('pasteBtn');
const convertBtn = document.getElementById('convertBtn');
const saveBtn = document.getElementById('saveBtn');
const successStatus = document.getElementById('successStatus');
const errorStatus = document.getElementById('errorStatus');
const warningStatus = document.getElementById('warningStatus');
const successText = document.getElementById('successText');
const errorText = document.getElementById('errorText');
const warningText = document.getElementById('warningText');
const progressContainer = document.getElementById('progressContainer');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const progressPercent = document.getElementById('progressPercent');
const assistantContainer = document.getElementById('assistantContainer');
const assistantMessage = document.getElementById('assistantMessage');
const pdfPreview = document.getElementById('pdfPreview');
const pdfContainer = document.getElementById('pdfContainer');
const themeSwitch = document.getElementById('themeSwitch');
const languageSelector = document.getElementById('languageSelector');

// Global değişkenler
let currentPdfBlob = null;
let currentPdfFilename = 'document.pdf';
let currentLanguage = 'tr'; // Varsayılan dil

// Dil değiştirme olay dinleyicisi
languageSelector.addEventListener('change', (e) => {
  currentLanguage = e.target.value;
  applyLanguage(currentLanguage);
  
  // Dil değişiminde welcome mesajını da güncelle
  showAssistantMessage(getTranslation('welcomeMessage'));
});

// Tema değiştirme
themeSwitch.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  
  // Tema tercihi kaydet
  localStorage.setItem('theme', newTheme);
  
  // Tema düğme metnini güncelle
  const currentTranslations = translations[currentLanguage] || translations['en'];
  const modeTextKey = newTheme === 'dark' ? 'lightMode' : 'darkMode';
  themeSwitch.querySelector('span').textContent = currentTranslations[modeTextKey];
  
  // Simgeyi güncelle
  if (newTheme === 'dark') {
    themeSwitch.querySelector('i').className = 'fas fa-sun';
  } else {
    themeSwitch.querySelector('i').className = 'fas fa-moon';
  }
});

// Sayfa yüklendiğinde tema tercihi kontrolü
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    if (savedTheme === 'dark') {
      themeSwitch.querySelector('i').className = 'fas fa-sun';
    }
  }
});

// Dosya sürükle-bırak
['dragover', 'dragenter'].forEach(event => {
  dragArea.addEventListener(event, (e) => {
    e.preventDefault();
    dragArea.classList.add('active');
  });
});

['dragleave', 'dragend'].forEach(event => {
  dragArea.addEventListener(event, () => {
    dragArea.classList.remove('active');
  });
});

dragArea.addEventListener('drop', (e) => {
  e.preventDefault();
  dragArea.classList.remove('active');
  const file = e.dataTransfer.files[0];
  if (file) handleFile(file);
});

// Dosya seçme
browseBtn.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) handleFile(file);
});

// Temizle ve yapıştır butonları
clearBtn.addEventListener('click', () => {
  base64Input.value = '';
  hideAllStatuses();
});

pasteBtn.addEventListener('click', async () => {
  try {
    const text = await navigator.clipboard.readText();
    base64Input.value = text;
    showAssistantMessage(getTranslation('pasteSuccess'));
  } catch (err) {
    showWarning(getTranslation('pasteError'));
  }
});

// Dönüştürme ve kaydetme butonları
convertBtn.addEventListener('click', () => processBase64(true));
saveBtn.addEventListener('click', () => processBase64(false));

// Dosya işleme fonksiyonu
function handleFile(file) {
  if (!file) return;
  
  // Dosya boyutu kontrolü (10MB'tan büyükse uyar)
  if (file.size > 10 * 1024 * 1024) {
    showWarning(getTranslation('largeFileWarning'));
  }
  
  currentPdfFilename = file.name.replace(/\.(txt|b64|base64)$/i, '.pdf');
  
  const reader = new FileReader();
  
  reader.onloadstart = () => {
    showProgress(0);
    showAssistantMessage(getTranslation('fileLoading'));
  };
  
  reader.onprogress = (e) => {
    if (e.lengthComputable) {
      const percent = Math.round((e.loaded / e.total) * 100);
      updateProgress(percent);
    }
  };
  
  reader.onload = (e) => {
    updateProgress(100);
    setTimeout(() => {
      hideProgress();
      base64Input.value = e.target.result;
      showAssistantMessage(getTranslation('fileLoaded').replace('{filename}', file.name));
    }, 500);
  };
  
  reader.onerror = () => {
    hideProgress();
    showError(getTranslation('fileError'));
  };
  
  reader.readAsText(file);
}

// Base64 işleme fonksiyonu
function processBase64(shouldOpen) {
  hideAllStatuses();
  
  const b64Input = base64Input.value.trim();
  if (!b64Input) {
    showWarning(getTranslation('warningMessage'));
    return;
  }
  
  showProgress(0);
  
  // İşlem biraz zaman alacakmış gibi hissi vermek için
  // aşamalı ilerleme gösteriyoruz (UX amaçlı)
  let progress = 0;
  const interval = setInterval(() => {
    progress += 5;
    if (progress > 70) clearInterval(interval);
    updateProgress(progress);
  }, 50);
  
  setTimeout(() => {
    try {
      // Base64 temizleme
      let cleanB64 = b64Input.replace(/[^A-Za-z0-9+/=]/g, '');
      
      // Padding düzeltme
      while (cleanB64.length % 4 !== 0) cleanB64 += '=';
      
      // PDF doğrulama ve dönüştürme
      const pdfData = atob(cleanB64);
      
      // PDF formatı kontrolü
      if (!pdfData.startsWith('%PDF')) {
        clearInterval(interval);
        hideProgress();
        showError(getTranslation('invalidPdfError'));
        return;
      }
      
      // PDF verisi oluştur
      const byteNumbers = new Array(pdfData.length);
      for (let i = 0; i < pdfData.length; i++) {
        byteNumbers[i] = pdfData.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      currentPdfBlob = new Blob([byteArray], {type: 'application/pdf'});
      
      // İşlemi tamamla
      clearInterval(interval);
      updateProgress(100);
      
      setTimeout(() => {
        hideProgress();
        
        if (shouldOpen) {
          openPdf();
          showSuccess(getTranslation('successMessage'));
          showAssistantMessage(getTranslation('successConvertMessage'));
        } else {
          savePdf();
          showSuccess(getTranslation('successMessage'));
          showAssistantMessage(getTranslation('successSaveMessage'));
        }
        
        showPdfPreview();
      }, 500);
      
    } catch (error) {
      clearInterval(interval);
      hideProgress();
      console.error(error);
      showError(getTranslation('base64Error'));
      showAssistantMessage(getTranslation('decodingError'));
    }
  }, 300);
}

// PDF açma
function openPdf() {
  if (!currentPdfBlob) return;
  const url = URL.createObjectURL(currentPdfBlob);
  window.open(url, '_blank');
}

// PDF kaydetme
function savePdf() {
  if (!currentPdfBlob) return;
  const url = URL.createObjectURL(currentPdfBlob);
  const a = document.createElement('a');
  a.href = url;
  a.download = currentPdfFilename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// PDF önizleme
function showPdfPreview() {
  if (!currentPdfBlob) return;
  
  pdfPreview.style.display = 'block';
  const url = URL.createObjectURL(currentPdfBlob);
  
  // İframe ile pdf gösterme
  pdfContainer.innerHTML = `<iframe src="${url}" title="PDF Preview"></iframe>`;
}

// Durum mesajları
function showSuccess(message) {
  hideAllStatuses();
  successText.textContent = message;
  successStatus.style.display = 'block';
}

function showError(message) {
  hideAllStatuses();
  errorText.textContent = message;
  errorStatus.style.display = 'block';
}

function showWarning(message) {
  hideAllStatuses();
  warningText.textContent = message;
  warningStatus.style.display = 'block';
}

function hideAllStatuses() {
  successStatus.style.display = 'none';
  errorStatus.style.display = 'none';
  warningStatus.style.display = 'none';
}

// İlerleme çubuğu
function showProgress(percent) {
  progressContainer.style.display = 'block';
  updateProgress(percent);
}

function updateProgress(percent) {
  progressBar.style.width = `${percent}%`;
  progressPercent.textContent = `${percent}%`;
}

function hideProgress() {
  progressContainer.style.display = 'none';
}

// Asistan mesajları
function showAssistantMessage(message) {
  assistantMessage.textContent = message;
  assistantContainer.style.display = 'block';
}

// Çeviriler için yardımcı fonksiyon
function getTranslation(key) {
  const lang = currentLanguage;
  const fallbackLang = 'en';
  
  if (translations[lang] && translations[lang][key]) {
    return translations[lang][key];
  } else if (translations[fallbackLang] && translations[fallbackLang][key]) {
    return translations[fallbackLang][key];
  }
  
  return key; // Çeviri yoksa anahtarı döndür
}

// Sayfa yüklendiğinde hoş geldin mesajı
window.addEventListener('load', () => {
  setTimeout(() => {
    showAssistantMessage(getTranslation('welcomeMessage'));
  }, 1000);
}); 