  // Función para obtener el logo correspondiente basado en la web
 export const getLogo = (web) => {
    switch(web) {
      case "El Pais":
        return "/src/assets/img/el-pais-logo.png";
      case "Xataka":
        return "/src/assets/img/xataka-logo.png";
      case "Montevideo Portal":
        return "/src/assets/img/montevideo-portal-logo.png";
      default:
        return "/src/assets/img/logo.png";  // Logo por defecto
    }
  };