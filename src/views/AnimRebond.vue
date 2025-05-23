<!-- Contenu de projets_css/bounce/animrebond.html -->
<!-- Ce fichier sera servi statiquement ou intégré dans un composant Vue si interactif -->
<template>
  <v-container fluid class="fill-height pa-0 ma-0 animation-container">
    <div class="circles-wrapper">
      <div v-for="i in 61" :key="i-1" class="circle" :style="{ '--i': i - 1 }"></div>
    </div>
  </v-container>
</template>

<script setup>
// Pas de logique spécifique nécessaire pour cette animation simple
</script>

<style scoped>
/* Styles de base.css adaptés pour le composant Vue */
.animation-container { /* Corresponds to body styling */
  margin : 0%;
  padding : 0%;
  box-sizing: border-box;
  height: calc(100vh - 64px - 56px); /* Ajuster la hauteur pour tenir compte de l'app-bar et du footer */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000; /* Fond noir pour l'animation */
  overflow: hidden;
  width: 100%;
  position: relative; /* Pour positionner .circles-wrapper */
}

.circles-wrapper { /* Corresponds to .container styling */
  position: absolute;
  top: 20%;
  height: 90%;
  width: 100%; /* Ajouté pour s'assurer qu'il prend la largeur */
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d; /* Important pour la perspective des cercles */
}

.circle {
  position: absolute;
  width: calc(var(--i) * 2.5vmin);
  aspect-ratio: 1;
  border-radius: 50%;
  background : transparent;
  border : 3px solid rgb(0, 255, 13); /* Updated border color */
  transform-style: preserve-3d;
  transform: rotateX(70deg) translateZ(50px);
  animation: animate 3s ease-in-out calc(var(--i) * 0.10s) infinite;
  box-shadow: 0 0 15px rgb(124, 124, 124); /* Updated box shadow */

}

@keyframes animate {
  0%, 100% {
    transform: rotateX(70deg) translateZ(50px) translateY(0px);
    filter: hue-rotate(0deg); /* Ensure unit is specified */
  }
  50% {
    transform: rotateX(70deg) translateZ(50px) translateY(-50vmin);
    filter: hue-rotate(360deg); /* Ensure unit is specified */
  }
}
</style>
