<script setup>
import { useAuthStore } from "../store/authStore";
import router from "../router/router.js";

const store = useAuthStore();

const logout = () => {
  useAuthStore().logoutUser();
  router.push("/login");
};
</script>
<template>
  <div class="navbar">
    <div class="logo">Todo App</div>
    <ul class="menu">
      <li><router-link to="/">Home</router-link></li>
      <li v-if="store.isAuthenticated">
        <router-link to="/todo">Todo</router-link>
      </li>
      <li v-if="store.user?.usertype == 'admin' && store.isAuthenticated">
        <router-link to="/protected">Protected</router-link>
      </li>
      <li v-if="store.user?.usertype == 'admin' && store.isAuthenticated">
        <router-link to="/dashboard">Dashboard</router-link>
      </li>
      <li><router-link to="/register">Register</router-link></li>
      <li v-if="!store.isAuthenticated">
        <router-link to="/login">Login </router-link>
      </li>
      <li v-if="store.isAuthenticated" @click="logout">
        Logout
        <span v-if="store.user?.email"
          ><small>({{ store.user?.email }})</small></span
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
body,
ul {
  margin: 0;
  padding: 0;
}

.navbar {
  background-color: #30343d; /* Background color of the navbar */
  color: white; /* Text color */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
}
.logo {
  background-color: #000000;
  font-size: 24px;
  font-weight: bold;
  padding: 8px;
  border-radius: 5px;
}

.menu {
  list-style: none;
  display: flex;
}

.menu li {
  margin-right: 20px;
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
}
.menu li:hover {
  background-color: rgb(80, 81, 92);
}

.menu li a {
  text-decoration: none;
  color: white;
}
</style>
