function showThankYou() {
    const message = document.getElementById('thank-you-message');
    message.style.display = 'block';
    setTimeout(() => {
        message.style.display = 'none';
    }, 3000); // Ocultar el mensaje después de 3 segundos
}