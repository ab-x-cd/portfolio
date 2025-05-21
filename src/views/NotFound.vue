<template>
  <v-container fluid class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <div class="error-container-vue">
          <h1 class="text-h2 font-weight-bold mb-4">Erreur 404</h1>
          <p class="text-h5 mb-5">Oups! Page disparue.</p>
          <p class="mb-5">La page que vous cherchez n'existe pas pour le moment.</p>
          <v-btn color="primary" to="/" large>
            Retour à l'accueil
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// Pas de script spécifique pour la page 404
</script>

<style scoped>
.fill-height {
  min-height: calc(100vh - 64px - 56px); /* Ajustez en fonction de la hauteur de l'app-bar et du footer */
  background-color: #1e1e1e;
}
.error-container-vue {
  text-align: center;
  padding: 4rem;
  background: rgba(0, 229, 255, 0.1);
  border-radius: 15px;
  box-shadow: 0 0 30px rgba(0, 229, 255, 0.3);
  border: 2px solid #00e5ff;
  color: white;
}
.error-container-vue h1 {
  color: #00e5ff;
}
</style>
