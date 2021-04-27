import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
app.mixin({
  data() {
    return {
      name: '我是全局mixin'
    }
  },
  methods: {
    mixinHandler(msg) {
      this.name = msg
    },
    showName() {
      alert(this.name)
    }
  }
})
app.mount('#app')
