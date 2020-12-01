<template>
  <main id="main" class="homefitness_main" role="main">
    <!-- <section class="section_first">
      Img
    </section>-->
    <section class="section_first">
      <div class="section_inner">
        <div class="homefit_main_desc_wrapper">
          <h2 class="web sansbold">
            Experience
            <br />the best Samsung Homefit
          </h2>
          <h2 class="mobile sansbold">
            Experience
            <br />the best <br />Samsung Homefit
          </h2>
          <p>
            Experience the best online workout programs
            <br />with the corps Personal Trainers from Shilla Hotel
          </p>
          <button type="button">Go to Samsung HomeFit</button>
        </div>
        <figure>
          <img class="web_img" src="../assets/main/kv_image_2.png" />
          <img class="mobile_img" src="../assets/main/kv_image_2_mo.png" />
        </figure>
      </div>
    </section>
    <section class="section_second">
      <div class="section_inner">
        <div class="swiper-pagination_wrapper">
          <ul class="swiper-pagination">
            <li v-for="(v, i) in this.nav" :key="i" @click="clickToSlide(i)" ref="bullet">
              {{ v }}
            </li>
          </ul>
        </div>
        <div class="section_secnond_slider page_slider swiper-container" ref="navSlider">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="swiper-slide-inner">
                <div class="top">
                  <div class="page_slider-desc">
                    <p>Tired of exercising alone? Join Us Now</p>
                    <h4 class="web sansbold">Basic Membership</h4>
                    <h4 class="mobile sansbold">
                      Basic
                      <br />Membership
                    </h4>
                    <p class="web">
                      Experience diverse, fun filled Live+ Group classes with Basic Membership
                    </p>
                    <p class="mobile">
                      Experience diverse, fun filled Live+ Group classes
                      <br />with Basic Membership
                    </p>
                  </div>
                  <figure>
                    <img class="web" src="../assets/homefit/image_csp_basic.png" alt="homefit" />
                    <img
                      class="mobile"
                      src="../assets/homefit/image_csp_basic_mo.png"
                      alt="homefit"
                    />
                  </figure>
                  <div class="page_slider-desc-sub">
                    <h4 class="web sansbold">
                      Stay safe at home and
                      <br />get the most out of your workout plan
                    </h4>
                    <h4 class="mobile sansbold">
                      Stay safe at home
                      <br />and get the most out of <br />your workout plan
                    </h4>
                    <p>
                      With Premium at-home workout Membership program,
                      <br />you can do both Live+ and 1:8 group classes.
                    </p>
                  </div>
                  <div class="button_wrapper">
                    <button class="learn_more" type="button">Learn more</button>
                    <button>Checkout class schedules</button>
                  </div>
                </div>
                <div class="bottom">
                  <div class="left">
                    <figure>
                      <img src="../assets/card/image_csp_membership_basic.png" alt="basiccard" />
                    </figure>
                  </div>
                  <div class="right">
                    <h5 class="web sansbold">
                      Samsung HomeFit
                      <br />Basic Membership
                    </h5>
                    <h5 class="mobile sansbold">
                      Samsung HomeFit Basic
                      <br />Membership
                    </h5>
                    <p class="price">
                      Price from
                      <em class="sansbold">$19</em>
                      per month
                    </p>
                    <ul class="cleafix">
                      <li>
                        Based on the initial payment date, your card will be charged automatically
                        every month.
                      </li>
                      <li>
                        If you choose to terminate subscription, classes you've attended or the
                        number of days
                        <br />you've enrolled will be deducted. <br />Refunds will be made to the
                        original payment method.
                      </li>
                    </ul>
                    <button>Learn more</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="swiper-slide-inner">
                <div class="top">
                  <div class="page_slider-desc">
                    <p>Tired of exercising alone? Join Us Now</p>
                    <h4 class="web sansbold">Premium Membership</h4>
                    <h4 class="mobile sansbold">
                      Premium
                      <br />Membership
                    </h4>
                    <p class="web">
                      With Premium Membership, indulge in 1 to 8 ratio small group classes
                    </p>
                    <p class="mobile">
                      With Premium Membership,
                      <br />indulge in 1 to 8 ratio small group classes
                    </p>
                  </div>
                  <figure>
                    <img class="web" src="../assets/homefit/image_csp_premium.png" alt="homefit" />
                    <img
                      class="mobile"
                      src="../assets/homefit/image_csp_premium_mo.png"
                      alt="homefit"
                    />
                  </figure>
                  <div class="page_slider-desc-sub">
                    <h4 class="web sansbold">Enjoy both Live+ and 1:8 Group Classes</h4>
                    <h4 class="mobile sansbold">
                      Enjoy both Live+ and
                      <br />1:8 Group Classes
                    </h4>
                    <p>
                      With Premium at-home workout Membership program,
                      <br />you can do both Live+ and 1:8 group classes.
                    </p>
                  </div>
                  <div class="button_wrapper">
                    <button class="learn_more" type="button">Learn more</button>
                    <button>Checkout class schedules</button>
                  </div>
                </div>
                <div class="bottom">
                  <div class="left">
                    <figure>
                      <img
                        class="web"
                        src="../assets/card/image_csp_membership_premium.png"
                        alt="basiccard"
                      />
                      <img
                        class="mobile"
                        src="../assets/card/image_csp_membership_premium_mo.png"
                        alt="basiccard"
                      />
                    </figure>
                  </div>
                  <div class="right">
                    <h5 class="sansbold">
                      Samsung HomeFit
                      <br />Premium Membership
                    </h5>
                    <p class="price">
                      Price from
                      <em class="sansbold">$39</em>
                      per month
                    </p>
                    <ul class="cleafix">
                      <li>
                        Based on the initial payment date, your card will be charged automatically
                        every month.
                      </li>
                      <li>
                        If you choose to terminate subscription, classes you've attended or the
                        number of days
                        <br />you've enrolled will be deducted. <br />Refunds will be made to the
                        original payment method.
                      </li>
                    </ul>
                    <button>Learn more</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="swiper-slide-inner">
                <div class="top">
                  <div class="page_slider-desc">
                    <p>Tired of exercising alone? Join Us Now</p>
                    <h4 class="web sansbold">1:1 Training Membership</h4>
                    <h4 class="mobile sansbold">
                      1:1 Training
                      <br />Membership
                    </h4>
                    <p class="web">
                      Train with motivating fitness coaches to make the best out of your sessions
                    </p>
                    <p class="mobile">
                      Train with motivating fitness coaches
                      <br />to make the best out of your sessions
                    </p>
                  </div>
                  <figure>
                    <img class="web" src="../assets/homefit/image_csp_1_to_1.png" alt="homefit" />
                    <img
                      class="mobile"
                      src="../assets/homefit/image_csp_1_to_1_mo.png"
                      alt="homefit"
                    />
                  </figure>
                  <div class="page_slider-desc-sub">
                    <h4 class="web sansbold">Get personalized training exprience</h4>
                    <h4 class="mobile sansbold">
                      Get personalized
                      <br />training exprience
                    </h4>
                    <p class="web">
                      From Shilla Hotel's top rated trainers,
                      <br />you don’t want to miss a personalized workout experience our all of
                      tailored to you.
                    </p>
                    <p class="mobile">
                      From Shilla Hotel's top rated trainers,
                      <br />you don’t want to miss a personalized workout experience <br />our all
                      of tailored to you.
                    </p>
                  </div>
                  <div class="button_wrapper">
                    <button class="learn_more" type="button">Learn more</button>
                    <button>Checkout class schedules</button>
                  </div>
                </div>
                <div class="bottom">
                  <div class="left">
                    <figure>
                      <img
                        class="web"
                        src="../assets/card/image_csp_membership_1_to_1.png"
                        alt="basiccard"
                      />
                      <img
                        class="mobile"
                        src="../assets/card/image_csp_membership_1_to_1_mo.png"
                        alt="basiccard"
                      />
                    </figure>
                  </div>
                  <div class="right">
                    <h5 class="sansbold">
                      Samsung HomeFit
                      <br />1:1 Training Membership
                    </h5>
                    <p class="price">
                      Price from
                      <em class="sansbold">$180</em>
                      per month
                    </p>
                    <ul class="cleafix">
                      <li>
                        Based on the initial payment date, your card will be charged automatically
                        every month.
                      </li>
                      <li>
                        If you choose to terminate subscription, classes you've attended or the
                        number of days
                        <br />you've enrolled will be deducted. <br />Refunds will be made to the
                        original payment method.
                      </li>
                    </ul>
                    <button>Learn more</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="section_third section_inner">
        <div class="main-form_wrapper">
          <div class="main-form">
            <input type="search" />
            <i></i>
          </div>
        </div>
        <div class="bubble_wrapper">
          <div class="bubble_inner">
            <div class="bubble">Home Training</div>
            <div class="bubble">Personal Training</div>
            <div class="bubble">wieght</div>
            <div class="bubble">GX</div>
            <div class="bubble">Galaxy Buds Live</div>
            <div class="bubble">Galaxy Note20</div>
            <div class="bubble">Work out</div>
          </div>
        </div>
      </section>
      <div class="router_path_wrapper">
        <div class="router_path_inner">
          <span>Home</span>
          <span>Smart Home</span>
          <span>Home Fitness</span>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Swiper from 'swiper/bundle';

