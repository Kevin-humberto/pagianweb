/*giro flip para pantallas*/
document.addEventListener("DOMContentLoaded", function () {
  const flipContainers = document.querySelectorAll(".flip-container");

  // Aplicar evento de click y touchstart a cada flip-container
  flipContainers.forEach(function (container) {
    container.addEventListener("click", function () {
      this.classList.toggle("flipped");
    });
    container.addEventListener("touchstart", function () {
      this.classList.toggle("flipped");
    });
  });
});
