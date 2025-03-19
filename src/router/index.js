import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "@/views/Home"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  }, {
    path: "/ob",
    name: "ob",
    redirect: "/ob/normal",
    component: () => import("@/views/Ob"),
    children: [
      {
        path: "normal",
        name: "obNormal",
        component: () => import("@/components/Ob/normal.vue"),
      }
    ],
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
