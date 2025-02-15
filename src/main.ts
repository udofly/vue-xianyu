import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VConsole from 'vconsole';

import App from './App.vue'
import router from './router'

const app = createApp(App)


const vConsole = new VConsole();
app.use(vConsole);
app.use(createPinia())
app.use(router)

app.mount('#app')
