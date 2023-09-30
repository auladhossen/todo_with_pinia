<script setup>
import { useTodoStore } from "../store/todoStore";
const store = useTodoStore();
const tasks = store.tasks;

function removeTask(taskId) {
  store.removeTask(taskId);
}

function toggleTaskStatus(taskId) {
  store.toggleTaskStatus(taskId);
  const task = this.tasks.find((task) => task.id === taskId);
  if (task) {
    task.done = !task.done;
  }
  console.log("tasks list", tasks);
  store.saveTasksToLocalStorage();
}
</script>

<template>
  <div class="todolist-container">
    <div class="todo-list">
      <h3>Tasks</h3>
      <ul v-if="tasks.length > 0">
        <li v-for="(task, index) in tasks" :key="task.id" class="task-item">
          <input
            type="checkbox"
            v-model="task.done"
            @change="toggleTaskStatus(task.id)"
            class="task-checkbox"
          />
          <span :class="{ 'completed-task': task.done }">{{ task.name }}</span>
          <span v-if="task.done">(Done)</span>
          <span v-else>(Not Done)</span>
          <button @click="removeTask(task.id)" class="delete-button">
            Delete
          </button>
        </li>
      </ul>
      <span v-else>No task added</span>
    </div>
  </div>
</template>

<style scoped>
ul {
  padding-left: 0 !important;
}
.todolist-container {
  margin-top: 20px;
}
.todo-list {
  font-family: Arial, sans-serif;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
}

.task-content {
  display: flex;
  align-items: center;
  flex: 1;
}

.task-checkbox {
  margin-right: 10px;
  cursor: pointer;
}

.completed-task {
  text-decoration: line-through;
  color: #999;
}

.delete-button {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.delete-button:hover {
  background-color: #c0392b;
}
</style>
