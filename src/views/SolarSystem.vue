<!-- Contenu de projets_css/solar/solar.html -->
<!-- Ce fichier sera servi statiquement ou intégré dans un composant Vue si interactif -->
<template>
  <v-container fluid class="solar-system-container fill-height pa-0 ma-0">
    <div id="solar-system-wrapper">
      <div class="mars-orbit">
        <div class="mars"></div>
      </div>
      <div class="earth-orbit">
        <div class="earth"></div>
      </div>
      <div id="sun">
        <div class="sun-body"></div> <!-- Renamed from .sun to .sun-body to avoid conflict with #sun id -->
      </div>
      <div class="mercury-orbit">
        <div class="mercury"></div>
      </div>
      <div class="venus-orbit">
        <div class="venus"></div>
      </div>
    </div>
  </v-container>
</template>

<script setup>
// No specific script needed for this CSS-based animation
</script>

<style scoped>
.solar-system-container {
  /* Replaces html, body styling from original CSS */
  font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
  margin: 0;
  background-color: black;
  overflow: hidden; /* To contain the animation */
  display: flex; /* For centering solar-system-wrapper if needed, though positioning is absolute */
  justify-content: center; /* Center the wrapper horizontally */
  align-items: center; /* Center the wrapper vertically */
  min-height: calc(100vh - 64px - 56px); /* Adjust for app-bar and footer */
  position: relative; /* Needed for absolute positioning of children */
}

/* #solar-system from original CSS, renamed to #solar-system-wrapper */
#solar-system-wrapper {
  position: relative; /* Changed from absolute to relative to be centered by flex container */
  /* left : 40%; */ /* Removed, centering handled by flex */
  /* top : 10%; */  /* Removed, centering handled by flex */
  /* transform: translate(-50%, -50%); */ /* Removed, centering handled by flex */
  width: 400px; /* Approximate width based on orbit sizes */
  height: 400px; /* Approximate height based on orbit sizes */
  display: flex;
  justify-content: center;
  align-items: center;
}

#sun {
  position: absolute;
  /* margin-top: 225px; */ /* Centering is now relative to solar-system-wrapper */
  /* Centering sun within the wrapper */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10; /* Sun should be on top of orbits if they overlap visually */
}

.sun-body { /* Renamed from .sun */
  width: 118px;
  height: 118px;
  background-color: yellow;
  border-radius: 50%;
  box-shadow: 0 0 3em white;
  /* top: 9%; */ /* Positioning relative to #sun container */
  /* left: 9%; */
  position: relative;
}

.mercury {
  width: 20px;
  height: 20px;
  background-color: rgb(171, 158, 163);
  /* top: 142px; */ /* Positioning is relative to its orbit container */
  /* left: 11%; */
  border-radius: 50%;
  position: absolute; /* Planets are positioned on their orbits */
  top: 50%;
  left: 50%;
  margin-top: -10px; /* half of height */
  margin-left: -10px; /* half of width */
  transform: translateY(-85px); /* (170px orbit width / 2) */
}

.mercury-orbit {
  content: "";
  position: absolute;
  border: solid 2px rgb(171, 158, 163);
  width: 170px;
  height: 170px;
  /* top: 198px; */ /* Centered by flex in #solar-system-wrapper */
  /* left: -16px; */
  border-radius: 50%;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: orbit;
  animation-duration: 4s;
  display: flex; /* To help position the planet if needed, though absolute positioning is used */
  justify-content: center;
  align-items: center;
}

.venus {
  width: 44px;
  height: 44px;
  background-color: rgb(254, 152, 0);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -22px;
  margin-left: -22px;
  transform: translateY(-110px); /* (220px orbit width / 2) */
}

.venus-orbit {
  content: "";
  position: absolute;
  border: solid 1px rgb(254, 152, 0);
  width: 220px;
  height: 220px;
  border-radius: 50%;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: orbit;
  animation-duration: 6s;
}

.earth {
  width: 38px;
  height: 38px;
  background-color: rgb(45, 82, 182);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -19px;
  margin-left: -19px;
  transform: translateY(-154px); /* (308px orbit width / 2) */
}

.earth-orbit {
  content: "";
  position: absolute;
  width: 308px;
  height: 308px;
  border: solid 1px rgb(45, 82, 182);
  border-radius: 50%;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: orbit;
  animation-duration: 9s;
}

.mars {
  width: 26px;
  height: 26px;
  background-color: rgb(201, 4, 0);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -13px;
  margin-left: -13px;
  transform: translateY(-195px); /* (390px orbit width / 2) */
}

.mars-orbit {
  content: "";
  position: absolute;
  width: 390px;
  height: 390px;
  border: solid 1px rgb(201, 4, 0);
  border-radius: 50%;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: orbit;
  animation-duration: 11s;
}

@keyframes orbit {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
