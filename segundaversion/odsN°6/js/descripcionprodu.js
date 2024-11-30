function toggleCard(element) {
  const content = element.querySelector(".content");

  // Alterna la visibilidad del contenido
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    // Ocultar otros cuadros antes de mostrar el seleccionado
    const cuadros = document.querySelectorAll(".cuadro");
    cuadros.forEach((cuadro) => {
      cuadro.querySelector(".content").style.display = "none";
    });
    content.style.display = "block";
  }
}
