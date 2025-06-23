<template>
  <v-container fluid>
    <h1 class="text-h4 my-5 text-center text-primary">Mes Projets de Développement Applicatif</h1>
    <v-row justify="center">
      <v-col cols="12" md="10" lg="9">
        <v-row>
          <!-- ASCIIart Generator (cliquable) -->
          <v-col cols="12" md="6" lg="4">
            <v-card class="project-card mx-auto my-4" elevation="4" hover>
              <v-img
                src="/image_placeholder_cpp.jpg"
                height="200px"
                cover
                class="align-end text-white"
              >
                <v-card-title class="card-title-bg">ASCIIart Generator</v-card-title>
              </v-img>
              <v-card-text class="pt-4" style="min-height: 80px;">
                Générateur d'art ASCII en C++ : convertit des images en représentations ASCII personnalisables.<br>
                Gestion des niveaux de gris, interface console, et prise en charge de plusieurs formats d'entrée.<br>
                <strong>Repo GitHub :</strong> <a href="https://github.com/ab-x-cd/GADT" target="_blank">ab-x-cd/GADT</a>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <router-link :to="'/portfolio/projetscpp/asciiart-generator'" custom v-slot="{ navigate, href }">
                  <v-btn color="accent" :href="href" @click="navigate">
                    Détails <v-icon right>mdi-arrow-right</v-icon>
                  </v-btn>
                </router-link>
                <v-btn color="accent" text href="https://github.com/ab-x-cd/GADT" target="_blank">
                  GitHub <v-icon right>mdi-open-in-new</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <!-- PLSA : Project Legion Story of Amaltheis (placeholder, non cliquable) -->
          <v-col cols="12" md="6" lg="4">
            <v-card class="project-card mx-auto my-4" elevation="4" hover>
              <v-img
                src="/image_placeholder_cpp.jpg"
                height="200px"
                cover
                class="align-end text-white"
              >
                <v-card-title class="card-title-bg">PLSA : Project Legion Story of Amaltheis</v-card-title>
              </v-img>
              <v-card-text class="pt-4" style="min-height: 80px;">
                en cours de développement...
              </v-card-text>
            </v-card>
          </v-col>

          <!-- Comparaison d'algorithmes par efficacité et complexité (placeholder, non cliquable) -->
          <v-col cols="12" md="6" lg="4">
            <v-card class="project-card mx-auto my-4" elevation="4" hover>
              <v-img
                src="/image_placeholder_cpp.jpg"
                height="200px"
                cover
                class="align-end text-white"
              >
                <v-card-title class="card-title-bg">Comparaison d'algorithmes par efficacité et complexité</v-card-title>
              </v-img>
              <v-card-text class="pt-4" style="min-height: 80px;">
                en cours de développement...
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// Logique pour charger les données des projets C++ (à implémenter)
</script>

<style scoped>
.project-card {
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
  border-radius: 8px; /* Bords légèrement arrondis */
  background-color: var(--v-theme-surface);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 20px -4px rgba(var(--v-theme-primary-rgb), 0.2) !important;
}

.card-title-bg {
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%);
  padding-top: 16px;
  padding-bottom: 16px;
}

.v-card-text {
  color: var(--v-theme-on-surface);
}

/* Styles pour les titres de section, si non gérés globalement */
/* .text-h4 {
  color: var(--v-theme-primary);
} */
</style>
