<script>
import { useAuthStore } from "../store/authStore";
import { ref, reactive } from "vue";
const email = ref("");
const password = ref("");

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    login() {
      try {
        useAuthStore().loginUser({
          email: this.email,
          password: this.password,
        });
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>

<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style scoped>
form {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

input[type="email"],
input[type="password"] {
  padding: 10px;
  margin: 10px 0;
  width: 90%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

button[type="submit"] {
  padding: 10px;
  margin-top: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}

div {
  text-align: center;
  margin-top: 20px;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f4f4f4;
}
</style>
