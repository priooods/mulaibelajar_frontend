import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../views/Index.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("../views/Home.vue"),
      },
      {
        path: "privacypolicy",
        name: "Privacy & Policy",
        component: () => import("../views/PrivacyPolicy.vue"),
      },
      {
        path: "tentang",
        name: "Tentang Kami",
        component: () => import("../views/About.vue"),
      },
      {
        path: "contact",
        name: "Contact",
        component: () => import("../views/Contact.vue"),
      },
      {
        path: "kelas",
        name: "Kelas",
        component: () => import("../views/Kelas.vue"),
      },
      {
        path: "biaya",
        name: "Biaya Belajar",
        component: () => import("../views/BiayaBelajar.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
