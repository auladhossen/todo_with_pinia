import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import AddTask from "../components/AddTask.vue";
import TaskList from "../components/TaskList.vue";
import AddViewTodo from "../components/AddViewTodo.vue";
import Register from "../components/Register.vue";
import Login from "../components/Login.vue";
import Menubar from "../components/Menubar.vue";
import Protected from "../components/Protected.vue";
import Dashboard from "../components/Dashboard.vue";
import { useAuthStore } from "../store/authStore";

const routes = [
  {
    path: "/",
    components: {
      default: Home,
      NavigationBar: Menubar,
    },
  },
  {
    path: "/login",
    components: {
      default: Login,
      NavigationBar: Menubar,
    },
  },
  {
    path: "/register",
    components: {
      default: Register,
      NavigationBar: Menubar,
    },
  },
  {
    path: "/addtask",
    components: {
      default: AddTask,
      NavigationBar: Menubar,
    },
  },
  {
    path: "/tasklist",
    components: {
      default: TaskList,
      NavigationBar: Menubar,
    },
  },
  {
    path: "/dashboard",
    components: {
      default: Dashboard,
      NavigationBar: Menubar,
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/protected",
    components: {
      default: Protected,
      NavigationBar: Menubar,
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/todo",
    components: {
      default: AddViewTodo,
      NavigationBar: Menubar,
    },
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const auth = useAuthStore();
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
