// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInputs = document.querySelectorAll('.search-bar');
    
    searchInputs.forEach(searchInput => {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const cards = document.querySelectorAll('.card');
            const scrollContainer = document.querySelector('.scroll-container');
            const scrollImages = scrollContainer ? scrollContainer.querySelectorAll('img') : [];
            
            // Search in product cards
            cards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'flex';
                    card.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Search in scroll container images
            scrollImages.forEach(img => {
                const altText = img.alt.toLowerCase();
                if (altText.includes(searchTerm)) {
                    img.parentElement.style.display = 'block';
                    img.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    img.parentElement.style.display = 'none';
                }
            });
        });
    });
});

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style); 