function toggleMenu() {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".navigation");

    if (!hamburger.classList.contains("active")) {
        // BUKA
        hamburger.classList.add("active");
        nav.classList.add("active");
    } else {
        // TUTUP
        hamburger.classList.remove("active");
        
        // Tambahkan 'closing' agar CSS menjalankan transition slide up
        nav.classList.add("closing");
        nav.classList.remove("active");

        setTimeout(() => {
            // Bersihkan setelah animasi selesai (600ms)
            nav.classList.remove("closing");
        }, 600); 
    }
}