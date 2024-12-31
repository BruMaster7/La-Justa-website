import { getLogo } from "../utils/getLogo.js";
import {getLink} from "../utils/getLink.js"
import { renderCategories } from "./renderCategories.js";
import { formatISODate } from "../utils/formatISODate.js";

export const renderHero = (newsArray) => {
  const randomNews = newsArray[Math.floor(Math.random() * newsArray.length)];
  const heroContainer = document.querySelector(".hero-container");

  const heroHTML = `
    <div class="hero-bg relative w-full min-h-[400px] md:min-h-[500px] bg-no-repeat bg-cover bg-center" style="background-image: url('${randomNews.img}');">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="max-w-5xl min-h-full mx-auto relative z-10 py-10 px-5 flex flex-col justify-center mb-5">
        <div class="category mb-5 mt-5">
            <div id="categories-container">${renderCategories(randomNews.category)}</div>
        </div>
        <div class="hero-new max-w-screen-md mt-5">
         <a href="${randomNews.url}" target="_blank">
          <h3 class="text-4xl font-bold text-white">${randomNews.title}</h3>
          <p class="text-xl text-white mt-3">${randomNews.header || "Sin descripción."}</p>
          </a>
          <a href="${getLink(randomNews.web)}" target="_blank">
            <div class="portal-extracted flex items-center mt-4">
              <img class="h-14 rounded-3xl" src="${getLogo(randomNews.web)}" alt="Logo ${randomNews.web}">
              <p class="ml-3 text-lg text-white">${randomNews.web}</p>
              <p class="ml-auto text-lg text-white"> ${formatISODate(randomNews.date)} </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  `;

  heroContainer.innerHTML = heroHTML;
};
