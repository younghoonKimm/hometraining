<template>
  <Fragment>
    <nav>
      <ul>
        <li v-for="(value, i) in this.dummy" :key="i" @click="onToggleSection(i)">{{ value }}</li>
      </ul>
    </nav>
    <main id="main" class="subscribe_main" role="main">
      <div class="dd">
        <section class="section_first" v-if="this.activeIndex === 0">first</section>
        <section class="section_second" v-if="this.activeIndex === 1">
          <div>주</div>
          <div>월</div>
          <WeekCalender v-on:update="showAlert" />
          <div class="section_first_slider swiper-container" ref="firstSlider">
            <div class="swiper-wrapper row">
              <div class="swiper-slide" v-for="(v, i) in this.configs" :key="i">
                <div class="swiper-slide-inner">
                  <div class="icons">bookmark</div>
                  <div class="timer"></div>
                  <div class="desc">{{}}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="section_third" v-if="this.activeIndex === 2">
          <div @click="onToggleDate()">주</div>
          <div @click="onToggleDate()">월</div>

          <MonthCalender v-if="this.toggleDate" />

          <WeekCalender v-else v-on:update="showAlert" />

          <div @click="onReservation()">예약하기</div>
        </section>
      </div>
    </main>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import Swiper from "swiper/bundle";
import "./HomeFit.scss";
import WeekCalender from "../components/WeekCalender";
import MonthCalender from "../components/MonthCalender";

const date = [
  {
    1: {
      day: "Fri",
      date: 16,
    },
    2: {
      day: "Fri",
      date: 16,
    },
    3: {
      day: "Fri",
      date: 16,
    },
    4: {
      day: "Fri",
      date: 16,
    },
    5: {
      day: "Fri",
      date: 16,
    },
    6: {
      day: "Fri",
      date: 16,
    },
    7: {
      day: "Fri",
      date: 16,
    },
    8: {
      day: "Fri",
      date: 16,
    },
    9: {
      day: "Fri",
      date: 16,
    },
  },
];

const configs = ["Samsung", "hyu"];

const dummy = ["1", "2", "3"];
export default {
  created() {
    const active = this.$route.params.active;

    if (active) {
      return (this.activeIndex = active);
      console.log(active);
    }
  },
  components: {
    WeekCalender,
    MonthCalender,
    Fragment,
  },
  data() {
    return {
      date,
      dummy,
      configs,
      toggleDate: false,
      activeIndex: 0,
      first_slider: null,
    };
  },

  methods: {
    onToggleSection(i) {
      this.activeIndex = i;
    },
    onToggleDate() {
      this.toggleDate = !this.toggleDate;
    },
    onReservation() {
      this.$store.dispatch("login/CHANGERESERVATION");
    },
    showAlert(i) {
      alert("event received" + i);
    },
  },
};
</script>

<style style="scss">
.dd {
  position: relative;
}
.subscribe_main section {
  position: relative;
  will-change: opacity;
}

.subscribe_main section.on {
  display: block;
  z-index: 11;
  opacity: 1;
}

.row {
  flex-direction: column;
}
</style>
