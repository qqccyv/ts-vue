<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { FilterFlagType } from "@/types/todo";
import TodoHeader from "./components/todo/todo-header.vue";
import TodoFilter from "./components/todo/todo-filter.vue";
import TodoItem from "./components/todo/todo-item.vue";

interface IEvent {
  id: number;
  name: string;
  isCompleted: boolean;
}

const eventName = ref("");
const totalEventList = ref<IEvent[]>([]);
const completedEventList = computed(() => {
  return totalEventList.value.filter((event) => event.isCompleted);
});
const unCompletedEventList = computed(() => {
  return totalEventList.value.filter((event) => !event.isCompleted);
});
const filterFlag = ref<FilterFlagType>(FilterFlagType.ALL);

const addEvent = () => {
  if (eventName.value === "") return;
  totalEventList.value.push({
    id: Date.now(),
    name: eventName.value,
    isCompleted: false,
  });
  eventName.value = "";
};

const delEvent = (id: number) => {
  totalEventList.value = totalEventList.value.filter(({ id: eventId }) => {
    return eventId !== id;
  });
};

const done = (isCompleted: boolean, id: number) => {
  totalEventList.value = totalEventList.value.map((event) => {
    if (event.id === id) {
      event.isCompleted = isCompleted;
    }
    return event;
  });
};
</script>

<template>
  <TodoHeader @add="addEvent" v-model:event-name="eventName" />
  <TodoFilter v-model:filter-flag="filterFlag" />
  <template v-if="filterFlag === FilterFlagType.ALL">
    <TodoItem
      v-for="item in totalEventList"
      :key="item.id"
      v-model="item.isCompleted"
      v-bind="item"
      @del="delEvent"
      @done="done"
    />
  </template>
  <template v-if="filterFlag === FilterFlagType.COMPLETED">
    <TodoItem
      v-for="item in completedEventList"
      :key="item.id"
      v-model="item.isCompleted"
      v-bind="item"
      @del="delEvent"
      @done="done"
    />
  </template>
  <template v-if="filterFlag === FilterFlagType.UNCOMPLETED">
    <TodoItem
      v-for="item in unCompletedEventList"
      :key="item.id"
      v-model="item.isCompleted"
      v-bind="item"
      @del="delEvent"
      @done="done"
    />
  </template>
</template>

<style scoped></style>
