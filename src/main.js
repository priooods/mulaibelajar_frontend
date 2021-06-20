import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "vue-awesome/icons/flag";
import "vue-awesome/icons";
import "./assets/tailwind.css";
import "locomotive-scroll/dist/locomotive-scroll.min.css";
import VueMeta from "vue-meta";
import Icon from "vue-awesome/components/Icon";
import VueCookies from "vue-cookies";
Vue.use(VueCookies);
Vue.component("v-icon", Icon);
Vue.use(VueMeta, { refreshOnceOnNavigation: true });
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
