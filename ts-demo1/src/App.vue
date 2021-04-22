<template>
  <HelloWorld @helloWord="helloWord" />
  <!-- 自定义组件的双向绑定，将value与自定义组件my-input进行双向绑定 -->
  <my-input-vue v-model:value="value"></my-input-vue>
  <br />
  {{value}}
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyInputVue from './components/MyInput.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    MyInputVue
  },
  data() {
    return {
      value: '自定义组件的双向绑定'
    }
  },
  methods: {
    helloWord(msg) {
      alert(msg)
    }
  },
}
</script>

<style>
</style>
