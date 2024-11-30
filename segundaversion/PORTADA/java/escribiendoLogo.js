const textContainer = document.getElementById("text-containerle");
const text = "TIDE Technological Innovations in Desalination Enginnering.";
const words = text.split(" ");
let index = 0;

function displayWords() {
  textContainer.textContent = words[index];
  index++;

  // Tiempo de espera para cada palabra
  const delay = index === 1 ? 2000 : 1000; // 2 segundos para la primera, 1 segundos para las demás

  // Si llega al final de las palabras, reinicia con un retraso de 3 segundos
  if (index === words.length) {
    setTimeout(() => {
      index = 0; // Reinicia el índice
      displayWords(); // Reinicia el ciclo
    }, 3000); // Espera 3 segundos antes de reiniciar
  } else {
    setTimeout(displayWords, delay); // Muestra la siguiente palabra con el tiempo correspondiente
  }
}

displayWords();
