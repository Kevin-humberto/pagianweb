const odsCards = document.querySelectorAll(".ods-card");
const modal = document.getElementById("modal");
const modalContent = document.querySelector(".modal-content");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeButton = document.querySelector(".close-button");

const relations = {
  1: "El acceso a agua potable y saneamiento reduce los gastos en salud, mejora la productividad y rompe ciclos de pobreza al liberar tiempo para la educación y el empleo.",
  3: "El agua limpia y el saneamiento adecuado previenen enfermedades como el cólera y diarreas, mejorando la salud y el bienestar de las comunidades más vulnerables.",
  4: "La presencia de agua y saneamiento en escuelas permite que los estudiantes, especialmente las niñas, asistan regularmente, mejorando su rendimiento y oportunidades educativas.",
  6: "ODS 6: Garantizar agua limpia y saneamiento es esencial para la salud, el desarrollo económico y la sostenibilidad del medio ambiente.",
  13: "La gestión sostenible del agua es fundamental para adaptarse al cambio climático, mitigando los efectos de sequías y preservando los ecosistemas.",
};

function openModal(odsNumber) {
  modalTitle.textContent = `ODS ${odsNumber}`;
  modalText.textContent = relations[odsNumber];
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

odsCards.forEach((card) => {
  card.addEventListener("click", () =>
    openModal(card.getAttribute("data-ods"))
  );
});

closeButton.addEventListener("click", closeModal);
window.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});
