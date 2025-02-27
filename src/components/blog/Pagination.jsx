// Pagination.jsx - Pagination Component
import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Logic to show limited page numbers
  const maxPageNumbersToShow = 5;
  let pagesToShow = [...pageNumbers];
  
  if (pageNumbers.length > maxPageNumbersToShow) {
    const halfWay = Math.floor(maxPageNumbersToShow / 2);
    
    if (currentPage <= halfWay + 1) {
      // Near the start
      pagesToShow = [...pageNumbers.slice(0, maxPageNumbersToShow - 1), '...', pageNumbers[pageNumbers.length - 1]];
    } else if (currentPage >= pageNumbers.length - halfWay) {
      // Near the end
      pagesToShow = [1, '...', ...pageNumbers.slice(-maxPageNumbersToShow + 1)];
    } else {
      // Somewhere in the middle
      pagesToShow = [
        1, 
        '...', 
        ...pageNumbers.slice(currentPage - 2, currentPage + 1), 
        '...', 
        pageNumbers[pageNumbers.length - 1]
      ];
    }
  }

  return (
    <nav className="flex justify-center my-8">
      <ul className="flex items-center space-x-1">
        {/* Previous button */}
        <li>
          <button
            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-2 rounded-md ${
              currentPage === 1 
                ? 'text-gray-400 cursor-not-allowed' 
                : 'text-gray-700 hover:bg-gray-200'
            }`}
          >
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </li>
        
        {/* Page numbers */}
        {pagesToShow.map((number, index) => (
          <li key={index}>
            {number === '...' ? (
              <span className="px-3 py-2 text-gray-500">...</span>
            ) : (
              <button
                onClick={() => paginate(number)}
                className={`px-3 py-2 rounded-md ${
                  currentPage === number
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                {number}
              </button>
            )}
          </li>
        ))}
        
        {/* Next button */}
        <li>
          <button
            onClick={() => currentPage < pageNumbers.length && paginate(currentPage + 1)}
            disabled={currentPage === pageNumbers.length}
            className={`px-3 py-2 rounded-md ${
              currentPage === pageNumbers.length
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 hover:bg-gray-200'
            }`}
          >
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;