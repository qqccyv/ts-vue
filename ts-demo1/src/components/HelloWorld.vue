<template>
  <div class="hello">
    <button @click="helloWord">
      触发父组件的方法
    </button>

    -----------------
    <div>
      我是helloword组件的msg -----{{name}}
      <button @click="changeName">改变东西</button>
    </div>
  </div>
</template>

<script>
export default {
  emits: {
    // 验证子组件触发组件方法的函数，方法名是自定义的事件名，参数是传递给父组件的参数
    helloWord: (msg) => {
      console.log(msg);
      // 验证函数必须返回一个Boolen类型的值
      return true
    }
  },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    helloWord() {
      this.$emit('helloWord', 'helloWord')
    },
    changeName() {
      this.name = 'name改变了'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
