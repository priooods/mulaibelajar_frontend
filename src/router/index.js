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
        props: true,
        component: () => import("../views/Kelas.vue"),
      },
      {
        path: "biaya",
        name: "Biaya Belajar",
        component: () => import("../views/BiayaBelajar.vue"),
      },
      {
        path: "konsultasi",
        name: "Konsultasi",
        component: () => import("../views/Konsultasi.vue"),
      },
      {
        path: "checkout",
        name: "Checkout",
        props: true,
        component: () => import("../views/Checkout.vue"),
      },
    ],
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/pembayaran",
    name: "Pembayaran",
    component: () => import("../views/Pembayaran.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: "smooth",
      };
    }
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router
