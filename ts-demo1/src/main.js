import { createApp } from 'vue'
import App from './App.vue'
import Axios from 'axios'



const app = createApp(App)

// 将属性方法全局挂载  后续可直接  this.xxxx 调用
app.config.globalProperties.Axios = Axios

// 全局混入属性和方法
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
