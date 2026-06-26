// Katıl Butonu Fonksiyonu
function klanaKatil(klanAdi) {
    alert("🚀 " + klanAdi.toUpperCase() + " klanına başvurun başarıyla iletildi!");
}

// Alt Menü Kaydırma Fonksiyonu
function sayfaKaydir(elementId) {
    var hedef = document.getElementById(elementId);
    if (hedef) {
        hedef.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// --- CANLI SUNUCU SAYAÇLARI ---

// 1. Sunucu: türk gel (Rastgele Oyuncu Değişimi)
setInterval(function() {
    var sayac1 = document.getElementById('sayac-turkgel');
    if (sayac1) {
        var rastgeleOyuncu = Math.floor(Math.random() * 16) + 3; // 3 ile 18 arası sayı üretir
        sayac1.innerText = rastgeleOyuncu + "/20";
    }
}, 4000); // Her 4 saniyede bir güncellenir

// 2. Sunucu: türkiye (Aşama Aşama Dolan Sunucu)
var saniye = 0;
setInterval(function() {
    var sayac2 = document.getElementById('sayac-turkiye');
    if (!sayac2) return;

    saniye++;

    if (saniye === 5) {
        sayac2.innerText = "17/20";
    } else if (saniye === 10) {
        sayac2.innerText = "20/20";
        sayac2.classList.add("dolu"); // Rengi kırmızıya döner
    } else if (saniye === 15) {
        sayac2.innerText = "12/20";
        sayac2.classList.remove("dolu"); // Rengi tekrar yeşile döner
        saniye = 0; // Döngüyü sıfırla
    }
}, 1000); // Her saniye kontrol eder
