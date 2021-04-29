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

  <hr>
  <h1>{{title}}</h1>
  {{userInfo.name}}
  <button @click="getTitle">获取两个值</button>
  <button @click="setTitle">改变两个值</button>

  <br>
  <!-- 双向绑定setup中定义的响应式值 -->
  <input type="text"
         v-model="title">
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyInputVue from './components/MyInput.vue'

import Axios from 'axios'
import DModalVue from './components/D-Modal.vue'
import { ref, reactive } from 'vue';
export default {
  name: 'App',
  components: {
    HelloWorld,
    MyInputVue,
    DModalVue
  },
  setup() {
    // 设置响应式的简单数据类型的值
    var title = ref('我是一个标题');
    // 设置响应式的对象的值
    const userInfo = reactive({
      name: '邓宇',
      age: 31
    });
    // 获取和修改值
    function getTitle() {
      console.log(title.value);
      console.log(userInfo.name);
    }
    var setTitle = () => {
      title.value = '改变后的值';
      userInfo.name = '改变后的值'
    }

    // 将定义的值返回
    return {
      title,
      userInfo,
      getTitle,
      setTitle
    }
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
