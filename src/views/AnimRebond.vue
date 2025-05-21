<!-- Contenu de projets_css/bounce/animrebond.html -->
<!-- Ce fichier sera servi statiquement ou intégré dans un composant Vue si interactif -->
<template>
  <div class="anim-container">
    <p>Contenu de l'animation de rebond. À remplacer par le HTML/CSS réel.</p>
    <div class="ball"></div>
  </div>
</template>

<style scoped>
/* Styles de animrebond.css */
.anim-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 120px); /* Ajuster selon la hauteur du header/footer */
  background-color: #1e1e1e;
  color: white;
}
.ball {
  width: 50px;
  height: 50px;
  background-color: #00e5ff;
  border-radius: 50%;
  position: relative;
  animation: bounce 2s infinite cubic-bezier(0.5, 0.05, 0.5, 0.95);
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-100px);
  }
}
</style>
