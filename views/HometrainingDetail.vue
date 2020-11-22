<template>
  <main id="main" role="main">
    <section class="section_first">
      {{ this.$route.params.id }}
      {{ this.subscribeState }}
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
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import { subscribeSliderOptions } from "../config";

const config = ["Samsung", "hyu"];

export default {
  watch: {
    $route() {
      //   this.id = this.$route.params.id;
    },
  },

  created() {},
  components: {},
  data() {
    return {
      id: null,
      subscribeState: config[this.$route.params.id],
      first_slider: null,
      second_slider: null,
      second_descSlider: null,
    };
  },

  methods: {
    ...mapActions("subscribe", ["initSubscribeDB"]),
    onToggleNav(i) {
      this.$router.push(`main/${i}`);
    },

    bookMarkClass(i) {
      return this.getState.find((s) => s.title === i);
    },

    onBookMark(i) {
      console.log("click");
      this.$store.dispatch("subscribe/createSubscribe", i);
    },
  },
};
</script>
