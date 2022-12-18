<script setup lang="ts">
import { computed } from "vue";
const props = defineProps<{
  eventName: string;
}>();
const emits = defineEmits(["update:eventName", "add"]);
const currentEventName = computed({
  get: () => props.eventName,
  set: (value: string) => emits("update:eventName", value),
});
</script>

<template>
  <input
    type="text"
    placeholder="请输入代办内容"
    v-model.trim="currentEventName"
    @keyup.enter="$emit('add')"
  />
  <button @click="$emit('add')">添加待办项</button>
</template>

<style scoped></style>
