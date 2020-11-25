<template>
  <Fragment>
    <!-- <MypageNavigation /> -->
    <main id="main" role="main">
      <section class="section_first on">
        <div>
          my page
          <div @click="$router.push('/store')">store</div>
        </div>
      </section>
      <section class="section_second"></section>
      <section class="section_third"></section>
      <div>Home > Mypage</div>
    </main>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import Swiper from "swiper/bundle";
import "./Mypage.scss";
import SubscribePage from "../components/layout/SubscribePage";
import MypageNavigation from "../components/layout/MypageNavigation";

const configs = ["Samsung", "hyu"];

const dummy = ["1", "2", "3"];
export default {
  created() {
    this.$nextTick(() => {});
  },
  components: {
    SubscribePage,
    Fragment,
    MypageNavigation,
  },
  data() {
    return {
      dummy,
      configs,
      first_slider: null,
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
  z-index: 11;
  opacity: 1;
}

.row {
  flex-direction: column;
}
</style>
