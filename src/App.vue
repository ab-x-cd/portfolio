<template>
  <v-app :theme="isDarkMode ? 'techModernDarkTheme' : 'techModernLightTheme'">
    <v-app-bar app color="surface" elevation="2">
      <v-toolbar-title class="text-primary font-weight-bold">Seitz Nathanaël</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/" class="text-primary">Accueil</v-btn>
      <v-btn text to="/cpp-projects" class="text-primary">Projets Dev Appli</v-btn>
      <v-btn text to="/animscss" class="text-primary">Projets Frontend</v-btn>
      <v-btn href="/cv.pdf" target="_blank" class="text-primary" prepend-icon="mdi-file-account">Mon CV</v-btn>
      <v-btn icon @click="toggleTheme" :color="isDarkMode ? 'accent' : 'primary'">
        <v-icon>{{ isDarkMode ? 'mdi-weather-night' : 'mdi-weather-sunny' }}</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view v-slot="{ Component }">
        <v-slide-x-transition mode="out-in">
          <component :is="Component" />
        </v-slide-x-transition>
      </router-view>
    </v-main>
    <v-footer app color="surface" elevation="2" height="56">
      <span class="text-secondary">&copy; {{ new Date().getFullYear() }} Nathanaël Seitz.</span>
      <v-spacer></v-spacer>
      <v-btn icon href="https://www.linkedin.com/in/nathanaël-seitz/" target="_blank" class="text-secondary">
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isDarkMode = ref(false);

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem('darkMode', isDarkMode.value.toString());
};

onMounted(() => {
  const storedDarkMode = localStorage.getItem('darkMode');
  if (storedDarkMode) {
    isDarkMode.value = storedDarkMode === 'true';
  }
});

// Assurez-vous que le chemin vers votre CV est correct et qu'il se trouve dans le dossier public
// par exemple public/cv.pdf
</script>

<style>
/* Styles globaux pour un thème Tech Moderne */
#app {
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif; /* Changed Roboto to Montserrat */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.v-main {
  padding-top: 64px; /* Hauteur de la v-app-bar */
  padding-bottom: 56px; /* Hauteur du v-footer */
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Assure que v-main prend au moins toute la hauteur de la fenêtre */
  background-color: var(--v-theme-background);
}

/* Transition de page améliorée */
.v-slide-x-transition-enter-active,
.v-slide-x-transition-leave-active {
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}

.v-slide-x-transition-enter-from {
  transform: translateX(-20px);
  opacity: 0;
}

.v-slide-x-transition-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

/* Styles de base pour les titres et textes */
h1, .text-h1, h2, .text-h2, h3, .text-h3, h4, .text-h4, h5, .text-h5, h6, .text-h6 {
  color: var(--v-theme-primary);
  font-weight: 500; /* Police un peu plus affirmée pour les titres */
}

p, span, div:not([class*="v-"]) { /* Évite de surcharger les composants Vuetify */
  color: var(--v-theme-on-surface);
  line-height: 1.6;
}

.text-primary {
 color: var(--v-theme-primary) !important;
}

.text-secondary {
  color: var(--v-theme-secondary) !important;
}

.v-btn--text {
  color: var(--v-theme-primary) !important; /* Boutons texte avec couleur primaire */
  font-weight: 500;
}

.v-btn--text:hover {
  background-color: rgba(var(--v-theme-primary-rgb), 0.05) !important; /* Léger fond au survol */
}

.v-btn[href*="cv.pdf"] {
  background-color: var(--v-theme-accent) !important;
  color: var(--v-theme-on-accent) !important;
}

.v-btn[href*="cv.pdf"]:hover {
  background-color: rgba(var(--v-theme-accent-rgb), 0.8) !important;
}

.v-toolbar-title {
  letter-spacing: 0.5px;
}

.v-footer span {
  font-size: 0.875rem;
}

</style>
