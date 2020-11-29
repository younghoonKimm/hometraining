<template>
  <Fragment>
    <div class="week_slider swiper-container" ref="weekSlider">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(value, index) in dates" :key="index">
          <div class="swiper-slide-inner" @click="sendEvent(value.date)">
            <div class="day">{{ value.day }}</div>
            <div class="date">{{ value.date }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </Fragment>
</template>

<style>
.week_slider .swiper-slide-inner {
  display: flex;
  justify-content: center;
}
</style>

<script>
import Swiper from 'swiper/bundle';
import { Fragment } from 'vue-fragment';
const dates = [
  {
    day: 'Fri',
    date: 16,
  },
  {
    day: 'Fri',
    date: 16,
  },
  {
    day: 'Fri',
    date: 16,
  },
  {
    day: 'Fri',
    date: 16,
  },
  {
    day: 'Fri',
    date: 16,
  },
  {
    day: 'Fri',
    date: 16,
  },
  {
    day: 'Fri',
    date: 16,
  },
  {
    day: 'Fri',
    date: 16,
  },
  {
    day: 'Fri',
    date: 16,
  },
];

export default {
  components: {
    Fragment,
  },
  created() {
    this.$nextTick(() => {
      this.week_slider = new Swiper(this.$refs.weekSlider, this.weekSliderOption);
    });
  },
  data() {
    return {
      dates,
      week_slider: null,
      weekSliderOption: {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 7,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        preventClicks: false,
      },
    };
  },
  methods: {
    sendEvent(i) {
      this.$emit('update', i);
    },
  },
};
</script>
