export const renderCategories = (categories) => {
    if (Array.isArray(categories)) {
      return categories.map(category => `
        <a href="#">
          <button type="button" class="focus:outline-none text-justa-white font-bold text-sm bg-justa-red hover:bg-green-800 focus:ring-4 rounded-full focus:ring-green-300 px-5 py-2.5 me-2 mb-2 dark:bg-justa-red dark:hover:bg-red-700 dark:focus:ring-red-800 my-3">
            ${category}
          </button>
        </a>
      `).join('');  // Une los botones si hay más de una categoría
    } else {
      return `<a href="#">
                <button type="button" class="focus:outline-none text-justa-white font-bold text-sm bg-justa-red hover:bg-green-800 focus:ring-4 rounded-full focus:ring-green-300 px-5 py-2.5 me-2 mb-2 dark:bg-justa-red dark:hover:bg-red-700 dark:focus:ring-red-800 my-3">
                  ${categories}
                </button>
              </a>`;
    }
  };