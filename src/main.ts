import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import { routes } from './router'
import i18n from './i18n'
import './styles/main.css'

const app = createApp(App)

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Install plugins
app.use(router)
app.use(createPinia())
app.use(i18n)
app.use(createHead())

// Mount app
app.mount('#app')

