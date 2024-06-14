  // Get references to elements
  const itemsDiv = document.getElementById('items-div');
  const paginationLinks = document.querySelectorAll('.select-page-number');
  const previousButton = document.querySelector('.select-previous-page');
  const nextButton = document.querySelector('.select-next-page');
  let currentPage = 1;
  const itemsPerPage = 8;

  // Function to display items for the current page
  function displayItemsForPage() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Hide all items
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
      item.style.display = 'none';
    });

    // Show items for the current page
    for (let i = startIndex; i < endIndex && i < items.length; i++) {
      items[i].style.display = 'block';
    }

    // Update pagination links
    paginationLinks.forEach(link => {
      link.classList.remove('current-page');
      if (parseInt(link.getAttribute('value')) === currentPage) {
        link.classList.add('current-page');
      }
    });

        // Show/hide previous and next buttons
        if (currentPage === 1) {
            previousButton.classList.add('hidden');
        } else {
            previousButton.classList.remove('hidden');
        }
        
        if (currentPage === totalPages || totalItems === 0) {
            nextButton.classList.add('hidden');
        } else {
            nextButton.classList.remove('hidden');
        }
  }

  // Function to handle navigation to the previous page
  function goToPreviousPage() {
    if (currentPage > 1) {
      currentPage--;
      displayItemsForPage();
    }
  }

  // Function to handle navigation to the next page
  function goToNextPage() {
    const totalPages = Math.ceil(itemsDiv.getElementsByClassName('item').length / itemsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      displayItemsForPage();
    }
  }
  
  

  // Bind event handlers to pagination links
  paginationLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      currentPage = parseInt(this.getAttribute('value'));
      displayItemsForPage();
    });
  });

  // Bind event handlers to previous and next buttons
  document.querySelector('.select-previous-page').addEventListener('click', function(event) {
    event.preventDefault();
    goToPreviousPage();
  });

  document.querySelector('.select-next-page').addEventListener('click', function(event) {
    event.preventDefault();
    goToNextPage();
  });

  // Initial display of items
  displayItemsForPage();

