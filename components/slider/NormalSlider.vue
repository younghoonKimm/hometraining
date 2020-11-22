<template>
  <div class="week_slider swiper-container" ref="slider">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(value, index) in this.sliderData" :key="index">
        <div class="swiper-slide-inner"></div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import Swiper from 'swiper/bundle';

export default {
  created() {
    this.$nextTick(() => {
      this.slider = new Swiper(this.$refs.slider, this.sliderOption);
    });
  },
  props: {
    sliderData: {
      type: Array,
      default: () => [],
    },
    sliderOption: {
      type: Object,
      default: () => this.sliderDefaultOption,
    },
  },
  data() {
    return {
      slider: null,
      sliderDefaultOption: {
        direction: 'horizontal',
        preventClicks: false,
      },
    };
  },
  computed: {
    mainSliderPause: () => {
      return {
        on: this.navToggle,
      };
    },
  },
  methods: {
    onToggleNav(e) {
      e.preventDefault();
      const wrap = document.querySelector('.wrap');
      this.navToggle = !this.navToggle;
    },
  },
};
</script>
