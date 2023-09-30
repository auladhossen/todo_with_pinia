import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useTodoStore = defineStore("todo", () => {
  const tasks = ref([]);

  function addTask(taskName) {
    this.tasks.push({
      id: Date.now(),
      name: taskName,
      done: false,
    });
    this.saveTasksToLocalStorage();
  }

  function removeTask(taskId) {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
    }
    this.saveTasksToLocalStorage();
  }

  function toggleTaskStatus(taskId) {
    console.log("taskId", taskId);
    const task = this.tasks.find((task) => task.id === taskId);

    if (task) {
      task.done = !task.done;
    }
    this.saveTasksToLocalStorage();
  }

  function saveTasksToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  return {
    tasks,
    addTask,
    removeTask,
    toggleTaskStatus,
    saveTasksToLocalStorage,
  };
});
