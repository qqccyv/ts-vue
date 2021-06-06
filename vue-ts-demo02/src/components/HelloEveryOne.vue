<template>
  <div>
    <h1>{{title}}</h1>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      title: 'hello everyone'
    }
  },
  mounted() {
    console.log('query', this.$route.query)
    console.log('params', this.$route.params)
  },
})
</script>

<style lang="scss" scoped>
</style>