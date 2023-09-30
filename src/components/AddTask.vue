<script setup>
import { ref, reactive } from "vue";
import { useTodoStore } from "../store/todoStore";
const store = useTodoStore();

const taskName = ref("");

const addTask = () => {
  if (taskName.value.trim() === "") return;
  useTodoStore().addTask(taskName.value);
  taskName.value = "";
};
</script>

<template>
  <div class="addtodo-container">
    <div class="add-todo">
      <h2>Todo App</h2>
      <input
        v-model="taskName"
        @keyup.enter="addTask"
        placeholder="Add a new task"
      />
      <button @click="addTask">Add</button>
    </div>
  </div>
</template>

<style scoped>
.addtodo-container {
  margin-top: 20px;
}

.add-todo {
  text-align: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
}

input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  width: 60%;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
