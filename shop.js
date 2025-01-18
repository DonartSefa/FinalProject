
const buyButtons = document.querySelectorAll('.btn');

buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const notification = document.getElementById('notification');
    
 
    notification.classList.add('show');
    

    setTimeout(() => {
      notification.classList.remove('show');
    }, 3000);
  });
});


let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count on page load
document.getElementById("cart-count").textContent = cart.length;

// Add to cart functionality
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    const productId = card.dataset.id;
    const productName = card.querySelector("h3").textContent;
    const productPrice = card.querySelector("h2").textContent;

    // Add product to cart
    cart.push({ id: productId, name: productName, price: productPrice });
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update cart count
    document.getElementById("cart-count").textContent = cart.length;

  });
});


function filterProducts() {
  // Get the search query
  const searchQuery = document.getElementById("searchbar").value.toLowerCase();
  // Get all the product cards
  const products = document.querySelectorAll(".card");

  // Loop through each product and check if it matches the search query
  products.forEach(product => {
      const productName = product.getAttribute("data-name").toLowerCase();

      // If the product name matches the search query, show it, otherwise hide it
      if (productName.includes(searchQuery)) {
          product.style.display = "inline-block";
      } else {
          product.style.display = "none";
      }
  });
}