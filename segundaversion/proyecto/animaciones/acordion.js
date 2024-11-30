document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;

    // Cierra las otras secciones abiertas
    document.querySelectorAll(".accordion-item").forEach((item) => {
      if (item !== accordionItem) {
        item.classList.remove("active"); // Remueve la clase active de los otros items
        item.querySelector(".accordion-content").style.maxHeight = 0; // Contrae el contenido
      }
    });

    // Alterna la clase 'active' en el acordeón actual para abrir/cerrar
    accordionItem.classList.toggle("active");

    const content = accordionItem.querySelector(".accordion-content");
    if (accordionItem.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px"; // Expande el contenido
    } else {
      content.style.maxHeight = 0; // Contrae el contenido
    }
  });
});
