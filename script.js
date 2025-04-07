const products = [
    {
        name: "Handmade Necklace",
        description: "A beautiful handmade necklace made from natural stones.",
        price: "$25",
        image: "necklace.jpeg"
    },
    {
        name: "Handcrafted Mug",
        description: "A unique mug crafted by local artisans.",
        price: "$15",
        image: "mug.jpeg"
    },
    {
        name: "Woven Basket",
        description: "A sturdy basket made from natural fibers.",
        price: "$30",
        image: "basket.webp"
    },
    {
        name: "Handmade Ring",
        description: "A stunning ring made with care and precision.",
        price: "$20",
        image: "ring.jpg"
    },
    {
        name: "Knitted Scarf",
        description: "A warm and cozy scarf perfect for winter.",
        price: "$35",
        image: "scarf.jpg" 
    },
    {
        name: "Original Painting",
        description: "An original painting by a local artist.",
        price: "$150",
        image: "painting.jpg" 
    }
];

function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>${product.price}</strong></p>
        `;
        productList.appendChild(productDiv);
    });
}

window.onload = displayProducts;

document.addEventListener('DOMContentLoaded', function() {
    // Profile display functionality
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const profileSection = document.getElementById('profile-section');
    
    if (userInfo && userInfo.isLoggedIn) {
        profileSection.style.display = 'block';
        document.getElementById('user-name').textContent = userInfo.name;
        document.getElementById('user-email').textContent = userInfo.email;
    }

    // Logout functionality
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('userInfo');
            window.location.reload();
        });
    }

    // Scroll functionality
    const scrollContainer = document.querySelector('.scroll-container');
    const progressBar = document.querySelector('.scroll-progress-bar');

    if (scrollContainer && progressBar) {
        scrollContainer.addEventListener('scroll', () => {
            const scrollWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;
            const scrolled = scrollContainer.scrollLeft;
            const progress = (scrolled / scrollWidth) * 100;
            progressBar.style.width = `${progress}%`;
        });
    }

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.card');

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            cards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Feedback form submission
    const feedbackForm = document.getElementById('feedback-form');
    
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your feedback!');
            this.reset();
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.querySelector('.scroll-container');
    const progressBar = document.querySelector('.scroll-progress-bar');

    // Update progress bar
    scrollContainer.addEventListener('scroll', () => {
        const scrollWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        const scrolled = scrollContainer.scrollLeft;
        const progress = (scrolled / scrollWidth) * 100;
        progressBar.style.width = `${progress}%`;
    });

    // Cart functionality
    const cartItems = document.querySelectorAll('.cart li');
    const removeButtons = document.querySelectorAll('.remove-item');
    const cartTotal = document.querySelector('.cart-total');
    const checkoutBtn = document.querySelector('.checkout-btn');

    // Remove item from cart
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const item = this.parentElement;
            item.remove();
            updateCartTotal();
        });
    });

    // Update cart total
    function updateCartTotal() {
        let total = 0;
        cartItems.forEach(item => {
            const price = parseFloat(item.querySelector('.price').textContent.replace('$', ''));
            total += price;
        });
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }

    // Add animation for cart items
    const style = document.createElement('style');
    style.textContent = `