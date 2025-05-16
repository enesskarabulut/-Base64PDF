// Çeviriler
const translations = {
  // Türkçe çeviriler (varsayılan)
  'tr': {
    dropText: 'Dosyanızı Buraya Sürükleyin',
    dropDescription: 'veya dosya seçmek için butona tıklayın',
    browseButton: 'Dosya Seç',
    textareaPlaceholder: 'Base64 verinizi buraya yapıştırın...',
    orText: 'VEYA',
    convertButton: 'PDF\'e Dönüştür ve Aç',
    saveButton: 'PDF Olarak Kaydet',
    successMessage: 'PDF başarıyla oluşturuldu.',
    errorMessage: 'Hata: Geçersiz Base64 verisi.',
    warningMessage: 'Lütfen Base64 verisini girin veya dosya seçin.',
    processingText: 'İşleniyor...',
    previewTitle: 'PDF Önizleme',
    darkMode: 'Karanlık Mod',
    lightMode: 'Aydınlık Mod',
    footerText: 'Tüm veriler güvenli bir şekilde tarayıcınızda işlenir.',
    converterTitle: 'Base64\'ten PDF\'e Dönüştürücü',
    welcomeMessage: 'Merhaba! Base64PDF\'e hoş geldiniz. Base64 formatındaki verinizi PDF\'e dönüştürmek için dosyanızı sürükleyip bırakın veya metni yapıştırın. İhtiyacınız olursa buradayım!',
    successConvertMessage: 'Tebrikler! PDF dosyanız başarıyla oluşturuldu ve açıldı. Dosyayı kaydetmek için "PDF Olarak Kaydet" butonunu kullanabilirsiniz.',
    successSaveMessage: 'Tebrikler! PDF dosyanız başarıyla oluşturuldu ve indirilmek üzere hazırlandı. İndirme işlemi otomatik olarak başlamazsa, lütfen tekrar deneyin.',
    pasteSuccess: 'Veri panodan yapıştırıldı. İşleme hazır!',
    pasteError: 'Panodan veri yapıştırma başarısız. Lütfen manuel olarak yapıştırın.',
    fileLoading: 'Dosya okunuyor, lütfen bekleyin...',
    fileLoaded: '{filename} dosyası başarıyla yüklendi. İşlemeye hazır!',
    fileError: 'Dosya okuma hatası! Lütfen başka bir dosya deneyin.',
    largeFileWarning: 'Dikkat: 10MB\'tan büyük dosyalar işlenirken tarayıcınız yavaşlayabilir.',
    invalidPdfError: 'Geçersiz PDF formatı! Base64 verisinin gerçekten bir PDF dosyasını temsil ettiğinden emin olun.',
    base64Error: 'Base64 çözümleme hatası! Lütfen geçerli bir Base64 verisi girdiğinizden emin olun.',
    decodingError: 'Bir hata oluştu. Girdiğiniz veri geçerli bir Base64 formatında olmayabilir. Lütfen veriyi kontrol edip tekrar deneyin.',
    languageSelector: 'Dil Seçin'
  },
  
  // İngilizce çeviriler
  'en': {
    dropText: 'Drop Your File Here',
    dropDescription: 'or click the button to select file',
    browseButton: 'Browse File',
    textareaPlaceholder: 'Paste your Base64 data here...',
    orText: 'OR',
    convertButton: 'Convert to PDF & Open',
    saveButton: 'Save as PDF',
    successMessage: 'PDF has been successfully created.',
    errorMessage: 'Error: Invalid Base64 data.',
    warningMessage: 'Please enter Base64 data or select a file.',
    processingText: 'Processing...',
    previewTitle: 'PDF Preview',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    footerText: 'All data is processed securely in your browser.',
    converterTitle: 'Base64 to PDF Converter',
    welcomeMessage: 'Hello! Welcome to Base64PDF. Drop your file or paste Base64 data to convert it to PDF. I\'m here if you need help!',
    successConvertMessage: 'Congratulations! Your PDF has been successfully created and opened. You can use the "Save as PDF" button to save the file.',
    successSaveMessage: 'Congratulations! Your PDF has been successfully created and prepared for download. If the download doesn\'t start automatically, please try again.',
    pasteSuccess: 'Data pasted from clipboard. Ready to process!',
    pasteError: 'Failed to paste from clipboard. Please paste manually.',
    fileLoading: 'Reading file, please wait...',
    fileLoaded: 'File "{filename}" successfully loaded. Ready to process!',
    fileError: 'File reading error! Please try another file.',
    largeFileWarning: 'Warning: Files larger than 10MB may slow down your browser.',
    invalidPdfError: 'Invalid PDF format! Make sure the Base64 data actually represents a PDF file.',
    base64Error: 'Base64 parsing error! Please ensure you\'ve entered valid Base64 data.',
    decodingError: 'An error occurred. The data you entered may not be in valid Base64 format. Please check the data and try again.',
    languageSelector: 'Select Language'
  },
  
  // İspanyolca çeviriler
  'es': {
    dropText: 'Arrastre su archivo aquí',
    dropDescription: 'o haga clic en el botón para seleccionar el archivo',
    browseButton: 'Seleccionar Archivo',
    textareaPlaceholder: 'Pegue sus datos Base64 aquí...',
    orText: 'O',
    convertButton: 'Convertir a PDF y Abrir',
    saveButton: 'Guardar como PDF',
    successMessage: 'PDF creado con éxito.',
    errorMessage: 'Error: Datos Base64 inválidos.',
    warningMessage: 'Por favor, introduzca datos Base64 o seleccione un archivo.',
    processingText: 'Procesando...',
    previewTitle: 'Vista previa PDF',
    darkMode: 'Modo Oscuro',
    lightMode: 'Modo Claro',
    footerText: 'Todos los datos se procesan de forma segura en su navegador.',
    converterTitle: 'Conversor de Base64 a PDF',
    welcomeMessage: '¡Hola! Bienvenido a Base64PDF. Arrastre su archivo o pegue datos Base64 para convertirlo a PDF. ¡Estoy aquí si necesita ayuda!',
    successConvertMessage: '¡Felicidades! Su PDF ha sido creado y abierto con éxito. Puede usar el botón "Guardar como PDF" para guardar el archivo.',
    successSaveMessage: '¡Felicidades! Su PDF ha sido creado y preparado para descargar. Si la descarga no comienza automáticamente, inténtelo de nuevo.',
    pasteSuccess: 'Datos pegados del portapapeles. ¡Listo para procesar!',
    pasteError: 'Error al pegar desde el portapapeles. Por favor, pegue manualmente.',
    fileLoading: 'Leyendo archivo, por favor espere...',
    fileLoaded: '¡Archivo "{filename}" cargado con éxito. ¡Listo para procesar!',
    fileError: '¡Error de lectura de archivo! Por favor, intente con otro archivo.',
    largeFileWarning: 'Advertencia: Los archivos de más de 10MB pueden ralentizar su navegador.',
    invalidPdfError: '¡Formato PDF inválido! Asegúrese de que los datos Base64 realmente representan un archivo PDF.',
    base64Error: '¡Error de análisis Base64! Por favor, asegúrese de haber introducido datos Base64 válidos.',
    decodingError: 'Ha ocurrido un error. Es posible que los datos que introdujo no estén en formato Base64 válido. Compruebe los datos e inténtelo de nuevo.',
    languageSelector: 'Seleccionar Idioma'
  },
  
  // Fransızca çeviriler
  'fr': {
    dropText: 'Déposez votre fichier ici',
    dropDescription: 'ou cliquez sur le bouton pour sélectionner un fichier',
    browseButton: 'Parcourir',
    textareaPlaceholder: 'Collez vos données Base64 ici...',
    orText: 'OU',
    convertButton: 'Convertir en PDF et Ouvrir',
    saveButton: 'Enregistrer en PDF',
    successMessage: 'PDF créé avec succès.',
    errorMessage: 'Erreur : Données Base64 invalides.',
    warningMessage: 'Veuillez entrer des données Base64 ou sélectionner un fichier.',
    processingText: 'Traitement en cours...',
    previewTitle: 'Aperçu PDF',
    darkMode: 'Mode Sombre',
    lightMode: 'Mode Clair',
    footerText: 'Toutes les données sont traitées en toute sécurité dans votre navigateur.',
    converterTitle: 'Convertisseur Base64 vers PDF',
    welcomeMessage: 'Bonjour ! Bienvenue sur Base64PDF. Déposez votre fichier ou collez des données Base64 pour les convertir en PDF. Je suis là si vous avez besoin d\'aide !',
    successConvertMessage: 'Félicitations ! Votre PDF a été créé et ouvert avec succès. Vous pouvez utiliser le bouton "Enregistrer en PDF" pour enregistrer le fichier.',
    successSaveMessage: 'Félicitations ! Votre PDF a été créé et préparé pour le téléchargement. Si le téléchargement ne démarre pas automatiquement, veuillez réessayer.',
    pasteSuccess: 'Données collées depuis le presse-papiers. Prêt à traiter !',
    pasteError: 'Échec du collage depuis le presse-papiers. Veuillez coller manuellement.',
    fileLoading: 'Lecture du fichier, veuillez patienter...',
    fileLoaded: 'Fichier "{filename}" chargé avec succès. Prêt à traiter !',
    fileError: 'Erreur de lecture du fichier ! Veuillez essayer un autre fichier.',
    largeFileWarning: 'Attention : Les fichiers de plus de 10 Mo peuvent ralentir votre navigateur.',
    invalidPdfError: 'Format PDF invalide ! Assurez-vous que les données Base64 représentent bien un fichier PDF.',
    base64Error: 'Erreur d\'analyse Base64 ! Veuillez vous assurer d\'avoir entré des données Base64 valides.',
    decodingError: 'Une erreur s\'est produite. Les données que vous avez entrées ne sont peut-être pas au format Base64 valide. Veuillez vérifier les données et réessayer.',
    languageSelector: 'Sélectionner la Langue'
  },
  
  // Almanca çeviriler
  'de': {
    dropText: 'Datei hier ablegen',
    dropDescription: 'oder klicken Sie auf die Schaltfläche, um eine Datei auszuwählen',
    browseButton: 'Datei auswählen',
    textareaPlaceholder: 'Fügen Sie hier Ihre Base64-Daten ein...',
    orText: 'ODER',
    convertButton: 'In PDF umwandeln und öffnen',
    saveButton: 'Als PDF speichern',
    successMessage: 'PDF wurde erfolgreich erstellt.',
    errorMessage: 'Fehler: Ungültige Base64-Daten.',
    warningMessage: 'Bitte geben Sie Base64-Daten ein oder wählen Sie eine Datei aus.',
    processingText: 'Verarbeitung...',
    previewTitle: 'PDF-Vorschau',
    darkMode: 'Dunkelmodus',
    lightMode: 'Hellmodus',
    footerText: 'Alle Daten werden sicher in Ihrem Browser verarbeitet.',
    converterTitle: 'Base64-zu-PDF-Konverter',
    welcomeMessage: 'Hallo! Willkommen bei Base64PDF. Ziehen Sie Ihre Datei hierher oder fügen Sie Base64-Daten ein, um sie in PDF umzuwandeln. Ich bin hier, wenn Sie Hilfe benötigen!',
    successConvertMessage: 'Glückwunsch! Ihr PDF wurde erfolgreich erstellt und geöffnet. Sie können die Schaltfläche "Als PDF speichern" verwenden, um die Datei zu speichern.',
    successSaveMessage: 'Glückwunsch! Ihr PDF wurde erfolgreich erstellt und zum Herunterladen vorbereitet. Wenn der Download nicht automatisch startet, versuchen Sie es bitte erneut.',
    pasteSuccess: 'Daten aus der Zwischenablage eingefügt. Bereit zur Verarbeitung!',
    pasteError: 'Einfügen aus der Zwischenablage fehlgeschlagen. Bitte fügen Sie manuell ein.',
    fileLoading: 'Datei wird gelesen, bitte warten...',
    fileLoaded: 'Datei "{filename}" erfolgreich geladen. Bereit zur Verarbeitung!',
    fileError: 'Dateileseehler! Bitte versuchen Sie es mit einer anderen Datei.',
    largeFileWarning: 'Warnung: Dateien größer als 10 MB können Ihren Browser verlangsamen.',
    invalidPdfError: 'Ungültiges PDF-Format! Stellen Sie sicher, dass die Base64-Daten tatsächlich eine PDF-Datei darstellen.',
    base64Error: 'Base64-Parsing-Fehler! Bitte stellen Sie sicher, dass Sie gültige Base64-Daten eingegeben haben.',
    decodingError: 'Ein Fehler ist aufgetreten. Die eingegebenen Daten sind möglicherweise nicht im gültigen Base64-Format. Bitte überprüfen Sie die Daten und versuchen Sie es erneut.',
    languageSelector: 'Sprache auswählen'
  },
  
  // İtalyanca çeviriler
  'it': {
    dropText: 'Trascina qui il tuo file',
    dropDescription: 'o clicca sul pulsante per selezionare un file',
    browseButton: 'Sfoglia File',
    textareaPlaceholder: 'Incolla qui i tuoi dati Base64...',
    orText: 'OPPURE',
    convertButton: 'Converti in PDF e Apri',
    saveButton: 'Salva come PDF',
    successMessage: 'PDF creato con successo.',
    errorMessage: 'Errore: Dati Base64 non validi.',
    warningMessage: 'Inserisci i dati Base64 o seleziona un file.',
    processingText: 'Elaborazione in corso...',
    previewTitle: 'Anteprima PDF',
    darkMode: 'Modalità Scura',
    lightMode: 'Modalità Chiara',
    footerText: 'Tutti i dati vengono elaborati in modo sicuro nel tuo browser.',
    converterTitle: 'Convertitore da Base64 a PDF',
    welcomeMessage: 'Ciao! Benvenuto su Base64PDF. Trascina il tuo file o incolla i dati Base64 per convertirli in PDF. Sono qui se hai bisogno di aiuto!',
    successConvertMessage: 'Congratulazioni! Il tuo PDF è stato creato e aperto con successo. Puoi utilizzare il pulsante "Salva come PDF" per salvare il file.',
    successSaveMessage: 'Congratulazioni! Il tuo PDF è stato creato e preparato per il download. Se il download non si avvia automaticamente, riprova.',
    pasteSuccess: 'Dati incollati dagli appunti. Pronto per l\'elaborazione!',
    pasteError: 'Impossibile incollare dagli appunti. Incolla manualmente.',
    fileLoading: 'Lettura del file, attendere prego...',
    fileLoaded: 'File "{filename}" caricato con successo. Pronto per l\'elaborazione!',
    fileError: 'Errore di lettura del file! Prova con un altro file.',
    largeFileWarning: 'Attenzione: i file più grandi di 10MB potrebbero rallentare il browser.',
    invalidPdfError: 'Formato PDF non valido! Assicurati che i dati Base64 rappresentino effettivamente un file PDF.',
    base64Error: 'Errore di analisi Base64! Assicurati di aver inserito dati Base64 validi.',
    decodingError: 'Si è verificato un errore. I dati inseriti potrebbero non essere in un formato Base64 valido. Controlla i dati e riprova.',
    languageSelector: 'Seleziona Lingua'
  },
  
  // Portekizce çeviriler
  'pt': {
    dropText: 'Solte seu arquivo aqui',
    dropDescription: 'ou clique no botão para selecionar o arquivo',
    browseButton: 'Procurar Arquivo',
    textareaPlaceholder: 'Cole seus dados Base64 aqui...',
    orText: 'OU',
    convertButton: 'Converter para PDF e Abrir',
    saveButton: 'Salvar como PDF',
    successMessage: 'PDF foi criado com sucesso.',
    errorMessage: 'Erro: Dados Base64 inválidos.',
    warningMessage: 'Por favor, insira dados Base64 ou selecione um arquivo.',
    processingText: 'Processando...',
    previewTitle: 'Visualização do PDF',
    darkMode: 'Modo Escuro',
    lightMode: 'Modo Claro',
    footerText: 'Todos os dados são processados com segurança em seu navegador.',
    converterTitle: 'Conversor de Base64 para PDF',
    welcomeMessage: 'Olá! Bem-vindo ao Base64PDF. Solte seu arquivo ou cole dados Base64 para convertê-los em PDF. Estou aqui se precisar de ajuda!',
    successConvertMessage: 'Parabéns! Seu PDF foi criado e aberto com sucesso. Você pode usar o botão "Salvar como PDF" para salvar o arquivo.',
    successSaveMessage: 'Parabéns! Seu PDF foi criado e preparado para download. Se o download não iniciar automaticamente, tente novamente.',
    pasteSuccess: 'Dados colados da área de transferência. Pronto para processar!',
    pasteError: 'Falha ao colar da área de transferência. Por favor, cole manualmente.',
    fileLoading: 'Lendo arquivo, aguarde...',
    fileLoaded: 'Arquivo "{filename}" carregado com sucesso. Pronto para processar!',
    fileError: 'Erro de leitura do arquivo! Por favor, tente outro arquivo.',
    largeFileWarning: 'Aviso: Arquivos maiores que 10MB podem deixar seu navegador lento.',
    invalidPdfError: 'Formato PDF inválido! Certifique-se de que os dados Base64 realmente representam um arquivo PDF.',
    base64Error: 'Erro de análise Base64! Certifique-se de ter inserido dados Base64 válidos.',
    decodingError: 'Ocorreu um erro. Os dados inseridos podem não estar em formato Base64 válido. Verifique os dados e tente novamente.',
    languageSelector: 'Selecionar Idioma'
  },
  
  // Japonca çeviriler
  'ja': {
    dropText: 'ここにファイルをドロップ',
    dropDescription: 'またはボタンをクリックしてファイルを選択',
    browseButton: 'ファイルを参照',
    textareaPlaceholder: 'Base64データをここに貼り付けてください...',
    orText: 'または',
    convertButton: 'PDFに変換して開く',
    saveButton: 'PDFとして保存',
    successMessage: 'PDFが正常に作成されました。',
    errorMessage: 'エラー：無効なBase64データ。',
    warningMessage: 'Base64データを入力するか、ファイルを選択してください。',
    processingText: '処理中...',
    previewTitle: 'PDFプレビュー',
    darkMode: 'ダークモード',
    lightMode: 'ライトモード',
    footerText: 'すべてのデータはブラウザで安全に処理されます。',
    converterTitle: 'Base64からPDFへのコンバーター',
    welcomeMessage: 'こんにちは！Base64PDFへようこそ。ファイルをドロップするか、Base64データを貼り付けてPDFに変換してください。何かお手伝いが必要でしたら、ここにいます！',
    successConvertMessage: 'おめでとうございます！PDFが正常に作成され、開かれました。「PDFとして保存」ボタンを使用してファイルを保存できます。',
    successSaveMessage: 'おめでとうございます！PDFが正常に作成され、ダウンロードの準備ができました。ダウンロードが自動的に開始されない場合は、もう一度お試しください。',
    pasteSuccess: 'クリップボードからデータが貼り付けられました。処理の準備ができました！',
    pasteError: 'クリップボードからの貼り付けに失敗しました。手動で貼り付けてください。',
    fileLoading: 'ファイルを読み込んでいます、お待ちください...',
    fileLoaded: 'ファイル「{filename}」が正常に読み込まれました。処理の準備ができました！',
    fileError: 'ファイル読み込みエラー！別のファイルをお試しください。',
    largeFileWarning: '警告：10MB以上のファイルはブラウザの速度が遅くなる可能性があります。',
    invalidPdfError: '無効なPDF形式です！Base64データが実際にPDFファイルを表していることを確認してください。',
    base64Error: 'Base64解析エラー！有効なBase64データを入力したことを確認してください。',
    decodingError: 'エラーが発生しました。入力したデータは有効なBase64形式ではない可能性があります。データを確認して再試行してください。',
    languageSelector: '言語を選択'
  }
};

