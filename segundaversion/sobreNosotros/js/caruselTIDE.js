let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-slide");
  if (index >= slides.length) {
    currentSlide = 0; // Reiniciar al primer slide
  } else if (index < 0) {
    currentSlide = slides.length - 1; // Ir al último slide
  } else {
    currentSlide = index;
  }
  const newTransform = `translateX(-${currentSlide * 100}%)`;
  document.querySelector(".carousel-container").style.transform = newTransform;
}

function moveSlide(direction) {
  showSlide(currentSlide + direction);
}

// Mostrar el primer slide al cargar
showSlide(currentSlide);
