<template>
  <Fragment>
    <nav ref="article">
      <div>삼성 뭐시기뭐시기</div>
      <div class="option_cost">{{ "가격 :" + this.RealCost }}</div>
      <div @click.prevent="onSubmit()">장바구니</div>
    </nav>
    <main id="main" role="main">
      <section class="section_first">
        <div class="cardsection">card</div>
        <div class="option">
          <div class="option_cost">{{ "가격 :" + this.RealCost }}</div>
          <div class="option_cost_select">
            <div v-for="(value, index) in this.dummycost" :key="value.id">
              <div>
                {{ value.month }}
              </div>
              <div
                @click="onClickSubscribeCost(index, value.cost)"
                :class="activeIndex === index ? 'activeIndex' : ''"
              >
                {{ value.cost }}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section_second">
        <div
          class="section_second_product_slider swiper-container"
          ref="navSlider"
        >
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(v, i) in this.dummyProducts"
              :key="i"
            >
              <div class="swiper-slide-inner">
                <div>
                  <input
                    :class="v.check ? 'checked' : ''"
                    type="checkbox"
                    v-model="v.check"
                    @change="onClickProductCost(v.check, v.cost)"
                  />
                  {{ v.check }}
                </div>
                <div>{{ v.name }}</div>
                <div>{{ v.id }}</div>
                <div>{{ v.cost }}</div>
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
import _cloneDeep from "lodash/cloneDeep";
import "./HometrainingMain.scss";
import { dummyProduct } from "../config";

const dummy = [
  "베이직",
  "베이직",
  "베이직",
  "베이직",
  "프리미엄",
  "1:1트레이닝",
];

const dummycost = [
  {
    id: 1,
    month: 4,
    cost: 39000,
  },
  {
    id: 2,
    month: 8,
    cost: 78000,
  },
  {
    id: 3,
    month: 12,
    cost: 1170000,
  },
];

export default {
  created() {
    this.$nextTick(() => {
      this.nav_slider = new Swiper(this.$refs.navSlider, {
        direction: "horizontal",
        preventClicks: false,
        preventClicksPropagation: false,
        slideToClickedSlide: false,
        touchEventsTarget: "wrapper",
        slidesPerView: "auto",
      });
      this.$store.subscribe.cartLength = 1;
      // window.addEventListener("scroll", this.articleHide);
      window.localStorage.removeItem("subscribes");
      this.initSubscribeDB();
      this.initProductDB();
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.articleHide);
  },
  components: {
    Fragment,
  },
  data() {
    return {
      nav,
      dummy,
      dummycost,
      dummyProducts: _cloneDeep(dummyProduct),
      activeIndex: 0,
      subCost: 39000,
      productCost: 0,
      cost: 39000,
      nav_slider: null,
    };
  },
  computed: {
    RealCost() {
      return (this.cost = this.subCost + this.productCost);
    },
  },
  methods: {
    ...mapActions("subscribe", ["initSubscribeDB"]),
    ...mapActions("product", ["initProductDB"]),
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
      const Selectedproduct = this.dummyProducts.filter(
        (v) => v.check === true
      );
      console.log(Selectedproduct);
      this.$store.dispatch(
        "subscribe/createSubscribe",
        dummycost[this.activeIndex].cost
      );
      if (Selectedproduct) {
        Selectedproduct.forEach((v) => {
          this.$store.dispatch("product/createProductr", v.cost);
        });
      }
      return this.$router.push("/cart");
    },

    articleHide(e) {
      const nowHeight = window.scrollY + document.documentElement.clientHeight;
      const totalHeight = document.documentElement.scrollHeight;
      if (nowHeight >= totalHeight) {
        this.$refs.article.style.display = "none";
      } else {
        this.$refs.article.style.display = "block";
      }
    },
  },
};
</script>
