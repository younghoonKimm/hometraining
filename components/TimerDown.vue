<template>
  <div>
    <div>
      00
    </div>
    <div>
      {{ addZero(this.timerMin) }}
    </div>
    <div>{{ addZero(this.timerSec) }}</div>
  </div>
</template>

<style></style>

<script>
import Swiper from 'swiper/bundle';

export default {
  created() {
    this.$nextTick(() => {
      //   this.timerInterval();
    });
  },
  props: {
    minute: {
      type: Number,
      default: () => 0,
    },
  },
  data() {
    return {
      timer: null,
      time: this.minute,
      timerMin: parseInt(this.minute / 60),
      timerSec: this.minute % 60,
    };
  },
  beforeDestroy() {
    window.clearInterval(this.timer);
  },

  computed: {
    returnTimer() {
      return;
    },
  },
  methods: {
    timerSetting() {
      console.log(1);
      this.time -= 1;
      this.timerMin = parseInt(this.time / 60);
      this.timerSec = this.time % 60;
      if (this.time === 0) window.clearInterval(this.timer);
    },

    addZero(num) {
      return num < 10 ? '0' + num : '' + num;
    },

    timerInterval() {
      this.timer = setInterval(() => {
        this.timerSetting();
      }, 1000);
    },
  },
};
</script>
