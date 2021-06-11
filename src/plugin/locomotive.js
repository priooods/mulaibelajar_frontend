import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  data() {
    return {
      refresh: false,
      x: null,
    };
  },
  computed: {
    scl() {
      return new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        repeat: true,
        smartphone: {
          smooth: true,
        },
        getSpeed: true,
        resetNativeScroll: true,
        getDirection: true,
      });
    },
  },
  created() {
    this.refresh = true;
  },
  mounted() {
    this.scl;
  },
  destroyed() {
    this.scl.destroy();
    this.scl.start();
  },
};
