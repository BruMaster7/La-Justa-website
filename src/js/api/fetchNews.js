import { setTotalPages, totalPages } from '../utils/pagination.js'

export const fetchNews = async (page, renderNews, renderHero, updatePagination, category = '') => {
  try {
    const categoryParam = category ? `&category=${encodeURIComponent(category)}` : '';
    const response = await fetch(`http://127.0.0.1:8000/news?page=${page}${categoryParam}`);
    const data = await response.json();

    setTotalPages(data.pagination.total_pages);

    renderNews(data.data);
    renderHero(data.data);
    updatePagination(page, totalPages);
  } catch (error) {
    console.error("Error al obtener las noticias:", error);
  }
};
