<script setup lang="ts">
import { computed } from "vue";
const props = defineProps<{
  id: number;
  name: string;
  isCompleted: boolean;
}>();
const emits = defineEmits(["done", "del"]);
const currentIsCompleted = computed({
  get: () => props.isCompleted,
  set: (value: boolean) => {
    emits("done", value, props.id);
  },
});
</script>

<template>
  <p>
    <input
      type="checkbox"
      :true-value="true"
      :false-value="false"
      v-model="currentIsCompleted"
    />
    {{ name }}
    <button @click="$emit('del', id)">删除</button>
  </p>
</template>

<style scoped></style>
