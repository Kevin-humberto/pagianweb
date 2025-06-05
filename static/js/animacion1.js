document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".card");
    if (card) {
        card.classList.remove("opacity-0", "translate-y-8");
        card.classList.add("opacity-100", "translate-y-0");
    }
});
