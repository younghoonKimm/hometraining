<template>
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
</template>

<style>
.week_slider .swiper-slide-inner {
  display: flex;
}
</style>

<script>
import Swiper from 'swiper/bundle';
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
        spaceBetween: 30,
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
