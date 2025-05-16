import tkinter as tk
from tkinter import ttk, filedialog, messagebox, scrolledtext
import base64
import os
import tempfile
import webbrowser
from tkinter.font import Font
import subprocess
import platform

class Base64PDFViewer:
    def __init__(self, root):
        self.root = root
        self.root.title("Base64 PDF Görüntüleyici")
        self.root.geometry("900x700")
        self.root.minsize(800, 600)
        
        # Renk şeması
        self.bg_color = "#f0f0f0"
        self.accent_color = "#4a86e8"
        self.text_color = "#333333"
        
        self.root.configure(bg=self.bg_color)
        
        self.setup_ui()
        
    def setup_ui(self):
        # Ana frame
        main_frame = ttk.Frame(self.root, padding=10)
        main_frame.pack(fill=tk.BOTH, expand=True)
        
        # Üst başlık
        title_frame = ttk.Frame(main_frame)
        title_frame.pack(fill=tk.X, pady=(0, 15))
        
        title_label = ttk.Label(
            title_frame, 
            text="Base64 PDF Görüntüleyici", 
            font=("Segoe UI", 18, "bold"),
            foreground=self.accent_color
        )
        title_label.pack(pady=(5, 0))
        
        subtitle_label = ttk.Label(
            title_frame, 
            text="Base64 formatındaki verileri PDF olarak açın ve görüntüleyin",
            font=("Segoe UI", 10)
        )
        subtitle_label.pack()
        
        # Input frame
        input_frame = ttk.LabelFrame(main_frame, text="Base64 Verisi", padding=10)
        input_frame.pack(fill=tk.BOTH, expand=True, pady=(0, 10))
        
        # Text area for Base64 input
        self.base64_text = scrolledtext.ScrolledText(
            input_frame, 
            wrap=tk.WORD, 
            font=("Consolas", 10),
            height=15
        )
        self.base64_text.pack(fill=tk.BOTH, expand=True, padx=5, pady=5)
        
        # Butonlar
        button_frame = ttk.Frame(main_frame)
        button_frame.pack(fill=tk.X, pady=10)
        
        self.style = ttk.Style()
        self.style.configure("Accent.TButton", font=("Segoe UI", 10, "bold"))
        
        self.view_button = ttk.Button(
            button_frame, 
            text="PDF'i Görüntüle",
            command=self.view_pdf_threaded, 
            style="Accent.TButton"
        )
        self.view_button.pack(side=tk.LEFT, padx=5)
        
        self.clear_button = ttk.Button(
            button_frame, 
            text="Temizle", 
            command=self.clear_input
        )
        self.clear_button.pack(side=tk.LEFT, padx=5)
        
        self.clean_button = ttk.Button(
            button_frame, 
            text="ASCII Olmayanları Temizle", 
            command=self.clean_non_ascii
        )
        self.clean_button.pack(side=tk.LEFT, padx=5)
        
        self.open_file_button = ttk.Button(
            button_frame, 
            text="Base64 Dosyasını Aç", 
            command=self.open_base64_file
        )
        self.open_file_button.pack(side=tk.LEFT, padx=5)
        
        self.open_and_convert_button = ttk.Button(
            button_frame, 
            text="Base64 Dosyasından PDF Oluştur", 
            command=self.open_base64_file_and_convert_threaded
        )
        self.open_and_convert_button.pack(side=tk.LEFT, padx=5)
        
        self.save_pdf_button = ttk.Button(
            button_frame, 
            text="PDF Olarak Kaydet", 
            command=self.save_as_pdf
        )
        self.save_pdf_button.pack(side=tk.LEFT, padx=5)
        
        # Durum çubuğu
        self.status_var = tk.StringVar()
        self.status_var.set("Hazır")
        status_bar = ttk.Label(
            main_frame, 
            textvariable=self.status_var, 
            relief=tk.SUNKEN, 
            anchor=tk.W
        )
        status_bar.pack(fill=tk.X, side=tk.BOTTOM, pady=(10, 0))

    def view_pdf(self):
        base64_data = self.base64_text.get("1.0", tk.END).strip()
        
        if not base64_data:
            messagebox.showwarning("Uyarı", "Lütfen Base64 verisini girin!")
            return
        
        try:
            # Base64 verisi sadece ASCII karakterler içermeli
            try:
                base64_data.encode('ascii')
            except UnicodeEncodeError:
                messagebox.showerror("Hata", "Base64 verisi sadece ASCII karakterler içermelidir!\nLütfen kopyalanan metni kontrol edin ve özel karakterleri temizleyin.")
                self.status_var.set("Hata: Base64 verisi ASCII olmayan karakterler içeriyor")
                return

            # Temizleme: boşluk, tab, satır sonu karakterlerini kaldır
            base64_data = base64_data.replace(' ', '').replace('\t', '').replace('\n', '').replace('\r', '')

            # Padding eksikse tamamla
            missing_padding = len(base64_data) % 4
            if missing_padding:
                base64_data += '=' * (4 - missing_padding)

            # Base64 verisini PDF'e dönüştür
            try:
                pdf_data = base64.b64decode(base64_data)
            except base64.binascii.Error as e:
                messagebox.showerror("Hata", f"Geçersiz Base64 verisi: {str(e)}")
                self.status_var.set("Hata: Geçersiz Base64 formatı")
                return
            
            # Geçici dosya oluştur
            fd, temp_path = tempfile.mkstemp(suffix=".pdf")
            os.write(fd, pdf_data)
            os.close(fd)
            
            self.status_var.set(f"PDF oluşturuldu: {temp_path}")
            
            # PDF'i aç
            self.open_pdf_file(temp_path)
            
        except Exception as e:
            messagebox.showerror("Hata", f"PDF oluşturulamadı: {str(e)}")
            self.status_var.set("Hata: Geçersiz Base64 verisi")
    
    def open_pdf_file(self, file_path):
        """Sistem varsayılan PDF görüntüleyicisinde PDF dosyasını açar"""
        try:
            if platform.system() == 'Windows':
                os.startfile(file_path)
            elif platform.system() == 'Darwin':  # macOS
                subprocess.call(('open', file_path))
            else:  # Linux
                subprocess.call(('xdg-open', file_path))
        except Exception as e:
            messagebox.showerror("Hata", f"PDF açılamadı: {str(e)}")
    
    def clear_input(self):
        """Text alanını temizler"""
        self.base64_text.delete("1.0", tk.END)
        self.status_var.set("Hazır")
    
    def open_base64_file(self):
        """Base64 verisi içeren bir metin dosyasını açar"""
        file_path = filedialog.askopenfilename(
            title="Base64 Dosyası Seç",
            filetypes=[("Metin Dosyaları", "*.txt"), ("Tüm Dosyalar", "*.*")]
        )
        
        if file_path:
            try:
                with open(file_path, 'r') as file:
                    base64_data = file.read()
                
                self.base64_text.delete("1.0", tk.END)
                self.base64_text.insert("1.0", base64_data)
                self.status_var.set(f"Dosya yüklendi: {file_path}")
                
            except Exception as e:
                messagebox.showerror("Hata", f"Dosya açılamadı: {str(e)}")
    
    def save_as_pdf(self):
        """Base64 verisini PDF olarak kaydeder"""
        base64_data = self.base64_text.get("1.0", tk.END).strip()
        
        if not base64_data:
            messagebox.showwarning("Uyarı", "Lütfen Base64 verisini girin!")
            return
        
        try:
            # PDF kaydetme iletişim kutusu
            file_path = filedialog.asksaveasfilename(
                title="PDF'i Kaydet",
                defaultextension=".pdf",
                filetypes=[("PDF Dosyaları", "*.pdf")]
            )
            
            if file_path:
                # Base64 verisini PDF'e dönüştür
                pdf_data = base64.b64decode(base64_data)
                
                # Dosyaya kaydet
                with open(file_path, 'wb') as file:
                    file.write(pdf_data)
                
                self.status_var.set(f"PDF kaydedildi: {file_path}")
                
                # Dosyayı açmayı sor
                if messagebox.askyesno("Dosya Kaydedildi", "PDF dosyası kaydedildi. Şimdi açmak ister misiniz?"):
                    self.open_pdf_file(file_path)
                    
        except Exception as e:
            messagebox.showerror("Hata", f"PDF kaydedilemedi: {str(e)}")

    def clean_non_ascii(self):
        """ASCII olmayan karakterleri metinden temizler"""
        base64_data = self.base64_text.get("1.0", tk.END).strip()
        
        if not base64_data:
            messagebox.showwarning("Uyarı", "Temizlenecek metin bulunmamaktadır!")
            return
        
        # ASCII olmayan karakterleri temizle
        cleaned_data = ''.join(char for char in base64_data if ord(char) < 128)
        
        # Başka temizlemeler
        # Boşluk, tab, yeni satır gibi karakterleri de temizle
        cleaned_data = cleaned_data.replace(' ', '').replace('\t', '').replace('\n', '').replace('\r', '')
        
        # Temizlenmiş veriyi text alanına koy
        self.base64_text.delete("1.0", tk.END)
        self.base64_text.insert("1.0", cleaned_data)
        
        # Bilgi ver
        self.status_var.set("Base64 verisi temizlendi")
        messagebox.showinfo("Bilgi", "Base64 verisi temizlendi. Şimdi PDF'i görüntülemeyi deneyebilirsiniz.")

    def view_pdf_threaded(self):
        import threading
        threading.Thread(target=self.view_pdf, daemon=True).start()

    def open_base64_file_and_convert_threaded(self):
        import threading
        threading.Thread(target=self.open_base64_file_and_convert, daemon=True).start()

    def open_base64_file_and_convert(self):
        """Base64 verisini dosyadan okuyup doğrudan PDF'e çevirir (arayüze yüklemeden)"""
        file_path = filedialog.askopenfilename(
            title="Base64 Dosyası Seç ve PDF'e Dönüştür",
            filetypes=[("Metin Dosyaları", "*.txt"), ("Tüm Dosyalar", "*.*")]
        )
        if not file_path:
            return
        self.status_var.set("Base64 dosyası okunuyor...")
        try:
            with open(file_path, 'r') as file:
                base64_data = file.read().strip()
            # ASCII kontrolü
            try:
                base64_data.encode('ascii')
            except UnicodeEncodeError:
                messagebox.showerror("Hata", "Base64 verisi sadece ASCII karakterler içermelidir!\nLütfen dosyayı kontrol edin ve özel karakterleri temizleyin.")
                self.status_var.set("Hata: Base64 verisi ASCII olmayan karakterler içeriyor")
                return
            # Temizleme
            base64_data = base64_data.replace(' ', '').replace('\t', '').replace('\n', '').replace('\r', '')
            # Padding eksikse tamamla
            missing_padding = len(base64_data) % 4
            if missing_padding:
                base64_data += '=' * (4 - missing_padding)
            # Base64 decode
            try:
                pdf_data = base64.b64decode(base64_data)
            except base64.binascii.Error as e:
                messagebox.showerror("Hata", f"Geçersiz Base64 verisi: {str(e)}")
                self.status_var.set("Hata: Geçersiz Base64 formatı")
                return
            # Geçici dosya oluştur
            fd, temp_path = tempfile.mkstemp(suffix=".pdf")
            os.write(fd, pdf_data)
            os.close(fd)
            self.status_var.set(f"PDF oluşturuldu: {temp_path}")
            self.open_pdf_file(temp_path)
        except Exception as e:
            messagebox.showerror("Hata", f"PDF oluşturulamadı: {str(e)}")
            self.status_var.set("Hata: Dosya okunamadı veya işlenemedi")

def main():
    root = tk.Tk()
    app = Base64PDFViewer(root)
    
    # Windows için özel simge ayarı
    try:
        root.iconbitmap("icon.ico")
    except:
        pass
    
    root.mainloop()

if __name__ == "__main__":
    main() 