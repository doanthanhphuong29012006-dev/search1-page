document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const tagItems = document.querySelectorAll('.tag_item');

    searchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase();

        tagItems.forEach(item => {
            const tagName = item.querySelector('.tag_name').textContent.toLowerCase();

            if (tagName.includes(searchTerm)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
