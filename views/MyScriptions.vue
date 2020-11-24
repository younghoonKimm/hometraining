<template>
  <Fragment>
    <MypageNavigation />
    <main id="main" role="main">
      <section class="section_first">
        <div>
          <h3>Subscriptions</h3>
          <span>Would you like to start a new contract?</span>
          <div>
            <a href="jacascript;">New contract</a>
          </div>
          <div>
            <button type="button">Active</button>
            <button type="button">Archived</button>
          </div>
        </div>
      </section>
      <section class="section_second">card</section>
      <div @click="$router.push('/subscription/info')">info</div>
      <section class="section_third">
        <div class="mypage_slider swiper-container" ref="slide">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="swiper-slide-inner">1</div>
            </div>
            <div class="swiper-slide">
              <div class="swiper-slide-inner">2</div>
            </div>
            <div class="swiper-slide">
              <div class="swiper-slide-inner">3</div>
            </div>
            <div class="swiper-slide">
              <div class="swiper-slide-inner">4</div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination_wrapper">
          <div class="swiper-pagination"></div>
          <div>정지</div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </section>
      <div>Home > Mypage > Subscriptions</div>
    </main>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import Swiper from "swiper/bundle";

import SubscribePage from "../components/layout/SubscribePage";
import MypageNavigation from "../components/layout/MypageNavigation";

export default {
  created() {
    this.$nextTick(() => {
      this.mypageSlider = new Swiper(this.$refs.slide, {
        loop: false,
        preventClicks: true,
        preventClicksPropagation: true,
        slideToClickedSlide: true,
        slidesPerView: 1,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return `<div class=${className}></div>`;
          },
        },
        breakpoints: {
          800: {
            slidesPerView: 3,
          },
        },
        // allowSlideNext: false,
        // allowSlidePrev: false,
      });
    });
  },
  components: {
    SubscribePage,
    Fragment,
    MypageNavigation,
  },
  data() {
    return {
      mypageSlider: null,
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
