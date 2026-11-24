
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

// Membuka dan menutup menu navigasi
menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("show");

    menuBtn.textContent = navMenu.classList.contains("show")
        ? "✕"
        : "☰";
});

// Menutup menu setelah memilih navigasi
document.querySelectorAll(".nav-menu a").forEach(function(link) {
    link.addEventListener("click", function() {
        navMenu.classList.remove("show");
        menuBtn.textContent = "☰";
    });
});

// Tahun otomatis pada footer
document.getElementById("year").textContent =
    new Date().getFullYear();
