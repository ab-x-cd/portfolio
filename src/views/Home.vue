<template>
  <div class="home-page">
    <!-- Section Héros -->
    <v-responsive aspect-ratio="16/9" max-height="500px" class="hero-section d-flex align-center justify-center text-center">
      <v-img
        src="/path/to/your/modern-background-image.jpg" 
        gradient="to top right, rgba(var(--v-theme-background-rgb),.9), rgba(var(--v-theme-surface-rgb),.7)"
        cover
        height="100%"
      >
        <v-container class="fill-height">
          <v-row align="center" justify="center">
            <v-col cols="12" md="10" lg="8">
              <h1 class="text-h2 font-weight-bold mb-4 text-primary animate-fade-in-down">Nathanaël Seitz</h1>
              <h2 class="text-h5 font-weight-light mb-8 text-secondary animate-fade-in-up">
                Développeur d'applications et passionné par les nouvelles technologies.
              </h2>
              <v-btn color="accent" size="large" href="#projects-section" class="animate-fade-in-up">
                Découvrir mes projets
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-responsive>

    <!-- Section Projets -->
    <v-container id="projects-section" class="my-10">
      <v-row justify="center">
        <v-col cols="12" md="10" lg="9">
          <h3 class="text-h4 font-weight-medium text-center mb-8 text-primary">Mes Créations</h3>
          <v-row>
            <v-col cols="12" md="6">
              <v-card class="project-card mx-auto my-4" elevation="4" hover to="/cpp-projects">
                <v-img height="200px" src="/path/to/dev-appli-card-image.jpg" cover class="align-end text-white">
                   <v-card-title class="card-title-bg">Projets Dev Appli</v-card-title>
                </v-img>
                <v-card-text class="pt-4">
                  Explorez mes projets de développement d'applications, alliant logique et performance.
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="accent" text>Voir plus <v-icon right>mdi-arrow-right</v-icon></v-btn>
                </v-card-actions>
              </v-card>
            </v-col>

            <v-col cols="12" md="6">
              <v-card class="project-card mx-auto my-4" elevation="4" hover to="/animscss">
                 <v-img height="200px" src="/path/to/frontend-card-image.jpg" cover class="align-end text-white">
                   <v-card-title class="card-title-bg">Frontend & Animations CSS</v-card-title>
                </v-img>
                <v-card-text class="pt-4">
                  Plongez dans mes réalisations frontend créatives et mes animations CSS dynamiques.
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="accent" text>Voir plus <v-icon right>mdi-arrow-right</v-icon></v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <!-- Ajoutez d'autres cartes ici si besoin -->
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-container id="projects-section" class="my-10">
      <v-row justify="center">
<v-col cols="12" md="6">
  <v-card class="project-card eco-card mx-auto my-4" elevation="4">
    <v-img height="200px" src="/path/to/eco-responsable.jpg" cover class="align-end text-white">
      <v-card-title class="card-title-bg">Numérique Responsable</v-card-title>
    </v-img>
    <v-card-text class="pt-4">
      <p>🌱 <strong>Numérique Responsable</strong><br>
      Le secteur numérique représente aujourd'hui 4% des émissions mondiales de GES. J'ai fait du numérique responsable un pilier central de ma pratique professionnelle.</p>
      <p>🎯 <strong>Ma Vision</strong><br>
      Pour moi, le numérique responsable ne se limite pas à développer des applications "vertes". Il s'agit de concevoir des architectures et algorithmes où la légèreté, l'optimisation et la maintenabilité sont prioritaires.</p>
      <p>⚡ <strong>Optimisation et Performance</strong><br>
      Choix technologiques éclairés : Frameworks performants et durables<br>
      Code optimisé : Réduction de la consommation de ressources<br>
      Accessibilité numérique : Conception inclusive pour tous<br>
      Gestion des médias : Compression et optimisation<br>
      Architecture sobre : Minimisation des requêtes</p>
      <p>🤖 <strong>L'IA : Un Outil à Double Tranchant</strong><br>
      L'IA permet de gagner du temps et d'améliorer la qualité du code, mais je reste conscient de son impact environnemental. J'adopte une approche raisonnée :<br>
      Prompts optimisés : Rédaction efficace pour minimiser les interactions<br>
      Usage ciblé : Utilisation uniquement quand nécessaire<br>
      Alternatives locales : Privilégier les outils locaux</p>
      <p>📊 <strong>Mes Pratiques Concrètes</strong><br>
      Éco-conception : Audit avec Lighthouse et EcoIndex<br>
      Accessibilité : Tests WCAG et RGAA<br>
      Sobriété numérique : Fonctionnalités au strict nécessaire</p>
      <p>💡 <strong>Un Engagement Continu</strong><br>
      Le numérique responsable est un processus d'amélioration continue. Cette démarche améliore la performance, la maintenabilité et la compétitivité des solutions développées.</p>
    </v-card-text>
  </v-card>
