// src/plugins/vuetify.js
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css' // Import MDI CSS

// Thème clair "Tech Moderne"
const techModernLightTheme = {
  dark: false,
  colors: {
    background: '#ECEFF1', // Gris très clair, presque blanc
    surface: '#FFFFFF',    // Blanc pur pour les cartes, dialogues, etc.
    primary: '#263238',    // Gris foncé bleuté (pour textes importants, icônes)
    secondary: '#546E7A',  // Gris bleuté plus clair (pour textes secondaires)
    accent: '#1976D2',     // Bleu vif pour les accents (boutons, liens actifs)
    error: '#D32F2F',
    info: '#1976D2',
    success: '#388E3C',
    warning: '#FBC02D',
    'on-background': '#263238',
    'on-surface': '#263238',
    'on-primary': '#FFFFFF',
    'on-secondary': '#FFFFFF',
    'on-accent': '#FFFFFF',
    'on-error': '#FFFFFF',
    'on-info': '#FFFFFF',
    'on-success': '#FFFFFF',
    'on-warning': '#263238',
  }
}

// Thème sombre "Tech Moderne" avec touches de violet
const techModernDarkTheme = {
  dark: true,
  colors: {
    background: '#1A1A2E', // Fond bleu nuit très sombre
    surface: '#24243E',    // Surface légèrement plus claire, bleutée
    primary: '#E0E0E0',    // Texte principal blanc cassé pour lisibilité
    secondary: '#AEAEAE',  // Texte secondaire gris clair
    accent: '#9C27B0',     // Violet pour les accents principaux
    accent2: '#7E57C2',    // Violet plus clair pour accents secondaires ou hover
    error: '#CF6679',
    info: '#2196F3',
    success: '#66BB6A',
    warning: '#FFA726',
    'on-background': '#E0E0E0',
    'on-surface': '#E0E0E0',
    'on-primary': '#1A1A2E',
    'on-secondary': '#1A1A2E',
    'on-accent': '#FFFFFF',
    'on-error': '#000000',
    'on-info': '#FFFFFF',
    'on-success': '#000000',
    'on-warning': '#000000',
  }
}

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'techModernLightTheme',
    themes: {
      techModernLightTheme,
      techModernDarkTheme,
    }
  }
})

export default vuetify
