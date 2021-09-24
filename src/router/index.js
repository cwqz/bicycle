import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 首页
  {
    path: "/",
    name: "home",
    component: () =>import ("@/views/home/home.vue"),
    hidden: true,
  },
  {
    path: "/login",
    name: "login",
    component: () =>import ("@/views/login/login.vue"),
    hidden: true
  },
  {
    path: "/register",
    name: "register",
    component: () =>import ("@/views/login/register.vue"),
    hidden: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
