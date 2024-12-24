import { fetchNews } from "../api/fetchNews.js";
import { renderNews } from "../components/renderNews.js";
import { renderHero } from "../components/renderHero.js";

export let currentPage = 1;
export let totalPages = 1;

export const updatePagination = (currentPage, totalPages, category = null) => {
  const prevButton = document.getElementById("prev-page");
  const nextButton = document.getElementById("next-page");
  const pageNumber = document.getElementById("page-number");

  pageNumber.textContent = currentPage;

  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;

  prevButton.onclick = () => changePage("prev", category); 
  nextButton.onclick = () => changePage("next", category); 
};

// Cambio de página (anterior o siguiente)
export const changePage = (direction, category) => {
  if (direction === "next" && currentPage < totalPages) {
    currentPage++;
  } else if (direction === "prev" && currentPage > 1) {
    currentPage--;
  }

  // Llamamos a fetchNews pasando la categoría y las funciones necesarias
  fetchNews(currentPage, renderNews, renderHero, updatePagination, category);
};

export const setTotalPages = (value) => {
  totalPages = value;
};

export const setCurrentPage = (value) => {
  currentPage += value;
};
