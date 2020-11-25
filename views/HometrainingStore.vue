<template>
  <Fragment>
    <nav class="store_nav">
      <div class="option_title">Premium Membership, 1:8 Group Training Class Subscription</div>
      <div class="option_cost">{{ setRealCost() }}</div>
      <div class="option_cart" @click.prevent="onSubmit()">장바구니</div>
    </nav>
    <main id="main" role="main">
      <section class="section_first">
        <div class="cardsection">card</div>
        <div class="option">
          <div class="option_cost">{{ setRealCost() }}</div>
          <div class="option_cost_select">
            <div v-for="(value, index) in this.dummycost" :key="value.id">
              <div>{{ value.month }}</div>
              <div
                @click="onClickSubscribeCost(index, value.cost)"
                :class="activeIndex === index ? 'activeIndex' : ''"
              >{{ '$'+value.cost+'.00' }}</div>
            </div>
          </div>
        </div>
      </section>
      <section class="section_second">
        <div class="section_second_product_slider swiper-container" ref="navSlider">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(v, i) in this.dummyProduct" :key="i">
              <div class="swiper-slide-inner" v-if="i===1" @click="clickable" ref="checkedSwiper">
                <div>
                  <div>{{ v.name }}</div>
                  <div>{{ v.id }}</div>
                  <div>{{ v.cost }}</div>
                </div>
              </div>
              <div class="swiper-slide-inner" v-else>
                <div>
                  <div>{{ v.name }}</div>
                  <div>{{ v.id }}</div>
                  <div>{{ v.cost }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </Fragment>
</template>

<style>
.cardsection {
  height: 200px;
}

.activeIndex {
  color: aqua;
}

article {
  position: fixed;
  bottom: 0;
  z-index: 7;
}
.section_second_product_slider .swiper-slide {
  width: 500px;
}
</style>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import Swiper from "swiper/bundle";
import { Fragment } from "vue-fragment";
import "./HomeFit.scss";
import { dummycost, dummyProduct } from "../config";

const dummy = [
  "베이직",
  "베이직",
  "베이직",
  "베이직",
  "프리미엄",
  "1:1트레이닝",
];

export default {
  created() {
    this.$nextTick(() => {
      this.nav_slider = new Swiper(this.$refs.navSlider, {
        direction: "horizontal",
        touchStartPreventDefault: true,
        preventClicks: true,
        preventClicksPropagation: true,
        slideToClickedSlide: false,
        touchEventsTarget: "wrapper",
        slidesPerView: "auto",
      });
      // this.$store.subscribe.cartLength = 1;
    });
  },
  components: {
    Fragment,
  },
  data() {
    return {
      nav,
      dummy,
      dummycost,
      dummyProduct,
      activeIndex: 0,
      subCost: 39.0,
      productCost: 0,
      cost: 39.0,
      nav_slider: null,
    };
  },
  computed: {
    RealCost() {
      return (this.cost = this.subCost + this.productCost);
    },
  },

  methods: {
    onClickSubscribeCost(i, value) {
      this.activeIndex = i;
      this.subCost = value;
    },

    onClickProductCost(check, value) {
      if (check) {
        this.productCost += value;
        this.$store.subscribe.cartLength += 1;
      } else {
        this.productCost -= value;
        this.$store.subscribe.cartLength -= 1;
      }
    },

    onSubmit() {
      return this.$router.push("/cart");
    },
    clickable(i) {
      this.$refs.checkedSwiper[0].classList.add("redline");
      this.productCost = 1782.16;
    },

    setRealCost() {
      return this.productCost === 0
        ? "$" + this.RealCost + ".00"
        : "$" + this.RealCost;
    },
  },
};
</script>
<style lang="scss">
.store_nav {
  position: sticky;
  top: 0;
  margin: 0 auto;
  padding: 0 24px;
  max-width: 1440px;
  display: flex;
}
.option_title {
  margin-right: auto;
}

.section_second_product_slider .swiper-slide {
  width: 400px;
}

.redline {
  border: 1px solid red;
}

.section_second_product_slider {
  width: 600px;
  margin: 0 auto;
}
</style>