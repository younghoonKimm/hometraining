<template>
  <main id="main" role="main">
    <!-- <section class="section_first">
      Img
    </section> -->
    <section class="section_second">
      <div class="section_second_nav_swiper swiper-container" ref="navSlider">
        <div class="swiper-pagination_wrapper">
          <div class="swiper-pagination"></div>
        </div>
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(v, i) in this.nav" :key="i">
            <div class="swiper-slide-inner">
              <div
                :style="{ position: 'absolute', bottom: 0 }"
                v-if="i === 1"
                @click="
                  $router.push({
                    name: 'HometrainingReservation',
                    params: { active: 2 },
                  })
                "
              >
                store
              </div>
              {{ v }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <section class="section_third">
      <div class="section_third_slider myhometraining  swiper-container" ref="thirdSlider">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(v, i) in this.dummy" :key="i">
            <div class="swiper-slide-inner"></div>
          </div>
        </div>
      </div>
    </section> -->
  </main>
</template>

<script>
import Swiper from "swiper/bundle";

import WeekCalender from "../components/WeekCalender";
import "./CommunityMain.scss";

const nav = ["베이직", "프리미엄", "1:1트레이닝"];

const dummy = [
  "베이직",
  "베이직",
  "베이직",
  "베이직",
  "프리미엄",
  "1:1트레이닝",
];

export default {
  created() {
    this.$nextTick(() => {
      this.nav_slider = new Swiper(this.$refs.navSlider, {
        direction: "horizontal",
        preventClicks: false,
        preventClicksPropagation: false,
        slideToClickedSlide: true,
        touchEventsTarget: "wrapper",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return `<div class=${className}>
              ${nav[index]}
             </div>
            </div>`;
          },
        },
      });

      //   this.third_Slider = new Swiper(this.$refs.thirdSlider, {
      //     breakpoints: {
      //       500: {
      //         spaceBetween: 30,
      //         slidesPerView: 'auto',
      //         allowSlideNext: false,
      //         allowSlidePrev: false,
      //         direction: 'vertical',
      //       },
      //       1000: {
      //         spaceBetween: 20,
      //         slidesPerView: 4,
      //         allowSlideNext: true,
      //         allowSlidePrev: true,
      //         direction: 'horizontal',
      //       },
      //     },
      //   });
    });
  },
  components: {
    WeekCalender,
  },
  data() {
    return {
      nav,
      dummy,
      nav_slider: null,
      third_Slider: null,
    };
  },

  methods: {
    onToggleNav(i) {
      console.log(i);
      this.$router.push(`about/${i}`);
    },
  },
};
</script>
