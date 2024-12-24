const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const navMenu = document.getElementById("nav-menu");
const menuButton = document.getElementById("menu-button");
const closeMenuButton = document.getElementById("close-menu");

// Control del buscador
searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (searchInput.classList.contains("hidden")) {
    searchInput.classList.remove("hidden");
    searchInput.classList.add("visible");
    searchInput.focus();
  } else {
    const query = searchInput.value.trim();
    if (query) {
      window.location.href = `http://127.0.0.1:8000/news?search=${encodeURIComponent(query)}`;
    }
    searchInput.classList.remove("visible");
    searchInput.classList.add("hidden");
  }
});

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
