import { fetchNews } from "./api/fetchNews.js";
import { renderHero } from "./components/renderHero.js";
import { renderNews } from "./components/renderNews.js";
import { updatePagination, currentPage, initializePagination, setCurrentPage } from "./utils/pagination.js";
import { updateURLParams } from "./utils/updateURLParams.js";

let currentCategory = null;
let currentTitle = '';

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  // Inicializa desde la URL
  let page = parseInt(params.get("page")) || 1;
  setCurrentPage(page);
  currentCategory = params.get("category") || null;
  currentTitle = params.get("title") || "";

  initializePagination(currentCategory, currentTitle);
  updateURLParams(currentPage, currentCategory, currentTitle);
  const prevButton = document.getElementById("prev-page");
  const nextButton = document.getElementById("next-page");

  prevButton.addEventListener("click", () => changePage("prev"));
  nextButton.addEventListener("click", () => changePage("next"));

  // Cargar noticias iniciales
  fetchNews(currentPage, renderNews, renderHero, updatePagination, currentCategory, currentTitle);
});

const categoryLinks = document.querySelectorAll('a[data-category]');

categoryLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = link.getAttribute('data-category');
    currentCategory = target;
    updateURLParams(currentPage, currentCategory, currentTitle);
    fetchNews(1, renderNews, renderHero, updatePagination, currentCategory);
    const newsSection = document.getElementById("news-container");
    if (newsSection) {
      newsSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const changePage = () => {
  //updateURLParams(currentPage, currentCategory, currentTitle);
  fetchNews(currentPage, renderNews, renderHero, updatePagination, currentCategory, currentTitle);
};







  
  
  
  