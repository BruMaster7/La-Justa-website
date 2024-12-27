import { fetchNews } from "../api/fetchNews.js";
import { renderNews } from "../components/renderNews.js";
import { renderHero } from "../components/renderHero.js";
import { updateURLParams } from "./updateURLParams.js";

export let currentPage = 1;
export let totalPages = 1;

export const initializePagination = (category = null, title = '') => {
  const params = new URLSearchParams(window.location.search);

  // Obtener los parametros de la URL
  const page = parseInt(params.get("page")) || 1; // Página por defecto: 1
  category = params.get("category") || null;
  title = params.get("title") || "";

  setCurrentPage(page);
  fetchNews(currentPage, renderNews, renderHero, updatePagination, category, title);
};

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

  updateURLParams(currentPage, category, title);

  fetchNews(currentPage, renderNews, renderHero, updatePagination, category, title);
};


export const setTotalPages = (value) => {
  totalPages = value;
};

export const setCurrentPage = (value) => {
  currentPage = value;
};
