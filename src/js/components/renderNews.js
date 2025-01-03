import { renderCategories } from "./renderCategories.js";
import { getLogo } from "../utils/getLogo.js";
import {getLink} from "../utils/getLink.js"
import { formatISODate } from "../utils/formatISODate.js";

export const renderNews = (newsArray) => {
  const newsContainer = document.getElementById("news-container");
  newsContainer.innerHTML = "";

  newsArray.forEach((news) => {
    const newsHTML = `
      <div class="new-container flex flex-col bg-white shadow my-5">
        <img src="${news.img}" alt="${news.header}" class="w-full h-auto">
        <div class="p-4">
          <div id="categories-container">${renderCategories(news.category)}</div>
          <a href="${news.url}" target="_blank"> <h3 class="text-xl font-bold">${news.title}</h3> </a>
          <a href="${getLink(news.web)}" target="_blank">
            <div class="flex items-center mt-4">
              <img class="h-10 rounded-3xl" src="${getLogo(news.web)}" alt="Logo ${news.web}">
              <p class="ml-3 text-lg">${news.web}</p>
              <p class="ml-auto text-lg "> ${formatISODate(news.date)} </p>
            </div>
          </a>
        </div>
      </div>
    `;
    newsContainer.innerHTML += newsHTML;
  });
};

