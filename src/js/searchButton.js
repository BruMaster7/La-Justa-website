import { fetchNews } from "./api/fetchNews.js";
import { updatePagination, currentPage, setCurrentPage } from "./utils/pagination.js";
import { renderNews } from "./components/renderNews.js";
import { renderHero } from "./components/renderHero.js";

const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
let currentCategory = null;
let currentTitle = '';

const handleSearch = () => {
  const query = searchInput.value.trim();
  if (query) {
    currentTitle = query;
    setCurrentPage(1); 
    fetchNews(currentPage, renderNews, renderHero, updatePagination, currentCategory, currentTitle);
  }
  searchInput.classList.remove("visible");
  searchInput.classList.add("hidden");
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
