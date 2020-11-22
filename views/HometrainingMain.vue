<template>
  <main id="main" role="main">
    <section class="section_first">
      <div class="section_first_slider swiper-container" ref="firstSlider">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(v, i) in this.config" :key="i">
            <div class="swiper-slide-inner">
              <div
                class="icons"
                @click="onBookMark(i)"
                :class="bookMarkClass(i) ? 'on' : ''"
              >
                bookmark
              </div>
              <div class="timer">
                <TimerUp v-if="i === 1" :minute="i" :sec="i" />
                <TimerDown v-else :minute="3020" />
              </div>
              <div class="desc" @click="onToggleNav(i)">{{}}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section_scond">
      <div class="section_second_slider swiper-container" ref="secondSlider">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(v, i) in this.config" :key="i">
            <div class="swiper-slide-inner">
              <div class="timer"></div>
              <div class="desc">{{ v }}</div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div
        class="section_second_desc_slider swiper-container"
        ref="secondDescSlider"
      >
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(v, i) in this.config" :key="i">
            <div class="swiper-slide-inner">
              <div class="timer"></div>
              <div class="desc">{{ v }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      구독관리
      <div v-if="reeservationCount === '7'">
        {{ this.reeservationCount }}
      </div>
    </section>
  </main>
</template>

<style>
.card_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card {
  margin-top: 20px;
}

.on {
  color: #fff;
}
</style>
<script>
import TimerUp from "../components/TimerUp";
import TimerDown from "../components/TimerDown";
import Swiper from "swiper/bundle";
import "./HometrainingMain.scss";
import { mapState, mapGetters, mapActions } from "vuex";
import { subscribeSliderOptions } from "../config";
import { getReservationFromCookie } from "../utils/cookies";

const config = ["Samsung", "Samsung"];

export default {
  created() {
    this.reeservationCount = getReservationFromCookie();
    console.log(this.reeservationCount);
    this.$nextTick(() => {
      this.first_slider = new Swiper(
        this.$refs.firstSlider,
        subscribeSliderOptions[0].option
      );
      this.second_slider = new Swiper(
        this.$refs.secondSlider,
        subscribeSliderOptions[1].option
      );
      this.second_descSlider = new Swiper(
        this.$refs.secondDescSlider,
        subscribeSliderOptions[2].option
      );

      this.second_slider.controller.control = this.second_descSlider;
      this.second_descSlider.controller.control = this.second_slider;
    });

    this.initDB();
  },
  computed: {
    ...mapGetters("bookMark", ["bookMarkLoad"]),

    getState() {
      return (this.subscribeState = this.$store.state.bookMark.bookMarks);
    },
  },
  components: {
    TimerUp,
    TimerDown,
  },

  data() {
    return {
      config,
      reeservationCount: null,
      subscribeState: {},
      first_slider: null,
      second_slider: null,
      second_descSlider: null,
    };
  },

  methods: {
    ...mapActions("bookMark", ["initDB"]),
    onToggleNav(i) {
      this.$router.push(`main/${i}`);
    },

    bookMarkClass(i) {
      return this.getState.find((s) => s.title === i);
    },

    onBookMark(i) {
      console.log("click");
      this.$store.dispatch("bookMark/createBookMark", i);
    },
  },
};
</script>
