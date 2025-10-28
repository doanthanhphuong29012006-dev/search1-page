// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Get references to the DOM elements
    const searchInput = document.getElementById('searchInput');
    const tagItems = document.querySelectorAll('.tag-item');

    // Add an event listener to the search input
    searchInput.addEventListener('input', (event) => {
        // Get the search term and convert to lowercase
        const searchTerm = event.target.value.toLowerCase();

        // Loop through all tag items
        tagItems.forEach(item => {
            // Get the tag name text and convert to lowercase
            const tagName = item.querySelector('.tag-name').textContent.toLowerCase();

            // Check if the tag name includes the search term
            if (tagName.includes(searchTerm)) {
                // If it matches, show the item
                item.style.display = 'flex';
            } else {
                // If it doesn't match, hide the item
                item.style.display = 'none';
            }
        });
    });
});