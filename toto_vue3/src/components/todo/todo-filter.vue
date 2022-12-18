<script setup lang="ts">
import { FilterFlagType } from "@/types/todo";
import { computed } from "vue";
const props = defineProps<{ filterFlag: FilterFlagType }>();
const emits = defineEmits(["update:filterFlag"]);
const currentFilterType = computed({
  get: () => props.filterFlag,
  set: (filterFlag) => {
    emits("update:filterFlag", filterFlag);
  },
});
</script>

<template>
  <div>
    <input
      type="radio"
      :value="FilterFlagType.ALL"
      v-model="currentFilterType"
    />全部
    <input
      type="radio"
      :value="FilterFlagType.COMPLETED"
      v-model="currentFilterType"
    />已完成
    <input
      type="radio"
      :value="FilterFlagType.UNCOMPLETED"
      v-model="currentFilterType"
    />未完成
  </div>
</template>

<style scoped></style>
