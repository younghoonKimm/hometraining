<template>
  <Fragment>
    <MypageNavigation />
    <main id="main" role="main" class="myscription_main">
      <section class="section_first">
        <div class="section_first_inner section_inner">
          <h3>Subscriptions</h3>
          <span>Would you like to start a new contract?</span>
          <div class="button_circle">
            <a href="jacascript;">New contract</a>
          </div>
          <div class="button_wrapper">
            <button type="button">Active</button>
            <button type="button">Archived</button>
          </div>
        </div>
      </section>
      <section class="section_second">
        <div class="section_second_inner section_inner">
          <div class="first_contents first date_wrapper">
            <span class="date web_img">
              Started Oct 1,2020
              <em class="line">|</em> Renews Dec 1,2020
            </span>
            <span class="date mobile_img">
              Started Oct 1,2020
              <br />Renews Dec 1,2020
            </span>
          </div>
          <div class="second_contents clearfix">
            <div class="img_wrapper">
              <img
                class="web_img"
                src="../assets/mypage/premium_membership_subscriptions_164.png"
                alt="card"
              />
              <img
                class="mobile_img"
                src="../assets/mypage/premium_membership_subscriptions_240.png"
                alt="card"
              />
            </div>
            <div class="desc_wrapper">
              <h4 class="bold">Digital Subscribe</h4>
              <p class="bold web_img">Samsung HomeFit Service</p>
              <p class="bold mobile_img">
                Samsung
                <br />HomeFit Service
              </p>
              <span class="bold">Premium Membership</span>
              <span>$78</span>
              <span class="bold web">
                Subscribed to 8 classes per month per plan
                ·
                <em>7classes available (2020.12.01~12.31)</em>
              </span>
              <span class="mobile">
                Subscribed to 8 classes per month per plan
                <br />
                <em>7classes available (2020.12.01~12.31)</em>
              </span>
              <ul class="gauage">
                <li v-for="(v,i) in this.gauge" :key="i" :class="i===0 ? 'active':''"></li>
              </ul>
              <div class="route_btn">
                <a href="javascript:;" class="bold">
                  Go ot my products
                  <i class="arrow"></i>
                </a>
              </div>
            </div>
            <div class="button_wrapper">
              <div class="button_inner">
                <a href="javascript:;">Manage Subscriptions</a>
              </div>
              <div class="button_inner">
                <a href="javascript:;">Book class</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- <div @click="$router.push('/subscription/info')">info</div> -->
      <section class="section_third">
        <div class="section_third_inner section_inner">
          <div class="slider_wrapper">
            <div class="mypage_slider swiper-container" ref="slide">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <!-- <img src="../assets/mypage/image_product_watchactive_2.png" /> -->
                  <div class="swiper-slide-inner">
                    <h4 class="bold">
                      The Sero Navy Blue
                      <br />+ The Sero wheel
                    </h4>
                    <figure>
                      <img src="../assets/mypage/image_product_thesero_wheel.png" />
                    </figure>
                    <div class="slide_desc">
                      <p class="bold cost">$1,300.00</p>
                      <p>
                        <span class="line">$79,999.00</span>
                        <span class="bold">save $10,000.00</span>
                      </p>
                      <a class="bold" href="javascript:;">Add to cart</a>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="swiper-slide-inner">2</div>
                </div>
                <div class="swiper-slide">
                  <div class="swiper-slide-inner">3</div>
                </div>
                <div class="swiper-slide mobile_img">
                  <div class="swiper-slide-inner">4</div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-pagination_wrapper">
            <div class="swiper-pagination"></div>
            <div>정지</div>
          </div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </section>
    </main>
    <div>Home > Mypage > Subscriptions</div>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import Swiper from "swiper/bundle";

import "./MyScriptions.scss";
import SubscribePage from "../components/layout/SubscribePage";
import MypageNavigation from "../components/layout/MypageNavigation";

const gauge = [1, 2, 3, 4, 5, 6, 7];

export default {
  created() {
    this.$nextTick(() => {
      this.mypageSlider = new Swiper(this.$refs.slide, {
        loop: false,
        preventClicks: true,
        preventClicksPropagation: true,
        slideToClickedSlide: true,
        direction: "vertical",
        spaceBetween: 24,
        slidesPerView: "auto",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return `<div class=${className}></div>`;
          },
        },
        breakpoints: {
          768: {
            direction: "horizontal",
            slidesPerView: 3,
          },
        },
        // allowSlideNext: false,
        // allowSlidePrev: false,
      });
    });
  },
  components: {
    SubscribePage,
    Fragment,
    MypageNavigation,
  },
  data() {
    return {
      mypageSlider: null,
      gauge,
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
  z-index: 4;
  opacity: 1;
}

.row {
  flex-direction: column;
}
</style>
