<template>
  <HelloWorld @helloWord="helloWord" />
  <!-- 自定义组件的双向绑定，将value与自定义组件my-input进行双向绑定 -->
  <my-input-vue v-model:value="value"></my-input-vue>

  <br />
  {{value}}

  <hr />
  <button @click="getData()">axios请求数据</button>
  <hr>

  <button @click="showModal">展示模态框</button>

  <d-modal-vue v-model:visible="visible"></d-modal-vue>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyInputVue from './components/MyInput.vue'

import Axios from 'axios'
import DModalVue from './components/D-Modal.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    MyInputVue,
    DModalVue
  },
  data() {
    return {
      value: '自定义组件的双向绑定',
      list: [],
      visible: false
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
    },
    showModal() {
      this.visible = true
    }
  },
}
</script>

<style>
</style>
