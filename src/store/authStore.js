import { defineStore } from "pinia";
import { ref, computed } from "vue";
import router from "../router/router.js";

export const useAuthStore = defineStore("auth", () => {
  const isAuthenticated = localStorage.getItem("auth") == 1;
  const user = JSON.parse(localStorage.getItem("user")) || null;
  const users = JSON.parse(localStorage.getItem("users")) || ref([]);
  let currentUser = ref(null);

  function registerUser({ email, password, usertype }) {
    if (this.users.some((user) => user.email === email)) {
      throw new Error("Email already exists");
    }

    this.users.push({ email, password, usertype });
    console.log("this.users", this.users);
    console.log("userType", usertype);
    localStorage.setItem("users", JSON.stringify(this.users));
  }

  function loginUser({ email, password }) {
    const user = this.users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      currentUser = user;
      localStorage.setItem("user", JSON.stringify(currentUser));
      localStorage.setItem("auth", 1);
      router.push("/");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      throw new Error("Invalid credentials");
    }
  }

  function logoutUser() {
    localStorage.setItem("user", false);
    localStorage.setItem("auth", false);
    localStorage.setItem("isAuthenticated", false);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  return {
    user,
    users,
    currentUser,
    registerUser,
    isAuthenticated,
    loginUser,
    logoutUser,
  };
});
