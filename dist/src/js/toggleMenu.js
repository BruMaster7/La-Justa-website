const navMenu = document.getElementById("nav-menu");
const menuButton = document.getElementById("menu-button");
const closeMenuButton = document.getElementById("close-menu");

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
  }


// Control del menú hamburguesa
menuButton.addEventListener("click", () => {
  navMenu.classList.add("open");
  navMenu.classList.remove("hidden");
  closeMenuButton.classList.remove("hidden");
});

// Control del botón de cierre
closeMenuButton.addEventListener("click", () => {
  navMenu.classList.remove("open");
  navMenu.classList.add("hidden");
  closeMenuButton.classList.add("hidden");
});