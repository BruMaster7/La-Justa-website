import { renderCategories } from "./renderCategories.js";
import { getLogo } from "../utils/getLogo.js";

export const renderNews = (newsArray) => {
  const newsContainer = document.getElementById("news-container");
  newsContainer.innerHTML = "";

  newsArray.forEach((news) => {
    const newsHTML = `
      <div class="new-container flex flex-col bg-white shadow my-5">
        <img src="${news.img}" alt="${news.header}" class="w-full h-auto">
        <div class="p-4">
          <div>${renderCategories(news.category)}</div>
          <h3 class="text-xl font-bold">${news.title}</h3>
          <p>${news.text}</p>
          <a href="${news.web}" target="_blank">
            <div class="flex items-center mt-4">
              <img class="h-10 rounded-3xl" src="${getLogo(news.web)}" alt="Logo ${news.web}">
              <p class="ml-3 text-lg">${news.web}</p>
            </div>
          </a>
        </div>
      </div>
    `;
    newsContainer.innerHTML += newsHTML;
  });
};

