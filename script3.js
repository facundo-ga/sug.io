

//document.getElementById("playButton").addEventListener("click", function () {
 // const audio = document.getElementById("villancicoAudio");
  //if (audio.paused) {
  //  audio.play();
   // this.textContent = "⏸ Pausar Villancicos";
 // } else {
   // audio.pause();
   // this.textContent = "🎶 Reproducir Villancicos";
 // }
//});


window.onload = function () {
  const audio = document.getElementById("villancicoAudio");
  const playButton = document.getElementById("playButton");

  // Intenta reproducir automáticamente
  audio.play().catch((error) => {
    console.log("Reproducción automática bloqueada por el navegador.");
    // Muestra el botón si la reproducción automática está bloqueada
    playButton.style.display = "block";

    // Escucha el clic del usuario para reproducir el audio
    playButton.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        playButton.textContent = "⏸️ Pausar Villancicos"; // Cambia el texto del botón
      } else {
        audio.pause();
        playButton.textContent = "🎶 Reproducir Villancicos"; // Cambia el texto del botón
      }
    });
  });
};



function createGarland() {
  const garland = document.createElement("div");
  garland.classList.add("garland");

  // Posición inicial aleatoria
  const randomLeft = Math.random() * 100; // Porcentaje de la pantalla
  const randomDuration = Math.random() * 3 + 2; // Entre 2 y 5 segundos

  // Estilo dinámico
  garland.style.left = `${randomLeft}vw`;
  garland.style.animationDuration = `${randomDuration}s`;

  document.body.appendChild(garland);

  // Eliminar guirnalda una vez que termine su animación
  setTimeout(() => {
    garland.remove();
  }, randomDuration * 1000);
}

// Generar guirnaldas cada 300ms
setInterval(createGarland, 300);
