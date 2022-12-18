<script setup lang="ts">
import { reactive, ref, watch } from "vue";
const obja = reactive({
  a: 1,
});
const arr = ref<Array<string>>(["a", "b", "c"]);
const a = ref<string>("a");

console.log(obja.a);
console.log(a);

setTimeout(() => {
  // a.value = "123";
  arr.value.splice(1, 0, "test");
}, 2000);
watch(
  [a, arr],
  (newData, old) => {
    console.log("数据变化了", newData, old);
  },
  { immediate: true, deep: false }
);
</script>

<template>
  {{ a }}
  <div v-for="item in arr"
       :key="item">{{ item }}</div>
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
