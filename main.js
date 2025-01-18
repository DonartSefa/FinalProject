let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

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
