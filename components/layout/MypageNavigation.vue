<template>
  <nav class="router-nav clearfix" v-if="this.$route.path !== '/scription'">
    <h4>My page</h4>
    <div class="router-nav_list clearfix swiper-container" ref="slide">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="javascript:;">My products</a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">Orders</a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">Wishlist</a>
        </div>
        <div class="swiper-slide third" @click="$router.push('/subscription')">
          <a href="javascript:;">Subscriptions</a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">Rewards</a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">Vouchers</a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">Service</a>
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

const configs = ["Samsung", "hyu"];

const dummy = ["1", "2", "3"];
export default {
  created() {
    this.$nextTick(() => {
      this.navSlider = new Swiper(this.$refs.slide, {
        loop: false,
        preventClicks: true,
        preventClicksPropagation: true,
        slideToClickedSlide: true,
        slidesPerView: "auto",
        allowSlideNext: true,
        allowSlidePrev: true,
        breakpoints: {
          600: {
            allowSlideNext: false,
            allowSlidePrev: false,
          },
        },
      });
      if (window.innerWidth < 600) {
        this.navSlider.slideTo(4, false, false);
      }
    });
  },
  components: {
    SubscribePage,
    Fragment,
  },
  data() {
    return {
      dummy,
      configs,
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
</style>
