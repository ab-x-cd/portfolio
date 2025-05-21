<!-- Contenu de projets_css/solar/solar.html -->
<!-- Ce fichier sera servi statiquement ou intégré dans un composant Vue si interactif -->
<template>
  <div class="solar-system-container">
    <p>Contenu du système solaire. À remplacer par le HTML/CSS réel.</p>
    <!-- Exemple simplifié -->
    <div class="sun"></div>
    <div class="planet earth"></div>
  </div>
</template>

<style scoped>
/* Styles de solar.css */
.solar-system-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 120px); /* Ajuster */
  background-color: #000;
  color: white;
  overflow: hidden;
  position: relative;
}

.sun {
  width: 100px;
  height: 100px;
  background-color: yellow;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
 box-shadow: 0 0 60px yellow, 0 0 100px orange;
}

.planet {
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
}

.earth {
  width: 40px;
  height: 40px;
  background-color: blue;
  margin-left: -20px; /* Moitié de la largeur */
  margin-top: -20px; /* Moitié de la hauteur */
  animation: orbit-earth 10s linear infinite;
}

@keyframes orbit-earth {
  from {
    transform: translate(-50%, -50%) rotate(0deg) translateX(150px) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg) translateX(150px) rotate(-360deg);
  }
}
</style>
