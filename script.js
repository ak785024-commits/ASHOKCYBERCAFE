// Mobile Menu
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("show");
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

        if (nav) {
            nav.classList.remove("show");
        }
    });
});

// Footer Year
const year = document.getElementById("year");
if (year) {
    year.textContent = new Date().getFullYear();
}
