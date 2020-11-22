<template>
  <main id="main" class="subscribe_main" role="main">
    <section class="section_first on">
      <div>결제 내역 확인</div>
    </section>
  </main>
</template>

<script>
import { Fragment } from "vue-fragment";
import Swiper from "swiper/bundle";
import "./HometrainingMain.scss";
import SubscribePage from "../components/layout/SubscribePage";

const configs = ["Samsung", "hyu"];

const dummy = ["1", "2", "3"];
export default {
  created() {
    this.$nextTick(() => {});
  },
  components: {
    SubscribePage,
    Fragment,
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
