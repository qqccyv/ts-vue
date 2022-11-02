<script setup lang="ts">
import { ref } from "vue";

const arr = ref<Array<string>>(["a", "b", "c"]);
const a = ref<string>("a");
setTimeout(() => {
  a.value = "123";
  arr.value.splice(1, 0, "test");
}, 2000);
</script>

<template>
  {{ a }}
  <div v-for="item in arr" :key="item">{{ item }}</div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
