import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "主页",
    component: Home,
    icon: "iconfont icon-zhuye"
  },
  {
    path: "/application",
    name: "应用",
    component: () => import("../views/Application.vue"),
    icon: "iconfont icon-fenlei"
  },
  {
    path: "/ranking",
    name: "排行",
    component: () => import("../views/Ranking.vue"),
    icon: "iconfont icon-paihang"
  },
  {
    path: "/my",
    name: "我的",
    component: () => import("../views/My.vue"),
    icon: "iconfont icon-geren"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
