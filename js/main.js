document.addEventListener('DOMContentLoaded', () => {
    // Navigasyon Elemanları
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const closeMenu = document.getElementById('closeMenu');

    // Menü Açma (Hamburger)
    if (hamburger) {
        hamburger.onclick = () => {
            navLinks.classList.add('active');
            document.body.style.overflow = 'hidden'; // Kaydırmayı kapat
        };
    }

    // Menü Kapatma (Çarpı)
    if (closeMenu) {
        closeMenu.onclick = () => {
            navLinks.classList.remove('active');
            document.body.style.overflow = 'auto'; // Kaydırmayı aç
        };
    }

    // Linklere tıklayınca menüyü otomatik kapat
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.onclick = () => {
            navLinks.classList.remove('active');
            document.body.style.overflow = 'auto';
        };
    });


    /**
     * 2. DİNAMİK SERGİ DETAYLARI SİSTEMİ
     * URL'deki ?art= parametresine göre detay sayfasını doldurur
     */
    const urlParams = new URLSearchParams(window.location.search);
    const artType = urlParams.get('art');

    // Sergi Veri Havuzu
    const artData = {
        'ethereal': {
            title: 'Ethereal <br><span class="italic accent-clr">Forms</span>',
            artist: 'Selin Ege',
            date: '15 Ocak - 20 Şubat 2026',
            desc: 'İnsan zihnindeki karmaşayı geometrik formlarla anlatan bu sergi, modern sanatının sınırlarını zorluyor.',
            img: 'images/SERGİLER.jpg'
        },
        'digital': {
            title: 'Digital <br><span class="italic accent-clr">Chaos</span>',
            artist: 'Mert Doğan',
            date: '05 Mart - 15 Nisan 2026',
            desc: 'Dijital algoritmalardan doğan bu karmaşa, teknoloji ve sanatın kusursuz birleşimini temsil ediyor.',
            img: 'images/SERGİLER3.jpeg'
        },
        
        'abstract': {
            title: 'Abstract <br><span class="italic accent-clr">Mind</span>',
            artist: 'Canan Dağ',
            date: '10 Mayıs - 20 Haziran 2026',
            desc: 'Soyut dışavurumculuğun modern yorumu. Renklerin ve biçimlerin dansıyla izleyiciyi içsel bir yolculuğa çıkarıyor.',
            img: 'images/SERGİLER2.jpeg'
        }
    };

    // Eğer bir sergi türü seçilmişse ve bu veri listemizde varsa doldurmaya başla
    if (artType && artData[artType]) {
        const selected = artData[artType];
        
        // Elementlerin varlığını kontrol ederek hata almayı engelliyoruz
        const titleEl = document.getElementById('detail-title');
        const artistEl = document.getElementById('detail-artist');
        const dateEl = document.getElementById('detail-date');
        const descEl = document.getElementById('detail-desc');
        const imgEl = document.getElementById('detail-img');

        if (titleEl) titleEl.innerHTML = selected.title;
        if (artistEl) artistEl.innerText = selected.artist;
        if (dateEl) dateEl.innerText = selected.date;
        if (descEl) descEl.innerText = selected.desc;
        if (imgEl) {
            imgEl.src = selected.img;
            imgEl.alt = selected.artist + " - " + artType;
        }
    }
});