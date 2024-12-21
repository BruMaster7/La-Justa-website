import { fetchNews } from "./api/fetchNews.js";
import { renderHero } from "./components/renderHero.js";
import { renderNews } from "./components/renderNews.js";
import { updatePagination, setCurrentPage,currentPage, totalPages } from "./utils/pagination.js";
import { toggleMenu } from "./toggleMenu.js";

document.addEventListener("DOMContentLoaded", () => {
  const prevButton = document.getElementById("prev-page");
  const nextButton = document.getElementById("next-page");

  prevButton.addEventListener("click", () => changePage("prev"));
  nextButton.addEventListener("click", () => changePage("next"));

  fetchNews(1, renderNews, renderHero, updatePagination);
});

const changePage = (direction) => {
  if (direction === "next" && currentPage < totalPages) {
    setCurrentPage(1);
  } else if (direction === "prev" && currentPage > 1) {
    setCurrentPage(-1);
  }
  fetchNews(currentPage, renderNews, renderHero, updatePagination);
};


  
  
  
  