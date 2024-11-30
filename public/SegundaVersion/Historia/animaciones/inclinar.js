// Referencias a los bloques
const blocks = [
  document.getElementById("block1"),
  document.getElementById("block2"),
  document.getElementById("block3"),
  document.getElementById("block4"),
];

// Función para inclinar los bloques secuencialmente
function tiltBlocks() {
  blocks.forEach((block, index) => {
    setTimeout(() => {
      block.classList.add("tilt");
    }, index * 500); // 0.5 segundos entre cada inclinación
  });

  // Después de inclinar el último bloque, volvemos todos a la posición original
  setTimeout(() => {
    blocks.forEach((block) => {
      block.classList.remove("tilt");
      block.classList.add("reset");
    });
  }, blocks.length * 500 + 1000); // 1 segundo después de la última inclinación
}

// Función para restablecer las clases
function resetBlocks() {
  blocks.forEach((block) => {
    block.classList.remove("reset");
  });
}

// Evento click en el primer bloque para iniciar la animación
blocks[0].addEventListener("click", () => {
  resetBlocks(); // Restablece los bloques antes de iniciar la animación
  tiltBlocks(); // Inicia la animación de inclinación
});
