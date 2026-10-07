# Ekstre Analiz

Kredi kartı ekstresini (PDF, Excel, CSV) telefonda analiz eden, internetsiz çalışan web uygulaması.

**Gizlilik:** Ekstre dosyaları yalnızca cihazda işlenir. Sayfa, tarayıcı seviyesinde tüm ağ isteklerini engeller (`connect-src 'none'`). Cihazda kalıcı tutulan tek şey "yer adı → kategori" eşleşmeleridir; tutar ve tarih saklanmaz.

## Kurulum (GitHub Pages)

1. GitHub'da yeni bir **public** repo oluştur (ör. `ekstre`).
2. **Add file → Upload files** ile bu klasördeki tüm dosyaları yükle. Hepsi aynı seviyede olmalı, alt klasör yok.
3. **Settings → Pages → Build and deployment**: Source "Deploy from a branch", Branch `main`, klasör `/ (root)` → Save.
4. Birkaç dakika sonra adres hazır olur: `https://KULLANICIADI.github.io/ekstre/`

## iPhone'a kurma

1. Adresi **Safari**'de aç.
2. Üstte "İnternetsiz kullanıma hazır" yazısını gör.
3. Paylaş → **Ana Ekrana Ekle**.
4. Ana ekrandaki ikondan bir kez aç. Bundan sonra uçak modunda da açılır.

## Güncelleme

Herhangi bir dosyayı değiştirdiğinde `sw.js` içindeki `VERSION` değerini artır (`ekstre-v2` gibi). Uygulamayı internet varken iki kez kapatıp açınca yeni sürüm gelir.

## Uyarılar

- Bu repoya **asla** ekstre PDF'i, Excel'i ya da uygulamadaki "Yedekle" çıktısını koyma. Yedekte tutar yok ama alışveriş yaptığın yerlerin listesi var.
- Öğrenilen kategoriler her adrese ayrı kaydedilir. Başka bir adresten (ör. claude.ai linki) geçiyorsan orada "Yedekle", burada "Yedekten yükle" kullan.