// Dili seçen ve uygulayan fonksiyon
function applyLanguage(lang) {
  // Tarayıcıda dil tercihini sakla
  localStorage.setItem('preferredLanguage', lang);
  
  // Eğer seçilen dil yoksa, varsayılan olarak İngilizce kullan
  const currentTranslations = translations[lang] || translations['en'];
  
  // Metin içeriklerini güncelle
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (currentTranslations[key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = currentTranslations[key];
      } else {
        element.textContent = currentTranslations[key];
      }
    }
  });

  // Dil seçici üzerinde aktif dili göster
  const langSelector = document.getElementById('languageSelector');
  if (langSelector) {
    langSelector.value = lang;
  }

  // Tema düğmesini güncelle
  const themeSwitch = document.getElementById('themeSwitch');
  if (themeSwitch) {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const modeTextKey = currentTheme === 'dark' ? 'lightMode' : 'darkMode';
    themeSwitch.querySelector('span').textContent = currentTranslations[modeTextKey];
  }
  
  // Welcome message'ı güncelle (id'si veya sınıfı ne olursa olsun)
  const welcomeMessageElement = document.querySelector('.welcome-message') || document.getElementById('welcomeMessage');
  if (welcomeMessageElement) {
    welcomeMessageElement.textContent = currentTranslations.welcomeMessage;
  }
}

