<template>
  <Fragment>
    <MypageNavigation />
    <main id="main" role="main" class="myscription_main">
      <section class="section_first">
        <div class="section_first_inner section_inner">
          <h3>Manage Subscription</h3>
        </div>
      </section>
      <section class="section_second">
        <div class="section_second_inner section_inner_info section_inner">
          <div class="first_contents first date_wrapper">
            <span class="date web_img">
              Subscription ID : DF10T9701BT7Q1
              <em class="line">|</em> Subscription Started Oct 1 , 2020
            </span>
            <span class="date mobile_img">
              Subscription ID : DF10T9701BT7Q1
              <br />Subscription Started Oct 1 , 2020
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
            <div class="desc_wrapper clearfix">
              <h4 class="bold">Digital Subscribe</h4>
              <p class="bold web_img">Samsung HomeFit Service</p>
              <p class="bold mobile_img">
                Samsung
                <br />HomeFit Service
              </p>
              <span class="padding-bottom bold">Premium Membership</span>
              <span class="padding bold">Confirm order</span>
              <span>Enrolled date Subscription started on : 2020.10.01</span>
              <span>prchased date Monthly payment : On the first of every month</span>
              <span class="web">You've been a member since : ~2020.10.31 00:00:00</span>
              <span class="mobile">
                You've been a member since : ~2020.10.31
                <br />00:00:00
              </span>
              <span>Amount Paid : $ 78</span>
              <span class="web"
                >Payment Method : Your credit card will be charged on the first of every month.
                (VISA ****)</span
              >
              <span class="mobile">
                Payment Method : Your credit card will be
                <br />charged on the first of every month. (VISA ****)
              </span>
            </div>
            <div class="button_wrapper cancelbutton">
              <a class="bold" href="javascript:;">Cancel subscription</a>
            </div>
            <div class="update_btn">
              <a class="bold" href="javascript:;">
                Update payment details
                <i></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
    <div>Home > Mypage > Subscriptions > Manage Subscription</div>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';
import Swiper from 'swiper/bundle';

import SubscribePage from '../components/layout/SubscribePage';
import MypageNavigation from '../components/layout/MypageNavigation';
import './MyScriptions.scss';

export default {
  created() {
    this.$nextTick(() => {
      this.mypageSlider = new Swiper(this.$refs.slide, {
        loop: false,
        preventClicks: true,
        preventClicksPropagation: true,
        slideToClickedSlide: true,
        direction: 'vertical',
        spaceBetween: 24,
        slidesPerView: 'auto',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function(index, className) {
            return `<div class=${className}></div>`;
          },
        },
        breakpoints: {
          768: {
            direction: 'horizontal',
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
    };
  },

  methods: {
    onToggleSection(i) {
      const sectionAll = document.querySelectorAll('section');
      sectionAll.forEach((v, index) => {
        v.classList.remove('on');
        if (index === i) {
          v.classList.add('on');
        }
      });
    },
  },
};
</script>
