import { fetchNews } from "../api/fetchNews.js";
import { renderHero } from "./renderHero.js";
import { renderNews } from "./renderNews.js";
import { updatePagination } from "../utils/pagination.js";
import { updateURLParams } from "../utils/updateURLParams.js";

export const renderCategories = (categories) => {
  if (Array.isArray(categories)) {
    return categories.map((category) => 
      `
          <button type="button" 
                  class="focus:outline-none text-justa-white font-bold text-sm bg-justa-green hover:bg-green-800 
                         focus:ring-4 rounded-full focus:ring-green-300 px-5 py-2.5 me-2 mb-2 my-3"
                  data-category="${category}">
            ${category}
          </button>
        `
      ).join(""); // Une los botones si hay más de una categoría
  } else {
    return `
      <button type="button" 
              class="focus:outline-none text-justa-white font-bold text-sm bg-justa-green hover:bg-green-800 
                         focus:ring-4 rounded-full focus:ring-green-300 px-5 py-2.5 me-2 mb-2 my-3"
              data-category="${categories}">
        ${categories}
      </button>
    `;
  }
};

document.addEventListener("click", (event) => {
  const target = event.target.closest("button[data-category]");
  if (target) {
    const category = target.getAttribute("data-category");
    updateURLParams(1, category, "");
    fetchNews(1, renderNews, renderHero, updatePagination, category);
    const newsSection = document.getElementById("news-container");
    if (newsSection) {
      newsSection.scrollIntoView({ behavior: "smooth" });
    }
  }
});