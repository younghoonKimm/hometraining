<template>
  <nav class="router-nav clearfix homefit" v-if="this.$route.path !== '/scription'">
    <div class="router-nav_wrapper">
      <h4>HomeFit</h4>
      <div class="router-nav_list clearfix swiper-container" ref="slide">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:;">My HomeFit</a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;">All HomeFit</a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;">HomeFit Community</a>
          </div>
          <div class="swiper-slide third" @click="$router.push('/subscription')">
            <a href="javascript:;">Get inspired</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { Fragment } from "vue-fragment";
import Swiper from "swiper/bundle";
import "../../views/Mypage.scss";
import SubscribePage from "./SubscribePage";

export default {
  created() {
    this.routerPathSwitch(this.$route.path);
    this.$nextTick(() => {
      this.navSlider = new Swiper(this.$refs.slide, {
        loop: false,
        preventClicks: true,
        preventClicksPropagation: true,
        slideToClickedSlide: false,
        slidesPerView: "auto",
        allowSlideNext: true,
        allowSlidePrev: true,
        breakpoints: {
          800: {
            allowSlideNext: false,
            allowSlidePrev: false,
          },
        },
      });
      this.navSlider.slideTo(this.activeNumber);
    });
    window.addEventListener("resize", this.onResize);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },

  components: {
    SubscribePage,
    Fragment,
  },

  data() {
    return {
      activeNumber: null,
      navSlider: null,
    };
  },

  methods: {
    onToggleSection(i) {
      const sectionAll = document.querySelectorAll("section");
      sectionAll.forEach((v, index) => {
        v.classList.remove("on");
        if (index === i) {
          v.classList.add("on");
        }
      });
    },
    onResize() {
      if (window.innerWidth < 800) {
        this.navSlider.slideTo(this.activeNumber);
      }
    },
    routerPathSwitch(path) {
      switch (true) {
        case path.includes("HomeFit"):
          return (this.activeNumber = 0);
          break;
        case path.includes("All HomeFit"):
          return (this.activeNumber = 1);
          break;
        case path.includes("HomeFit Community"):
          return (this.activeNumber = 2);
          break;
        case path.includes("Get inspired"):
          return (this.activeNumber = 3);
          break;
        default:
          return 0;
      }
    },
  },
};
</script>

<style style="scss">
.subscribe_main section {
  position: relative;
  z-index: -1;
  opacity: 0;
  display: none;
  will-change: opacity;
}

.subscribe_main section.on {
  display: block;
  z-index: 4;
  opacity: 1;
}

.row {
  flex-direction: column;
}

.router-nav.homefit .swiper-slide {
  margin-right: 60px;
}
.router-nav.homefit .swiper-slide:last-child {
  margin-right: 0;
}

.router-nav.homefit .swiper-slide-active::after {
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  border: 1px solid #000;
  content: "";
  width: 100%;
}
</style>
