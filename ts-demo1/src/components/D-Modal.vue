<template>
  <div>
    <!-- 将对应组件挂载到特定的节点中去 -->
    <teleport to='body'>
      <div v-show="visible"
           class="modal-bg">
        <div class="modal-box">
          <div class="modal-menu">
            <span @click="$emit('update:visible',false)"
                  class="close-icon">
              x
            </span>
          </div>
          <div class="modal-content">
            我是模态框
          </div>
        </div>
      </div>
    </teleport>

  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style  scoped>
.modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.7;
  background: #000;
}
.modal-box {
  width: 40%;
  height: 30%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
}
.close-icon {
  display: inline-block;
  font-size: 30px;
}
</style>