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

  <hr>

  {{name}}
  <input type="text"
         v-model="name">

  <hr>

  <input type="number"
         v-model="sells">

  <br>
  销量::{{sellsNiceOrBad}}

  <br>
  年龄：{{userInfo.age}}
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyInputVue from './components/MyInput.vue'

import Axios from 'axios'
import DModalVue from './components/D-Modal.vue'
import { ref, reactive, toRefs, computed, readonly, watchEffect, watch } from 'vue';
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
    var article = reactive({
      name: '钢铁是怎样炼成的',
      sells: 1000000
    })

    // 将响应式对象修改为深度只读对象
    article = readonly(article)
    // 将响应式数据修改为深度只读数据
    // title = readonly(title)
    // 获取和修改值
    function getTitle() {
      console.log(title.value);
      console.log(userInfo.name);
    }
    var setTitle = () => {
      title.value = '改变后的值';
      userInfo.name = '改变后的值'
    }

    // 设置计算属性
    let sellsNiceOrBad = computed(() => {
      if (article.sells >= 1000000) {
        return '销量好'
      } else {
        return '销量一般'
      }
    })
    var data1 = reactive({
      num: 1
    })

    const data2 = reactive({
      num: 1
    })

    // var num3 = ref(1)
    // 可以监听具体某一个值的变化,并且在初始化时会先执行一次
    watchEffect(() => {
      // console.log(userInfo.age);
      // console.log(data1.num);
    })
    // 监听一个响应式对象或者值，懒加载，只有变化后才第一次调用，监听的值是对象时，新老值因为引用相同而输出相同，因为vue没有保存引用的副本
    watch(data2, (newValue, oldValue) => {
      console.log('新值', newValue, '老值', oldValue);
    })
    setInterval(() => {
      // userInfo.age++
      // data1.num++
      data2.num++
      // num3.value++
    }, 1000)
    // 将定义的值返回
    return {
      title,
      userInfo,
      getTitle,
      setTitle,
      ...toRefs(data1),
      ...toRefs(article),  // 解构响应式对象
      sellsNiceOrBad
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
