  // Función para obtener el link correspondiente basado en la web
  export const getLink = (web) => {
    switch(web) {
      case "El Pais":
        return "https://www.elpais.com.uy/";
      case "Xataka":
        return "https://www.xataka.com/";
      case "Montevideo Portal":
        return "https://www.montevideo.com.uy/";
      default:
        return "#"; 
    }
  };