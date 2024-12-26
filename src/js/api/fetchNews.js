import { setTotalPages, totalPages } from '../utils/pagination.js';

export const fetchNews = async (page, renderNews, renderHero, updatePagination, category = '', title = '') => {
  try {
    const categoryParam = category ? `&category=${encodeURIComponent(category)}` : '';
    const titleParam = title ? `&title=${encodeURIComponent(title)}` : '';
    
    const response = await fetch(`http://127.0.0.1:8000/news?page=${page}${categoryParam}${titleParam}`);
    const data = await response.json();

    setTotalPages(data.pagination.total_pages);

    renderNews(data.data);
    renderHero(data.data);


    updatePagination(page, totalPages, category, title);

  } catch (error) {
    console.error("Error al obtener las noticias:", error);
  }
};



