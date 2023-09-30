<script setup>
import { useAuthStore } from "../store/authStore";
import router from "../router/router.js";
const store = useAuthStore();

const currentUser = JSON.parse(localStorage.getItem("user")) || null;

const logout = () => {
  store.logoutUser();
  router.push("/login");
};
</script>

<template>
  <div class="dashboard">
    <div>
      <h2>Welcome, {{ currentUser?.email }} to the Dashboard page</h2>
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>
<style scoped>
.dashboard {
  padding: 100px;
}
</style>
