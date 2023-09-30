<script setup>
import { onMounted } from "vue";
import { useTodoStore } from "./store/todoStore.js";
const store = useTodoStore();

onMounted(() => {
  store.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  console.log("store.tasks", store.tasks);
});
</script>

<template>
  <router-view name="NavigationBar"></router-view>
  <main class="w-full min-h-screen p-5">
    <router-view></router-view>
  </main>
  <!-- <AddTask />
  <TodoList />
  <Register />
  <Login /> -->
</template>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
