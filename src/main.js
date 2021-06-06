import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "vue-awesome/icons/flag";
import "vue-awesome/icons";
import "./assets/tailwind.css";
import VueMeta from "vue-meta";
import Icon from "vue-awesome/components/Icon";

Vue.component("v-icon", Icon);
Vue.use(VueMeta, { refreshOnceOnNavigation: true });

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
