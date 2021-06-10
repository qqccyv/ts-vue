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
  <h1>{{$store.state.count}}</h1>
  <button @click="incCount">改变vuex中的值</button>
  <!-- js路由跳转 -->
  <button @click="goHello">跳转到helloevery</button>

  <!-- <button @click="this.$router.push({name: 'helloEveryone',query: {title: '你好'}})">跳转到helloevery</button> -->
  <router-view></router-view>
</template>

<script >
import { defineComponent } from "vue";
// import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {},
  mounted() {
    // console.log(this.$store.state.count);
  },
  computed: {

  },
  methods: {
    goHello() {
      this.$router.push({
        path: "/helloEveryone",
        query: {
          hello: "你好",
        },
        // 路由路径跳转不能使用params，会被屏蔽，只能使用query
        // params: {
        //   hello: "你好",
        // },
      });

      // 通过组件名字跳转，对应params参数，刷新当前页面会丢失参数，query不会
      // this.$router.push({
      //   name: "helloEveryone",
      //   params: {
      //     hello: "你好",
      //   },
      //   query: {
      //     hello: "你好",
      //   },
      // });
    },
    incCount() {
      this.$store.commit('increment')
    }
  },
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
