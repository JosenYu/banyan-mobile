import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "主页",
    component: Home,
    icon: "iconfont icon-zhuye",
    show: true
  },
  {
    path: "/application",
    name: "应用",
    component: () => import("../views/Application.vue"),
    icon: "iconfont icon-fenlei",
    show: true,
    children: []
  },
  {
    path: "/ranking",
    name: "排行",
    component: () => import("../views/Ranking.vue"),
    icon: "iconfont icon-paihang",
    show: true
  },
  {
    path: "/my",
    name: "我的",
    component: () => import("../views/My.vue"),
    icon: "iconfont icon-geren",
    show: true
  },
  {
    path: "/model",
    name: "模型",
    component: () => import("../views/Model")
  },
  {
    path: "/addNew",
    name: "新增",
    component: () => import("../views/AddNew.vue"),
    children: [
      {
        path: "model",
        name: "新增模型",
        component: () => import("../components/addNew/TheModel.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