</v-col>
      </v-row>
    </v-container>

    <!-- Section "À propos" ou "Compétences" (Optionnel) -->
    <v-container class="my-10">
      <v-row justify="center">
        <v-col cols="12" md="8" class="text-center">
          <h3 class="text-h4 font-weight-medium mb-6 text-primary">Qui suis-je ?</h3>
          <p class="text-body-1 text-secondary">
            Actuellement étudiant en BUT Informatique, je suis un développeur curieux et motivé, toujours à la recherche de nouveaux défis pour affûter mes compétences en développement logiciel et web. Ce portfolio est une vitrine de mon parcours et de mes réalisations.
          </p>
           <v-btn color="primary" outlined class="mt-6" href="portfolio/cv.pdf" target="_blank" prepend-icon="mdi-file-download-outline">
            Télécharger mon CV
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script setup>
// Logique spécifique à la page d'accueil si nécessaire
</script>

<style scoped>
.home-page {
  width: 100%;
}

.hero-section {
  color: var(--v-theme-on-surface); /* Assure la lisibilité sur le gradient */
}

.hero-section h1,
.hero-section h2 {
  text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
}

.project-card {
  transition: transform 0.3s cubic-bezier(.4,2,.6,1), box-shadow 0.3s cubic-bezier(.4,2,.6,1);
  border-radius: 14px;
  background: linear-gradient(135deg, var(--v-theme-surface) 80%, rgba(var(--v-theme-accent-rgb),0.08) 100%);
  box-shadow: 0 4px 24px 0 rgba(var(--v-theme-primary-rgb), 0.07);
  border: 1.5px solid rgba(var(--v-theme-accent-rgb), 0.18);
  overflow: hidden;
}

.project-card .v-img {
  filter: grayscale(0.15) brightness(0.95) contrast(1.08);
  border-bottom: 1px solid rgba(var(--v-theme-accent-rgb), 0.12);
}

.project-card .card-title-bg {
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%);
  padding-top: 16px;
  padding-bottom: 16px;
  font-size: 1.25rem;
  letter-spacing: 0.5px;
  font-weight: 600;
}

/* Style spécial pour la carte Numérique Responsable */
.project-card.eco-card {
  background: linear-gradient(120deg, #e3f9e5 60%, var(--v-theme-surface) 100%);
  border: 2px solid var(--v-theme-accent);
  box-shadow: 0 6px 32px 0 rgba(var(--v-theme-accent-rgb), 0.10);
  position: relative;
  overflow: visible;
}

.project-card.eco-card .v-img {
  filter: grayscale(0.05) brightness(1.05) contrast(1.12);
  border-bottom: 2px solid var(--v-theme-accent);
}

.project-card.eco-card .card-title-bg {
  background: linear-gradient(90deg, var(--v-theme-accent) 0%, #fffbe7 100%);
  color: #1976D2;
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: 1px;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 2px 12px 0 rgba(var(--v-theme-accent-rgb), 0.08);
}

.project-card.eco-card .v-card-text {
  padding-top: 1.2em;
  padding-bottom: 1.2em;
}

.project-card.eco-card .v-card-text p {
  margin-bottom: 0.9em;
  font-size: 1.12rem;
  line-height: 1.8;
  color: #234d20;
  background: linear-gradient(90deg, rgba(25,213,255,0.07) 0%, rgba(25,255,120,0.04) 100%);
  border-left: 4px solid var(--v-theme-accent);
  padding: 0.9em 1.2em 0.9em 1.4em;
  border-radius: 0 12px 12px 0;
  box-shadow: 0 2px 10px 0 rgba(var(--v-theme-accent-rgb), 0.06);
  transition: background 0.3s;
}

.project-card.eco-card .v-card-text p strong {
  color: var(--v-theme-accent);
  font-weight: 700;
}

.project-card.eco-card .v-card-text p:last-child {
  margin-bottom: 0;
}

/* Animations d'entrée simples */
@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in-down {
  animation: fadeInDown 0.8s ease-out forwards;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out 0.3s forwards; /* Délai pour la deuxième animation */
  opacity: 0; /* Commence invisible pour l'animation */
}

/* Ajustements pour les titres de section */
#projects-section h3,
.my-10 h3 {
  position: relative;
  display: inline-block;
  padding-bottom: 8px;
}

#projects-section h3::after,
.my-10 h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background-color: var(--v-theme-accent);
}

</style>
