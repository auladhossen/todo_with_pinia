<script>
import { useAuthStore } from "../store/authStore";
import { ref, reactive } from "vue";
import router from "../router/router.js";
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      userType: "",
    };
  },

  methods: {
    register() {
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      try {
        useAuthStore().registerUser({
          email: this.email,
          password: this.password,
          usertype: this.userType,
        });
        alert("Registration successful");
        router.push("/login");
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>

<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <input v-model="email" type="email" placeholder="Email" required />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        required
      />
      <input
        v-model="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        required
      />
      <input
        v-model="userType"
        type="text"
        placeholder="Type of User"
        required
      />
      <button type="submit">Register</button>
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
input[type="password"],
input[type="text"] {
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
