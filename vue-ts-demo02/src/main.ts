import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes';
import store from './vuex/store.js';
const app = createApp(App)
app.use(routes)
app.use(store)
app.mount('#app')
