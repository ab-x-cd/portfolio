import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify' // Path to Vuetify plugin
import router from './router' // Path to router

createApp(App).use(vuetify).use(router).mount('#app')
