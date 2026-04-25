Minimalist Weather App
Bu proje, dünya genelindeki şehirlerin anlık hava durumu verilerini dinamik olarak çeken ve kullanıcıya sunan, modern bir web uygulamasıdır. WeatherAPI entegrasyonu ile gerçek zamanlı veri analizi yapar.

Temel Özellikler
Gerçek Zamanlı Arama: Şehir ismine göre anlık sıcaklık, konum ve hava durumu durumu bilgisi.

Asenkron Veri Yönetimi: Fetch API ve Async/Await yapısı kullanılarak kesintisiz veri akışı.

Dinamik UI: Arama sonrası otomatik olarak güncellenen şehir ismi, ülke kodu ve sıcaklık değerleri.

Minimalist Tasarım: Responsive ve göz yormayan, pastel tonlarda kullanıcı arayüzü.

Teknik Altyapı
Frontend: HTML5, CSS3

Script: JavaScript (ES6+)

API: WeatherAPI

Yöntem: REST API, Asynchronous JavaScript

Kurulum ve Çalıştırma
Bu depoyu klonlayın:

Bash
git clone https://github.com/kullanici_adin/weather-app.git
Proje klasörüne gidin ve index.html dosyasını tarayıcınızda açın.

Arama kutusuna bir şehir ismi yazıp Enter tuşuna basın.

Kod Yapısı Hakkında Notlar
API Key Güvenliği: Kod içerisinde api.key değişkeni ile WeatherAPI üzerinden kimlik doğrulaması yapılmaktadır.

Hata Yönetimi: try-catch blokları sayesinde API yanıt vermediğinde veya hatalı veri geldiğinde konsol üzerinden takip imkanı sağlanmıştır.

CORS: Güvenli veri alışverişi için mode: "cors" parametresi eklenmiştir.
