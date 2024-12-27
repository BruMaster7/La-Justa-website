export const updateURLParams = (page, category = null, title = '') => {
    const params = new URLSearchParams(window.location.search);
  
    params.set("page", page);
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    if (title) {
      params.set("title", title); 
    } else {
      params.delete("title");
    }  
    const newURL = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, "", newURL); // Actualiza la URL sin recargar la página
  };
  