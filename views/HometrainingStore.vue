<template>
  <Fragment>
    <nav class="store_nav">
      <div class="nav_option_wrapper">
        <div class="option_title sansbold">Premium Membership, 1:8 Group Training Class Subscription</div>
        <div class="option_costs bold">{{ setRealCost() }}</div>
        <div class="option_arrow_btn mobile"></div>
        <div class="option_cart option_cart_top" @click.prevent="onSubmit()">
          <a href="javascript:;" class="bold">Add to cart</a>
        </div>
      </div>
      <div class="sub_nav">
        <ul class="clearfix">
          <li>Featured</li>
          <li>Specs</li>
          <li>Revies</li>
          <li>Support</li>
          <li>Compare</li>
          <li>Where to buy</li>
        </ul>
      </div>
    </nav>
    <main id="main" role="main" class="hometraining_main">
      <section class="section_first">
        <div class="first_section_inner section_inner clearfix">
          <div class="desc_wrapper">
            <div class="button_wrapper">
              <a class="link" href="javascript:;"></a>
              <a class="heart" href="javascript:;"></a>
            </div>
            <h4 class="sansbold">Samsung Home Fitness Service</h4>
            <p class="sansbold">Premium membership</p>
            <span class="product_id">DF10T9701BT7Q1</span>
            <div class="star_wrapper">
              <ul>
                <li v-for="(v, i) in new Array(5)" :key="i"></li>
              </ul>
              <span class="rate bold">4.5(12)</span>
            </div>
          </div>
          <div class="img_wrapper">
            <img
              class="mobile_img"
              src="../assets/hometraining/image_product_pd_premiummembership_mo.png"
            />
            <img
              class="web_img"
              src="../assets/hometraining/image_product_pd_premiummembership_pc.png"
            />
          </div>
          <div class="option_wrapper">
            <h3 class="bold">Option</h3>
            <div class="option_cost_select">
              <div
                :class="activeIndex === index ? 'activeIndex' : ''"
                class="option_cost_inner"
                v-for="(value, index) in this.dummycost"
                :key="value.id"
                @click="onClickSubscribeCost(index, value.cost)"
              >
                <div>{{ value.month + ' classes per month' }}</div>
                <div>{{ '$' + value.cost + '/ Auto monthly-Payment' }}</div>
              </div>
            </div>
          </div>
          <div class="payment-desc_wrapper clearfix">
            <h5 class="bold">Payment Confirmation</h5>
            <ul class="clearfix">
              <li>
                Based on the initial payment date, your card will be charged automatically every
                month.
              </li>
              <li>
                If you choose to terminate subscription, classes you've attended or the number of
                days
                <br />you've enrolled will be deducted. Refunds will be made to the original payment
                method.
              </li>
            </ul>
          </div>
          <div class="together-desc_wrapper clearfix">
            <h5 class="bold">Buy together to Save even more when you buy</h5>
            <span>Save even more when you buy together!</span>
          </div>
          <div class="slider_wrapper">
            <div class="section_second_product_slider swiper-container" ref="navSlider">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="swiper-slide-inner">
                    <div class="title web_title">
                      <h5 class="bold">Daily Juice 7Days</h5>
                    </div>
                    <div class="title mobile_title">
                      <h5 class="bold">
                        Daily Juice
                        <br />7Days
                      </h5>
                    </div>
                    <span class="bold">GRLTPK001</span>
                    <figure>
                      <img src="../assets/hometraining/image_product_juice.png" alt />
                    </figure>
                    <span class="bold now">$32.55</span>
                    <span class="sale">$35</span>
                  </div>
                </div>
                <div class="swiper-slide" @click="clickable" ref="checkedSwiper">
                  <div class="swiper-slide-inner">
                    <div class="title bold web_title">
                      <h5 class="bold">
                        The Sero Space White
                        <br />+ Galaxy Buds Live
                      </h5>
                    </div>
                    <div class="title mobile_title">
                      <h5 class="bold">The Sero Space White + Galaxy Buds Live</h5>
                    </div>
                    <span class="bold">KQ43LST05B-MS</span>
                    <figure>
                      <img src="../assets/hometraining/image_product_serowhite.png" alt />
                    </figure>
                    <div class="bold now">$1,782.16</div>
                    <span class="sale">$1,835.95</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-scrollbar"></div>
          </div>
          <div class="total_cost_wrapper clearfix">
            <div class="option_cost">
              {{ setRealCost() + '/ mo' }}
              <p class="mobile">$78.00 / Auto monthly-Payment</p>
              <div class="option_cart margin" @click.prevent="onSubmit()">
                <a href="javascript:;" class="bold">Add to cart</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section_second">
        <div class="section_second_inner section_inner">
          <h3 class="sansbold">Online Coaching</h3>
          <p>
            You can get live feedback from the best trainers as well as the
            <br />workout analysis through wearable device.
          </p>
          <span>* This product does not include wearable device.</span>
          <figure>
            <img src="../assets/hometraining/image_pd_1.png" alt />
          </figure>
        </div>
        <div class="section_second_inner section_inner">
          <h3 class="sansbold">Let's get fit together</h3>
          <p>
            You can virtually train with others who share similar fitness goals to boost your
            motivation.
            <br />It's a great way to keep each other motivated, socialize, and compete!
          </p>
          <span>*This service links your contacts with Samsung Account</span>
          <figure>
            <img src="../assets/hometraining/image_pd_2.png" alt />
          </figure>
        </div>
      </section>
    </main>
    <div>Home > Smart Home > Home Fitness >Basic Membership</div>
  </Fragment>
</template>

<style>
.cardsection {
  height: 200px;
}
</style>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import Swiper from "swiper/bundle";
import { Fragment } from "vue-fragment";
import "./Hometraining.scss";
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
        spaceBetween: 16,
        scrollbar: {
          el: ".swiper-scrollbar",
          draggable: true,
          snapOnRelease: true,
          dragSize: 171,
        },
        breakpoints: {
          768: {
            slidesPerView: "auto",
            spaceBetween: 24,
          },
        },
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
      this.$refs.checkedSwiper.classList.toggle("active");
      if (this.$refs.checkedSwiper.classList.contains("active")) {
        this.productCost = 1782.16;
      } else {
        this.productCost = 0;
      }
    },

    setRealCost() {
      return this.productCost === 0
        ? "$" + this.RealCost + ".00"
        : "$" + this.RealCost;
    },
  },
};
</script>
