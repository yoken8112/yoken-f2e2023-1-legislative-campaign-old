import { createRouter, createWebHistory } from "vue-router";
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const router = createRouter({
  history: routerHistory,
  routes,
});

createApp(App).mount('#app')
