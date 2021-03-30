import { createApp } from 'vue'
import App from './App.vue'
import First from './components/First.vue'
import Second from './components/Second.vue'
import {createWebHashHistory, createRouter} from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: First },
        { path: '/xxx', component: Second }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
