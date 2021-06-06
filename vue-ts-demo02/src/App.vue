<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  <router-link to="/">HelloWorld</router-link>
  <br>
  <!-- 动态路由传参,this.$route.params接收传参 -->
  <!-- <router-link to="/helloEveryone/hello">helloEveryone</router-link> -->
  <br>
  <!-- get传参 this.$route.query接收传参-->
  <!-- <router-link to="/helloEveryone?hello=你好">helloEveryone</router-link> -->
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {},
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
