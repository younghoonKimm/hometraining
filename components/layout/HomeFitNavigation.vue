<template>
  <nav class="router-nav clearfix homefit" v-if="this.$route.path !== '/scription'">
    <div class="router-nav_wrapper">
      <h4>HomeFit</h4>
      <div class="router-nav_list clearfix swiper-container" ref="slide">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(v, i) in this.list"
            :key="i"
            :class="activeNumber === i + 1 ? 'active' : ''"
          >
            <a href="javascript:;">{{ v }}</a>
          </div>
          <!-- <div class="swiper-slide">
            <a href="javascript:;">All HomeFit</a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;">HomeFit Community</a>
          </div>
          <div class="swiper-slide third" @click="$router.push('/subscription')">
            <a href="javascript:;">Get inspired</a>
          </div>-->
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

const list = ["My HomeFit", "All HomeFit", "HomeFit Community", "Get inspired"];

export default {
  watch: {
    $route(to, from) {
      this.routerPathSwitch(this.$route.path);

      this.navSlider.slideTo(this.activeNumber, false, false);
    },
  },

  // watch: {
  //   $route(to, from) {
  //     console.log(2);
  //     this.routerPathSwitch(this.$route.path);
  //     console.log(this.activeNumber);
  //   },
  // },

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
          620: {
            allowSlideNext: false,
            allowSlidePrev: false,
          },
        },
      });
      this.navSlider.slideTo(this.activeNumber, false, false);
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
      list,
      activeNumber: 0,
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
        this.routerPathSwitch(this.$route.path);
        this.navSlider.slideTo(this.activeNumber, false, false);
      }
    },
    routerPathSwitch(path) {
      switch (true) {
        case path.includes("myhomefit"):
          return (this.activeNumber = 1);
          break;
        case path.includes("allhomefit"):
          return (this.activeNumber = 2);
          break;
        case path.includes("homefitcommunity"):
          return (this.activeNumber = 3);
          break;
        case path.includes("getinspired"):
          return (this.activeNumber = 4);
          break;
        default:
          return 6;
      }
    },
  },
};
</script>

<style style="scss"></style>