import WeekCalender from '../components/WeekCalender';
import './CommunityMain.scss';

const nav = ['Basic', 'Premium', '1:1 Training'];

export default {
  created() {
    this.$nextTick(() => {
      this.pageSlider = new Swiper(this.$refs.navSlider, {
        direction: 'horizontal',
        // preventClicks: false,
        // preventClicksPropagation: false,
        // slideToClickedSlide: true,
        // stopOnLastSlide: true,
        touchEventsTarget: 'wrapper',
        resistanceRatio: 0,
      });
      this.defaultSlide();
      this.sliderFontColorChange();
    });
  },
  components: {
    WeekCalender,
  },
  data() {
    return {
      nav,
      pageSlider: null,
      third_Slider: null,
    };
  },

  methods: {
    onToggleNav(i) {
      this.$router.push(`about/${i}`);
    },

    clickToSlide(i) {
      this.pageSlider.slideTo(i, false, false);
      this.$refs.bullet.forEach((v, index) => {
        if (i === index) {
          v.classList.add('active');
        } else {
          v.classList.remove('active');
        }
      });
    },

    setActiveBullet(i) {
      this.$refs.bullet.forEach((v, index) => {
        if (i === index) {
          v.classList.add('active');
        } else {
          v.classList.remove('active');
        }
      });
    },

    clickToSlide(i) {
      this.pageSlider.slideTo(i, false, false);
      this.setActiveBullet(i);
    },

    sliderFontColorChange() {
      this.pageSlider.on('slideChangeTransitionStart', () => {
        const index = this.pageSlider.realIndex;
        this.setActiveBullet(index);
      });
    },

    defaultSlide() {
      this.clickToSlide(0);
    },
  },
};
</script>

