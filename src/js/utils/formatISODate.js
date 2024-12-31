/**
 * Convierte una fecha en formato ISO (YYYY-MM-DDTHH:mm:ss) al formato DD/MM/YYYY HH:mm.
 * @param {string} isoDate - Fecha en formato ISO.
 * @returns {string} - Fecha formateada como DD/MM/YYYY HH:mm.
 */
export function formatISODate(isoDate) {
    try {
        // Crear un objeto Date a partir de la cadena ISO
        const date = new Date(isoDate);

        // Extraer componentes de la fecha
        const day = String(date.getDate()).padStart(2, "0"); // Día con dos dígitos
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Mes con dos dígitos
        const year = date.getFullYear(); // Año completo
        const hours = String(date.getHours()).padStart(2, "0"); // Hora con dos dígitos
        const minutes = String(date.getMinutes()).padStart(2, "0"); // Minutos con dos dígitos

        // Construir la fecha formateada
        return `${day}/${month}/${year} ${hours}:${minutes}`;
    } catch (error) {
        console.error("Error al formatear la fecha:", error);
        return isoDate; // Devuelve la fecha original si hay error
    }
}
