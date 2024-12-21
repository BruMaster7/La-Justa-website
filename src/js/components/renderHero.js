import { getLogo } from "../utils/getLogo.js";

export const renderHero = (newsArray) => {
  const randomNews = newsArray[Math.floor(Math.random() * newsArray.length)];
  const heroContainer = document.querySelector(".hero-container");

  const heroHTML = `
    <div class="hero-bg relative w-full min-h-[400px] md:min-h-[500px] bg-no-repeat bg-cover bg-center" style="background-image: url('${randomNews.img}');">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="max-w-5xl min-h-full mx-auto relative z-10 py-10 px-5 flex flex-col justify-center mb-5">
        <div class="category mb-5 mt-5">
          <a href="#">
            <button class="focus:outline-none text-justa-white font-bold text-xl bg-justa-green hover:bg-green-800 px-5 py-2.5 rounded-full">
              ${randomNews.category || "Categoría desconocida"}
            </button>
          </a>
        </div>
        <div class="hero-new max-w-screen-md mt-5">
          <h3 class="text-4xl font-bold text-white">${randomNews.title}</h3>
          <p class="text-xl text-white mt-3">${randomNews.header || "Sin descripción."}</p>
          <a href="${randomNews.web}" target="_blank">
            <div class="portal-extracted flex mt-4">
              <img class="h-14 rounded-3xl" src="${getLogo(randomNews.web)}" alt="Logo ${randomNews.web}">
              <p class="ml-3 text-lg text-white">${randomNews.web}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  `;

  heroContainer.innerHTML = heroHTML;
};
