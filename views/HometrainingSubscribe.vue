<template>
  <Fragment>
    <nav>
      <ul>
        <li
          v-for="(value, i) in this.dummy"
          :key="i"
          @click="onToggleSection(i)"
        >
          {{ value }}
        </li>
      </ul>
    </nav>
    <main id="main" class="subscribe_main" role="main">
      <section class="section_first on">
        <SubscribePage />
      </section>
      <section class="section_second">
        <SubscribePage />
      </section>
      <section class="section_third">
        <SubscribePage />
      </section>
    </main>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import Swiper from "swiper/bundle";
import "./HometrainingMain.scss";
import SubscribePage from "../components/layout/SubscribePage";

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
    this.$nextTick(() => {});
  },
  components: {
    SubscribePage,
    Fragment,
  },
  data() {
    return {
      date,
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
