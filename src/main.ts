import { createApp } from 'vue'

import router from '~/router/index'
import { createPinia } from 'pinia'
import { worker } from '~/Mocks/browser.js'

import App from './App.vue'
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'
import '~/styles/main.sass'

if (process.env.NODE_ENV === 'development') {
  worker.start()
}

const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(ElementPlus)
app.mount('#app')
