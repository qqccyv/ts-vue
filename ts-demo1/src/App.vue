<template>
  <HelloWorld @helloWord="helloWord" />
  <!-- 自定义组件的双向绑定，将value与自定义组件my-input进行双向绑定 -->
  <my-input-vue v-model:value="value"></my-input-vue>

  <br />
  {{value}}

  <hr />
  <button @click="getData()">axios请求数据</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyInputVue from './components/MyInput.vue'
import Axios from 'axios'
export default {
  name: 'App',
  components: {
    HelloWorld,
    MyInputVue
  },
  data() {
    return {
      value: '自定义组件的双向绑定',
      list: []
    }
  },
  methods: {
    helloWord(msg) {
      alert(msg)
    },
    getData() {
      let url = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1'
      Axios.get(url).then(res => {
        console.log(res);
      }).catch(error => {
        console.error(error);
      })
    }
  },
}
</script>

<style>
</style>
