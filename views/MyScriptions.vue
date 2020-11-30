<template>
  <Fragment>
    <MypageNavigation />
    <main id="main" role="main" class="myscription_main">
      <section class="section_first">
        <div class="section_first_inner section_inner">
          <h3 class="sansbold">Subscriptions</h3>
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
      <section class="section_second padding_bottom">
        <div class="section_second_inner section_inner">
          <div class="conents_wrapper">
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
                  Subscribed to 8 classes per month per plan ·
                  <em>7classes available (2020.12.01~12.31)</em>
                </span>
                <span class="mobile">
                  Subscribed to 8 classes per month per plan
                  <br />
                  <em>7classes available (2020.12.01~12.31)</em>
                </span>
                <!-- <ul class="gauage">
                <li v-for="(v, i) in new Array(8)" :key="i" :class="i === 0 ? 'active' : ''"></li>
                </ul>-->
                <Gauge />
                <div class="route_btn">
                  <a href="javascript:;" class="bold">
                    Go ot my products
                    <i class="arrow"></i>
                  </a>
                </div>
              </div>
              <div class="button_wrapper">
                <div class="button_inner">
                  <a
                    href="javascript:;"
                    @click="$router.push('/subscription/info')"
                  >Manage Subscriptions</a>
                </div>
                <div class="button_inner">
                  <a href="javascript:;">Book class</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductSlider />
      <!-- <div @click="$router.push('/subscription/info')">info</div> -->
    </main>
    <div class="router_path_wrapper">
      <div class="router_path_inner">Home > Mypage > Subscriptions</div>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import Swiper from "swiper/bundle";

import "./MyScriptions.scss";
import ProductSlider from "../components/slider/ProductSlider";
import SubscribePage from "../components/layout/SubscribePage";
import MypageNavigation from "../components/layout/MypageNavigation";
import Gauge from "../components/layout/Gauge";

export default {
  components: {
    SubscribePage,
    Fragment,
    MypageNavigation,
    ProductSlider,
    Gauge,
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
