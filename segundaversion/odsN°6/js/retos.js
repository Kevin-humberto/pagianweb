var videoplayer = document.getElementById("videoplayer");
var myvideo = document.getElementById("myvideo");

function stopbtn() {
    videoplayer.style.display = "none";
    myvideo.src = "";  // Detener el video limpiando el src
}

function playVideo(url) {
    console.log("URL del video:", url); // Verificar que el URL sea correcto
    myvideo.src = url;  // Establece el URL del iframe para el video de YouTube
    videoplayer.style.display = "block";
}