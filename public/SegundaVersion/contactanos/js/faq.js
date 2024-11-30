// script.js
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", function () {
    const answer = this.nextElementSibling;

    // Alterna la visibilidad de la respuesta
    if (answer.style.display === "none" || answer.style.display === "") {
      answer.style.display = "block";
    } else {
      answer.style.display = "none";
    }
  });
});
