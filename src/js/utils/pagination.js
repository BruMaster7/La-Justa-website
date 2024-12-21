export let currentPage = 1;
export let totalPages = 1;

export const updatePagination = (currentPage) => {
   const prevButton = document.getElementById('prev-page');
   const nextButton = document.getElementById('next-page');
   const pageNumber = document.getElementById('page-number');
    
   pageNumber.textContent = currentPage;
    
   prevButton.disabled = currentPage === 1;
    
   nextButton.disabled = currentPage === totalPages;
  };
  
export const changePage = (direction) => {
   if (direction === 'next' && currentPage < totalPages) {
     currentPage++;
   } else if (direction === 'prev' && currentPage > 1) {
     currentPage--;
   }
    
   fetchNews(currentPage);
};

export const setTotalPages = (value) => {
   totalPages = value;
};

export const setCurrentPage = (value) => {
    currentPage = currentPage+value;
 };