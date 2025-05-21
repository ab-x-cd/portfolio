<template>
  <v-container fluid>
    <h1 class="text-h4 my-5 text-center text-primary">Mes Projets Frontend & Animations</h1>
    <v-row justify="center">
      <v-col cols="12" md="10" lg="9">
        <v-row>
          <v-col cols="12" md="6" lg="4">
            <v-card class="project-card mx-auto my-4" elevation="4" hover to="/animscss/anim-rebond">
              <v-img
                src="/image_placeholder_anim_rebond.jpg"
                height="200px"
                cover
                class="align-end text-white"
              >
                <v-card-title class="card-title-bg">Animation Rebondissante</v-card-title>
              </v-img>
              <v-card-text class="pt-4" style="min-height: 80px;">
                Une animation CSS pure d'une balle rebondissante, démontrant l'utilisation de keyframes et de timing functions.
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="accent" text>Voir l'animation <v-icon right>mdi-arrow-right</v-icon></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="6" lg="4">
            <v-card class="project-card mx-auto my-4" elevation="4" hover to="/animscss/solar-system">
              <v-img
                src="/image_placeholder_solar_system.jpg"
                height="200px"
                cover
                class="align-end text-white"
              >
                <v-card-title class="card-title-bg">Système Solaire</v-card-title>
              </v-img>
              <v-card-text class="pt-4" style="min-height: 80px;">
                Une représentation animée du système solaire en HTML et CSS, illustrant des transformations complexes et des animations imbriquées.
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="accent" text>Explorer <v-icon right>mdi-arrow-right</v-icon></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <!-- Placeholder pour un futur projet CSS/Frontend -->
          <v-col cols="12" md="6" lg="4">
            <v-card class="project-card mx-auto my-4" elevation="4" hover>
              <v-img
                src="/image_placeholder_css_autre.jpg"
                height="200px"
                cover
                class="align-end text-white"
              >
                <v-card-title class="card-title-bg">Autre Projet Frontend</v-card-title>
              </v-img>
              <v-card-text class="pt-4" style="min-height: 80px;">
                Description d'un autre projet frontend ou d'une technique CSS avancée.
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="accent" text disabled>Bientôt disponible <v-icon right>mdi-arrow-right</v-icon></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// Logique pour cette page si nécessaire
</script>

<style scoped>
.project-card {
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
  border-radius: 8px;
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
</style>
