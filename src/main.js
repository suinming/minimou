import { createApp } from 'vue'
// import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/base.css'

createApp(App).use(router).mount('#app')

// createApp({
//   render: () => h(App)
// }).use(router).mount('#app')
