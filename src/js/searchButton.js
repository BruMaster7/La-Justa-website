import { fetchNews } from "./api/fetchNews.js";
import { updatePagination, currentPage } from "./utils/pagination.js";
import { updateURLParams } from "./utils/updateURLParams.js";
import { renderNews } from "./components/renderNews.js";
import { renderHero } from "./components/renderHero.js";

const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const navMenu = document.getElementById("nav-menu");

let currentCategory = null;
let currentTitle = '';

const handleSearch = () => {
  const query = searchInput.value.trim();
  if (query) {
    currentTitle = query;
    updateURLParams(1, null, currentTitle);
    fetchNews(1, renderNews, renderHero, updatePagination, currentCategory, currentTitle);
  }
  searchInput.classList.remove("visible");
  searchInput.classList.add("hidden");

  navMenu.classList.remove("open");
  navMenu.classList.add("hidden");
  closeMenuButton.classList.add("hidden");
  const newsSection = document.getElementById("news-container");
  if (newsSection) {
    newsSection.scrollIntoView({ behavior: "smooth" });
  }
};

// Control del buscador
searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (searchInput.classList.contains("hidden")) {
    searchInput.classList.remove("hidden");
    searchInput.classList.add("visible");
    searchInput.focus();
  } else {
    handleSearch();
    searchInput.classList.remove("visible");
    searchInput.classList.add("hidden");
  }
});

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    handleSearch();
  }
});
