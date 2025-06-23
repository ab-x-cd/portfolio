<template>
  <v-container class="asciiart-details py-10">
    <v-row justify="center">
      <v-col cols="12" md="8" lg="7">
        <v-card elevation="6" class="asciiart-card">
          <v-img src="/image_placeholder_cpp.jpg" height="220px" cover class="mb-4"></v-img>
          <v-card-title class="text-h4 font-weight-bold mb-2 text-primary">ASCIIart Generator</v-card-title>
          <v-card-subtitle class="mb-4 text-secondary">Projet C++ open-source</v-card-subtitle>
          <v-card-text>
            <p><strong>Description :</strong><br>
            Générateur d'art ASCII en C++ permettant de convertir des images en représentations ASCII personnalisables.<br>
            Gestion des niveaux de gris, interface console, et prise en charge de plusieurs formats d'entrée.</p>
            <p><strong>Fonctionnalités principales :</strong></p>
            <ul>
              <li>Conversion d'images en ASCII avec différents niveaux de gris</li>
              <li>Interface console interactive</li>
              <li>Support de plusieurs formats d'entrée</li>
              <li>Code optimisé et structuré</li>
            </ul>
            <p><strong>Installation & Utilisation :</strong></p>
            <ol>
              <li>Cloner le dépôt : <code>git clone https://github.com/ab-x-cd/GADT.git</code></li>
              <li>Se placer dans <code>ASCIIArtGenerator</code></li>
              <li>Créer un dossier <code>build</code> puis s'y déplacer</li>
              <li>Compiler avec CMake : <code>cmake ..</code> puis <code>cmake --build . --config Release</code></li>
              <li>Lancer l'exécutable <code>./ASCIIArtGenerator</code></li>
            </ol>
            <p>Pour plus de détails, consultez le <a href="https://github.com/ab-x-cd/GADT" target="_blank">repo GitHub <v-icon small>mdi-open-in-new</v-icon></a>.</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="accent" href="https://github.com/ab-x-cd/GADT" target="_blank">
              Voir sur GitHub <v-icon right>mdi-open-in-new</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// Pas de logique spécifique
</script>

<style scoped>
.asciiart-details {
  min-height: 80vh;
}
.asciiart-card {
  border-radius: 18px;
  background: linear-gradient(120deg, #f8fafc 70%, var(--v-theme-surface) 100%);
  box-shadow: 0 8px 32px 0 rgba(var(--v-theme-primary-rgb), 0.10);
  padding-bottom: 1.5rem;
}
.v-card-title {
  letter-spacing: 0.5px;
}
.v-card-subtitle {
  font-size: 1.1rem;
}
.v-card-text ul {
  margin-left: 1.2em;
  margin-bottom: 1em;
}
.v-card-text ol {
  margin-left: 1.2em;
  margin-bottom: 1em;
}
.v-card-text code {
  background: #e3e3e3;
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 0.98em;
}
</style>
