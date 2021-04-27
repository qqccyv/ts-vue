<template>
  <div>
    <!-- 在接收父组件传值的同时，发布一个固定的update广播事件，冒号后面跟的是父组件绑定的属性值，参数就是需要双向绑定的值 -->
    <input :value="value"
           @input="$emit('update:value',$event.target.value)"
           type="text">

    <div>-----</div>
    <div>
      <!-- 全局混入的属性或者方法的作用域都属于当前页面实例，各个页面互不干扰 -->
      我是input组件的name
      {{name}}
      <button @click="showName">展示name</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
</style>