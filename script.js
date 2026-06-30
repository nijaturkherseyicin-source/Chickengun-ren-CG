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

// 1. Sunucu: türk gel
setInterval(function() {
    var sayac1 = document.getElementById('sayac-turkgel');
    if (sayac1) {
        var rastgeleOyuncu = Math.floor(Math.random() * 16) + 3;
        sayac1.innerText = rastgeleOyuncu + "/20";
    }
}, 4000);

// 2. Sunucu: türkiye
var saniye = 0;
setInterval(function() {
    var sayac2 = document.getElementById('sayac-turkiye');
    if (!sayac2) return;

    saniye++;

    if (saniye === 5) {
        sayac2.innerText = "17/20";
    } else if (saniye === 10) {
        sayac2.innerText = "20/20";
        sayac2.classList.add("dolu");
    } else if (saniye === 15) {
        sayac2.innerText = "12/20";
        sayac2.classList.remove("dolu");
        saniye = 0;
    }
}, 1000);

// --- AYARLAR MODAL (AÇILIR PENCERE) FONKSİYONLARI ---

function ayarlariAc() {
    document.getElementById('ayarlar-modal').style.display = "block";
}

function ayarlariKapat() {
    document.getElementById('ayarlar-modal').style.display = "none";
}

// Pencere dışına tıklanınca kapatma
window.onclick = function(event) {
    var modal = document.getElementById('ayarlar-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Tema Değiştirme (Karanlık / Aydınlık Mod)
function temaDegistir() {
    var switchButon = document.getElementById('tema-switch');
    if (!switchButon.checked) {
        document.body.classList.add('light-theme'); // Beyaz mod aktif
    } else {
        document.body.classList.remove('light-theme'); // Karanlık mod aktif
    }
}
