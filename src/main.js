import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import helpers from './helpers'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import '@/assets/style.css'

createApp(App).use(store).use(router).use(helpers).mount('#app')
