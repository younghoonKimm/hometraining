<template>
  <div>
    <div>
      {{ addZero(this.timerHour) }}
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
      // this.timerInterval();
    });
  },
  props: {
    minute: {
      type: Number,
      default: () => 0,
    },
    sec: {
      type: Number,
      default: () => 0,
    },
  },
  data() {
    return {
      startTime: Date.now(),
      timer: null,
      time: 2,
      timerHour: 0,
      timerMin: this.minute,
      timerSec: this.sec,
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
      const nowTime = new Date(Date.now() - this.startTime);

      this.timerMin = nowTime.getMinutes() + this.minute;
      this.timerSec = nowTime.getSeconds() + this.sec;

      if (this.timerMin === 60) {
        this.timerHour += 1;
      }
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
