document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", () => {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });
});