// Kullanıcının tarayıcı dilini tespit eden fonksiyon
function detectUserLanguage() {
  // Önce kullanıcının önceki tercihine bak
  const savedLanguage = localStorage.getItem('preferredLanguage');
  if (savedLanguage && translations[savedLanguage]) {
    return savedLanguage;
  }
  
  // Tarayıcının diline bak
  const browserLang = navigator.language.split('-')[0]; // "en-US" -> "en"
  
  // Desteklenen diller listesi
  const supportedLangs = Object.keys(translations);
  
  // Eğer tarayıcı dili destekleniyorsa onu kullan, yoksa İngilizce kullan
  return supportedLangs.includes(browserLang) ? browserLang : 'en';
}

// Daha dinamik bir yaklaşım için translateElement fonksiyonu
function translateElement(element, translations) {
  if (!element) return;
  
  const key = element.getAttribute('data-i18n');
  if (key && translations[key]) {
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      element.placeholder = translations[key];
    } else {
      element.textContent = translations[key];
    }
  }
  
  // Alt öğeleri de çevir
  Array.from(element.children).forEach(child => {
    translateElement(child, translations);
  });
}

// Sayfa yüklendiğinde ve DOM değiştiğinde çevirileri uygula
document.addEventListener('DOMContentLoaded', () => {
  const userLang = detectUserLanguage();
  applyLanguage(userLang);
  
  // Dil değişikliklerini dinle
  const langSelector = document.getElementById('languageSelector');
  if (langSelector) {
    langSelector.addEventListener('change', (e) => {
      applyLanguage(e.target.value);
    });
  }
  
  // MutationObserver ile DOM değişikliklerini izle
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        const currentLang = localStorage.getItem('preferredLanguage') || detectUserLanguage();
        const currentTranslations = translations[currentLang] || translations['en'];
        
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === 1) { // ELEMENT_NODE
            translateElement(node, currentTranslations);
          }
        });
      }
    });
  });
  
  // Tüm DOM değişikliklerini izle
  observer.observe(document.body, { childList: true, subtree: true });
}); 