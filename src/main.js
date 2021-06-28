import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "vue-awesome/icons/flag";
import "vue-awesome/icons";
import "./assets/tailwind.css";
import VueMeta from "vue-meta";
import VueScrollReveal from "vue-scroll-reveal";
import Icon from "vue-awesome/components/Icon";
import VueCookies from "vue-cookies";
import axios from "axios";
import VueAxios from "vue-axios";
import "aos/dist/aos.css";
import vueAwesomeCountdown from "vue-awesome-countdown";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import Vue2Filters from "vue2-filters";
import VueMoment from "vue-moment";
Vue.use(VueMoment);
Vue.use(vueAwesomeCountdown, "vac");
Vue.use(Vue2Filters);
Vue.use(ViewUI);
Vue.use(VueAxios, axios);
Vue.use(VueCookies);
Vue.component("v-icon", Icon);
Vue.use(VueMeta, { refreshOnceOnNavigation: true });
Vue.config.productionTip = false;
Vue.use(VueScrollReveal);

Vue.use(VueScrollReveal, {
  class: "v-scroll-reveal",
  duration: 4000,
  scale: 1,
  distance: "300px",
  mobile: true,
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
