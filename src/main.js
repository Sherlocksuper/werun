import './assets/main.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'
import "tailwindcss/tailwind.css"
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import store from "/src/stores/store.js";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(store)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