<style lang="scss">
@import 'scss/mixins.scss';

.homefitness_main {
  .section_inner {
    figure {
      width: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .homefit_main_desc_wrapper {
    position: absolute;
    color: #fff;
    top: 50%;
    left: 88px;
    transform: translatey(-50%);
    h2 {
      font-size: 48px;
      line-height: 1.22;
    }
    p {
      margin-top: 20px;
      font-size: 18px;
      line-height: 1.5;
    }
    button {
      margin-top: 87px;
      background: #fff;
      padding: 10px 24px;
      border-radius: 20px;
      font-weight: bold;
    }
  }
  .swiper-pagination_wrapper {
    position: absolute;
    top: 34px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
  }
  .swiper-pagination {
    position: relative;
    display: flex;
    width: auto;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    li {
      position: relative;
      margin-right: 32px;
      font-size: 18px;
      font-weight: bold;
      &:last-child {
        margin-right: 0;
      }
      &.active {
        &:after {
          @include afterLine;
          background: #000;
          bottom: -1px;
          height: 2px;
        }
      }
    }
  }
  .page_slider {
    .swiper-slide {
      &:nth-child(2) {
        .top {
          background-image: url('../assets/homefit/image_csp_premium_bg.png');
        }
      }
      &:nth-child(3) {
        .top {
          background-image: url('../assets/homefit/image_csp_1_to_1_bg.png');
        }
      }
    }
  }
  .page_slider {
    .top {
      position: relative;
      width: 100%;
      padding-bottom: 43px;
      background-image: url('../assets/homefit/image_csp_basic_bg.png');
      background-size: cover;
      background-position: top;
      figure {
        width: 100%;
        margin-top: 28px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 113px 45px 112px 142px;

      background: #f7f7f7;
      .left {
        max-width: 440px;

        figure {
          display: flex;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .right {
        max-width: 730px;
        width: 100%;

        h5 {
          font-size: 48px;
          line-height: 1.22;
        }
        .price {
          margin-top: 52px;
          font-size: 24px;
        }
        ul {
          margin-top: 28px;
          float: left;
        }
        li {
          background-image: url('../assets/icons/icon_bold_information_bullet.png');
          background-repeat: no-repeat;
          background-position: left 7px;
          background-size: 12px;
          padding-left: 14px;
          font-size: 18px;
          text-indent: 1px;
        }
        button {
          float: left;
          display: block;
          margin-top: 33px;
          font-size: 14px;
          padding: 10px 24px;
          background: #000;
          color: #fff;
          border-radius: 20px;
          font-weight: 700;
        }
      }
    }
  }

  .page_slider-desc {
    padding-top: 170px;
    text-align: center;
    p {
      font-size: 18px;
    }
    h4 {
      margin: 22px 0 6px;
      font-size: 38px;
      line-height: 1.22;
    }
  }
  .page_slider-desc-sub {
    margin-top: 28px;
    text-align: center;
    h4 {
      font-size: 48px;
      line-height: 1.22;
    }
    p {
      margin-top: 18px;
      font-size: 18px;
    }
  }

  .button_wrapper {
    @include button_wrapper;
    margin-top: 24px;
    button {
      font-size: 14px;
      font-weight: 700;
    }
  }
  .section_third {
    padding-bottom: 48px;
  }
  .main-form_wrapper {
    margin: 48px 0 0;
    .main-form {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;
      padding: 12px 24px;
      width: calc(50% - 48px);
      background: #f7f7f7;
      border-radius: 24px;
      input {
        width: calc(100% - 80px);
        border: 0;
        background: #f7f7f7;
      }
      i {
        display: block;
        width: 16px;
        height: 16px;
        background-image: url('../assets/icons//icon_bold_action_search.png');
        background-size: cover;
      }
    }
  }
  .bubble_wrapper {
    margin-top: 24px;

    .bubble_inner {
      margin: 0 auto;
      padding: 0 56px;
      width: 600px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .bubble {
      cursor: pointer;
      font-size: 12px;
      margin: 0 4px 4px 4px;
      padding: 5px 16px;
      border: 2px solid rgba(0, 0, 0, 0.15);
      border-radius: 16px;
      &:nth-child(1) {
        margin: 0 4px 4px 0;
      }
    }
  }
}

@include B768-1440 {
  .homefitness_main {
    .homefit_main_desc_wrapper {
      left: 6.1111vw;

      h2 {
        font-size: 3.3333vw;
      }
      p {
        margin-top: 1.3889vw;
        font-size: 1.25vw;
      }
      button {
        margin-top: 6.0417vw;
        padding: 10px 1.6667vw;
        font-size: 0.9722vw;
        font-weight: bold;
      }
    }
    .swiper-pagination {
      li {
        position: relative;
        margin-right: 2.2222vw;
        font-size: 1.25vw;
      }
    }
    .page_slider-desc {
      padding-top: 11.8056vw;
      text-align: center;
      p {
        font-size: 1.25vw;
      }
      h4 {
        margin: 1.5278vw 0 0.4167vw;
        font-size: 2.6389vw;
      }
    }
    .page_slider-desc-sub {
      margin-top: 3.3333vw;
      h4 {
        font-size: 3.3333vw;
        line-height: 1.22;
      }
      p {
        margin-top: 1.25vw;
        font-size: 1.25vw;
      }
    }
    .button_wrapper {
      @include button_wrapper;
      margin-top: 1.6667vw;
      button {
        font-size: 0.9722vw;
      }
    }
    .page_slider {
      .top {
        figure {
          width: 100%;
          margin-top: 1.9444vw;
        }
      }
      .bottom {
        padding: 7.8472vw 3.125vw 7.7778vw 9.8611vw;
        .left {
          max-width: 30.5556vw;
        }
        .right {
          max-width: 50.6944vw;
          h5 {
            font-size: 3.3333vw;
          }
          .price {
            margin-top: 3.6111vw;
            font-size: 1.6667vw;
          }
          ul {
            margin-top: 3.6111vw;
          }
          li {
            background-image: url('../assets/icons/icon_bold_information_bullet.png');
            background-repeat: no-repeat;
            background-position: left 0.4861vw;
            background-size: 0.8333vw;
            padding-left: 0.9722vw;
            font-size: 1.25vw;
            text-indent: 1px;
          }
          button {
            margin-top: 2.2917vw;
            font-size: 0.9722vw;
            padding: 0.6944vw 1.6667vw;
            background: #000;
            color: #fff;
            border-radius: 1.3889vw;
            font-weight: 700;
          }
        }
      }
    }
    .section_third {
      padding-bottom: 3.3333vw;
    }

    .bubble_wrapper {
      margin-top: 1.6667vw;
      .bubble {
        cursor: pointer;
        font-size: 0.7722222vw;
        margin: 0 4px 4px 4px;
        padding: 5px 16px;
        &:nth-child(1) {
          margin: 0 4px 4px 0;
        }
      }
    }
  }
}

@include B767 {
  .homefitness_main {
    .homefit_main_desc_wrapper {
      width: 100%;
      top: 11.1111vw;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      h2 {
        font-size: 8.3333vw;
        line-height: 1.35;
      }
      p {
        margin-top: 4.44444vw;
        font-size: 3.3333333vw;
      }
      button {
        margin-top: 60vw;
        padding: 10px 6.6667vw;
        border-radius: 6.6667vw;
      }
    }
    .swiper-pagination_wrapper {
      top: 9.4444vw;
    }
    .swiper-pagination {
      width: 100%;
      li {
        position: relative;
        margin-right: 8.8889vw;
        font-size: 3.8889vw;
        width: 100%;
        &:last-child {
          margin-right: 0;
          white-space: nowrap;
        }
        &.active {
          font-weight: bold;
          &:after {
            @include afterLine;
            background: #000;
            bottom: -1px;
            height: 2px;
          }
        }
      }
    }
    .page_slider-desc {
      padding-top: 26.6667vw;
      p {
        font-size: 3.3333vw;
      }
      h4 {
        margin: 4.4444vw 0 4.4444vw;
        line-height: 1.22;
        font-size: 8.3333vw;
      }
    }
    .page_slider-desc-sub {
      margin-top: 6.6667vw;
      h4 {
        font-size: 7.2222vw;
        line-height: 1.4;
      }
      p {
        margin-top: 4.4444vw;
        font-size: 3.3333vw;
        line-height: 1.3;
      }
    }
    .button_wrapper {
      flex-direction: column-reverse;
      margin-top: 6.6667vw;
      button {
        font-size: 3.8889vw;
        &:first-child {
          margin-top: 5vw;
        }
        &:last-child {
          margin-left: 0;
          padding: 10px 6.6667vw;
        }
      }
    }
    .page_slider {
      .top {
        figure {
          width: 100%;
          margin-top: 6.6667vw;
        }
      }
      .bottom {
        flex-wrap: wrap;
        padding: 20.8333vw 24px 8.8889vw;
        .left {
          max-width: unset;
          width: 100%;
        }
        .right {
          max-width: unset;
          width: 100%;
          margin-top: 13.8889vw;
          text-align: center;
          h5 {
            font-size: 6.1111vw;
          }
          .price {
            margin-top: 3.6111vw;
            font-size: 3.8889vw;
            em {
              font-size: 7.7778vw;
            }
          }
          ul {
            margin-top: 4.44444vw;
          }
          li {
            text-align: left;
            width: 83.3333vw;
            background-position: left 1.3889vw;
            background-size: 2.7778vw;
            padding-left: 3.8889vw;
            font-size: 3.8889vw;
            text-indent: 1px;
          }
          button {
            margin-top: 6.6667vw;
            display: inline-block;
            float: none;
            font-size: 3.8889vw;
            padding: 10px 6.6667vw;
            border-radius: 5.5556vw;
          }
        }
      }
    }
    .section_third {
      padding-bottom: 11.1111vw;
    }
    .main-form_wrapper {
      margin: 8.8889vw 0 0;
      padding: 0 24px;
      .main-form {
        padding: 3.0556vw 6.6667vw;
        width: 100%;
        background: #f7f7f7;
        border-radius: 24px;
        input {
          font-size: 12px;
          width: 100%;
          border: 0;
          background: #f7f7f7;
        }
      }
    }
    .bubble_wrapper {
      margin-top: 6.6667vw;

      .bubble_inner {
        margin: 0 auto;
        padding: 0 24px;
        width: auto;
      }
      .bubble {
        cursor: pointer;
        font-size: 2.7778vw;
        margin: 0 1.1111vw 1.1111vw 1.1111vw;
        padding: 5px 16px;
        border-radius: 4.4444vw;
        &:nth-child(1) {
          margin: 0 1.1111vw 1.1111vw 1.1111vw;
        }
      }
    }
  }
}
</style>
