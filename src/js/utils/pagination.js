import { fetchNews } from "../api/fetchNews.js";
import { renderNews } from "../components/renderNews.js";
import { renderHero } from "../components/renderHero.js";

export let currentPage = 1;
export let totalPages = 1;

export const updatePagination = (currentPage, totalPages, category = null, title = '') => {
  const prevButton = document.getElementById("prev-page");
  const nextButton = document.getElementById("next-page");
  const pageNumber = document.getElementById("page-number");

  pageNumber.textContent = currentPage;

  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;

  prevButton.onclick = () => changePage("prev", category, title); 
  nextButton.onclick = () => changePage("next", category, title); 
};

export const changePage = (direction, category = null, title = '') => {
  if (direction === "next" && currentPage < totalPages) {
    currentPage++;
  } else if (direction === "prev" && currentPage > 1) {
    currentPage--;
  }

  fetchNews(currentPage, renderNews, renderHero, updatePagination, category, title);
};


export const setTotalPages = (value) => {
  totalPages = value;
};

export const setCurrentPage = (value) => {
  currentPage = value;
};
