import { fetchNews } from "./api/fetchNews.js";
import { renderHero } from "./components/renderHero.js";
import { renderNews } from "./components/renderNews.js";
import { updatePagination, setCurrentPage, currentPage, totalPages } from "./utils/pagination.js";

let currentCategory = null;

document.addEventListener("DOMContentLoaded", () => {
  const prevButton = document.getElementById("prev-page");
  const nextButton = document.getElementById("next-page");

  prevButton.addEventListener("click", () => changePage("prev"));
  nextButton.addEventListener("click", () => changePage("next"));

  fetchNews(currentPage, renderNews, renderHero, updatePagination, currentCategory);
});

const changePage = (direction) => {
  fetchNews(currentPage, renderNews, renderHero, updatePagination, currentCategory);
};






  
  
  
  