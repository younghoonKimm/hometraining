<template>
  <main id="main" role="main">
    <MainSlider />
    <section class="main-section_inner section_inner">
      <div class="title_wrapper">
        <h3 class="title">Mobile</h3>
      </div>
      <div class="third-section-gallery">
        <ul class="third-section-nav">
          <li class="active">Galaxy Z Flip</li>
          <li>Galaxy S20 | S20+</li>
          <li>Galaxy Buds+</li>
          <li>Galaxy Note10+ 5G</li>
          <li>Galaxy S10</li>
        </ul>
        <div class="center_img">
          <img src="../assets/main/image_mobile.png" alt="mobile" />
        </div>
        <div class="desc">
          <h4>Do it all. All at once</h4>
        </div>
        <div class="button_wrapper">
          <button type="button">Meet Galaxy Z Flip</button>
          <button type="button">Pre-order now</button>
        </div>
      </div>
    </section>
    <section class="main-section_inner section_inner">
      <div class="title_wrapper">
        <h3 class="title">TV & AV</h3>
      </div>
      <div class="third-section-gallery">
        <ul class="third-section-nav">
          <li class="active">Galaxy Z Flip</li>
          <li>QLED 8K</li>
          <li>QLED</li>
          <li>The Serif</li>
          <li>The Frame</li>
          <li>Big Screen TVs</li>
        </ul>
        <div class="center_img">
          <img src="../assets/main/image_tv_audio.png" alt="mobile" />
        </div>
        <div class="desc">
          <h4>All New QLED 8K</h4>
        </div>
        <div class="button_wrapper">
          <button type="button">See all TV & Audio</button>
          <button type="button">Learn more</button>
        </div>
      </div>
    </section>
    <section class="main-section_inner section_inner">
      <div class="title_wrapper">
        <h3 class="title">Appliances</h3>
      </div>
      <div class="third-section-gallery">
        <ul class="third-section-nav">
          <li class="active">QuickDrive™</li>
          <li>Family Hub™</li>
          <li>AirDresser</li>
          <li>SmartThings</li>
          <li>Built-In Kitchen Appliances</li>
        </ul>
        <div class="center_img">
          <img src="../assets/main/image_appliance.png" alt="mobile" />
        </div>
        <div class="desc">
          <h4>Making your house work</h4>
          <span>Steam clean to refresh the laundry between washes</span>
        </div>
        <div class="button_wrapper">
          <button type="button">See all Washing Machine</button>
          <button type="button">Learn more</button>
        </div>
      </div>
    </section>
    <section class="main-section_inner section_inner">
      <div class="title_wrapper">
        <h3 class="title">This month’s pick</h3>
        <span>What people are adding to their wish lists</span>
      </div>
      <div class="third-section-gallery">
        <ul class="third-section-nav">
          <li class="active">New</li>
          <li>Popular</li>
          <li>Mom's Day</li>
          <li>Black Friday</li>
          <li>Mobile</li>
        </ul>
        <div class="flex_gallery">
          <div class="left">
            <figure>
              <div class="new_product bold web">NEW</div>
              <img class="web" src="../assets/main/image_z_flip_thom_browne_edition.png" alt />
              <img class="mobile" src="../assets/main/image_z_flip_thom_browne_edition_mo.png" alt />
            </figure>
            <div class="left_desc">
              <div class="mobile_new_product bold">NEW</div>
              <p>
                Galaxy Z Flip
                <br />Thom Browne Edition
              </p>
              <span class="cost mobile">$2,280.00 or $95.00/mo</span>
              <button class="web_inline" type="button">Buy now</button>
            </div>
          </div>
          <div class="right">
            <div class="img_wrapper">
              <div class="new_product bold">NEW</div>
              <figure>
                <img class="web" src="../assets/main/image_product_zfilp.png" alt />
                <img class="mobile" src="../assets/main/image_product_zfilp_mo.png" alt />
              </figure>
              <div class="img_desc">
                <p>Galaxy Z Flip</p>
                <span class="web">$1,300.00 or $54.17/mo</span>
              </div>
            </div>
            <div class="img_wrapper">
              <div class="new_product bold">NEW</div>
              <figure>
                <img class="web" src="../assets/main/image_product_quickdrive.png" alt />
                <img class="mobile" src="../assets/main/image_productcard_da_2.png" alt />
              </figure>
              <div class="img_desc">
                <p>QuickDrive™</p>
                <span class="web">$799.00</span>
              </div>
            </div>
            <div class="img_wrapper">
              <div class="new_product bold">NEW</div>
              <figure>
                <img class="web" src="../assets/main/image_product_ref.png" alt />
                <img class="mobile" src="../assets/main/image_productcard_da_1.png" alt />
              </figure>
              <div class="img_desc">
                <p>Family Hub™ Refrigerator</p>
                <span class="web">$3,799.00</span>
              </div>
            </div>
            <div class="img_wrapper">
              <div class="new_product bold">NEW</div>
              <figure>
                <img class="web" src="../assets/main/image_product_theframe.png" alt />
                <img class="mobile" src="../assets/main/image_product_theframe_mo.png" alt />
              </figure>
              <div class="img_desc">
                <p>The Frame</p>
                <span class="web">$2,199.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="main-section_inner section_inner">
      <div class="title_wrapper">
        <h3 class="title">Explore your Galaxy</h3>
        <span>
          What's waiting to be discovered?
          <a class="underline" href="javascript:;">Experience more</a>
        </span>
      </div>
      <div class="sub-slider_wrapper">
        <div class="sub-slider_inner">
          <div class="web left">
            <ul class="clearfix">
              <li>
                <div class="number">01</div>
                <div class="desc_wrapper active">
                  <div
                    class="title"
                    @mouseenter="subswiperSlide(0)"
                  >Digging for Magical Mysteries in Art - Part I</div>
                  <p>Art that tells a story: what's behind famous paintings and artists.</p>
                  <a href="javascript:;" class="learn_more">Learn more</a>
                </div>
              </li>
              <li>
                <div class="number">02</div>
                <div class="desc_wrapper">
                  <div class="title" @mouseenter="subswiperSlide(1)">Tablet-Powered Schedule Hacks</div>
                  <p>See what the K-pop sensations get up to when they’re not performing #withGalaxy.</p>
                  <a href="javascript:;" class="learn_more">Learn more</a>
                </div>
              </li>
              <li>
                <div class="number">03</div>
                <div class="desc_wrapper">
                  <div class="title" @mouseenter="subswiperSlide(2)">5 Simple Time-Saving Tips</div>
                  <p>Tips to designing a unique space and finding your own style through art.</p>
                  <a href="javascript:;" class="learn_more">Learn more</a>
                </div>
              </li>
              <li>
                <div class="number">04</div>
                <div class="desc_wrapper">
                  <div class="title">Samsung KX: The Home of Innovation</div>
                </div>
              </li>
              <li>
                <div class="number">05</div>
                <div class="desc_wrapper">
                  <div class="title">Missions from Successful Young Entrepreneurs</div>
                </div>
              </li>
            </ul>
          </div>
          <div class="right">
            <!-- <figure class="">
              <img src="../assets/main/image_explore_01.png" alt="" />
            </figure>-->
            <div class="mobile-slider-wrapper">
              <div class="mobile-slider swiper-container" ref="mobileSlider">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="../assets/main/image_explore_01.png" alt />
                    <div class="mobile swiper_desc">
                      <h5>
                        Digging for Magical
                        <br />Mysteries in Art - Part I
                      </h5>
                      <p>
                        Art that tells a story: what's behind famous
                        <br />paintings and artists.
                      </p>
                      <a class="learn_more" href="javascript:;">Learn more</a>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <img src="../assets/main/image_explore_02.png" alt />
                    <div class="mobile swiper_desc">
                      <h5>
                        Up Close and Behind
                        <br />the Scenes With BTS
                      </h5>
                      <p>
                        See what the K-pop sensations get up to when
                        <br />they’re not performing #withGalaxy.
                      </p>
                      <a class="learn_more" href="javascript:;">Learn more</a>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <img src="../assets/main/image_explore_03.png" alt />
                    <div class="mobile swiper_desc">
                      <h5>
                        Design Your Home and
                        <br />Redefine Your Style
                      </h5>
                      <p>
                        Tips to designing a unique space and finding your
                        <br />own style through art.
                      </p>
                      <a class="learn_more" href="javascript:;">Learn more</a>
                    </div>
                  </div>
                </div>
                <div class="mobile swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="main-section_inner section_inner">
      <div class="title_wrapper">
        <h3 class="title">Looking for something else?</h3>
      </div>
      <div class="main-form_wrapper">
        <div class="main-form">
          <input type="search" />
          <i></i>
        </div>
      </div>
      <div class="bubble_wrapper">
        <div class="bubble_inner">
          <div class="bubble">Z Flip Thom Browne Edition</div>
          <div class="bubble">Galaxy Watch Golf Edition</div>
          <div class="bubble">QLED 4K Quantum HDR Smart TV</div>
          <hr class="mobile breaker" />
          <div class="bubble">800T QLED 8K HDR Smart TV</div>
          <hr class="mobile breaker" />
          <div class="bubble">Family Hub™ American Style</div>
          <div class="bubble">Dual Cook Flex Oven</div>
          <div class="bubble">HDR QLED Gaming Monitor</div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import Swiper from "swiper/bundle";
import MainSlider from "../components/slider/MainSlider";
import "./Home.scss";

export default {
  created() {
    // this.$store.dispatch('login/LOGOUT', idInfo);
    // const reservation = this.$store.state.login.reservation;
    this.$nextTick(() => {
      this.mobile_slider = new Swiper(this.$refs.mobileSlider, {
        direction: "horizontal",
        loop: false,
        slidesPerView: "auto",
        spaceBetween: 16,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          768: {
            speed: 0,
          },
        },
      });
    });
    this.$store.dispatch("login/RESERVATIONINIT");
  },
  components: {
    MainSlider,
  },
  data() {
    return {
      mobile_slider: null,
    };
  },
  methods: {
    subswiperSlide(i) {
      const desc_wrapper = document.querySelector(".desc_wrapper.active");

      desc_wrapper.classList.remove("active");
      event.target.parentNode.classList.add("active");
      this.mobile_slider.slideTo(i);
    },
  },
};
</script>

<style lang="scss">
@import "scss/mixins.scss";

.breaker {
  display: block;
  width: 100%;
  height: 0%;
  margin: 0;
  content: " ";
  border: 0;
}

.underline {
  text-decoration: underline;
}

.sub-slider_wrapper {
  padding: 48px 24px 0;
}

.sub-slider_inner {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .left,
  .right {
    flex-basis: calc(50% - 12px);
  }
  figure {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .left {
    padding-top: 82px;
    li {
      display: flex;
      overflow: hidden;
      cursor: grab;
      .desc_wrapper {
        margin-left: 51px;
        flex-basis: calc(100% - 94px);
        p,
        a {
          opacity: 0;
          display: none;
          transition: opacity cubic-bezier(0.4, 0, 0.2, 1) 0.15s;
        }
        &.active {
          margin-top: 0;
          padding-bottom: 32px;
          border-top: 2px solid #000;
          border-bottom: 1px solid #ddd;
          transition: padding-bottom cubic-bezier(0.4, 0, 0.2, 1) 0.15s;
          p {
            display: block;
            opacity: 1;
          }
          a {
            display: inline-block;
            opacity: 1;
          }
        }
      }

      p {
        font-size: 14px;
        font-weight: 400;
      }

      .learn_more {
        margin-top: 22px;
      }
      .number {
        padding-top: 22px;
        padding-left: 24px;
        @include SansBold;
      }
      .title {
        padding: 16px 0;
        // width: 100%;
        font-size: 24px;
        @include SansBold;
      }
    }
  }
}

.learn_more {
  display: inline-block;
  position: relative;
  font-size: 14px;
  &:after {
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    content: "";
    width: 100%;
    height: 2px;
    background: #000;
  }
}

.mobile-slider {
  .swiper-slide {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.main-form_wrapper {
  margin: 32px 0 0;
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
      background-image: url("../assets/icons//icon_bold_action_search.png");
      background-size: cover;
    }
  }
}
.bubble_wrapper {
  margin-top: 24px;
  padding: 9px 22px 0;

  .bubble_inner {
    margin: 0 auto;
    width: calc(50% - 80px);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .bubble {
    cursor: pointer;
    font-size: 12px;
    padding: 6px 14px;
    border: 2px solid rgba(0, 0, 0, 0.15);
    border-radius: 16px;
    &:nth-child(5n + 2) {
      margin: 0 8px;
    }
    &:nth-child(n + 5):nth-child(-n + 9) {
      margin-top: 8px;
    }
  }
}

@include B768-1440 {
  .sub-slider_inner {
    .left {
      li {
        .number {
          padding-top: 1.4999999vw;
          font-size: 1.11111111vw;
        }
        .title {
          padding-top: 1.4444444vw;
          font-size: 1.11111111vw;
        }
        p {
          font-size: 0.9722222vw;
        }
      }
    }
  }
  .bubble_wrapper {
    flex-wrap: wrap;
    .bubble {
      font-size: 0.7722222vw;
      margin: 0 !important;
    }
  }
}

@include B767 {
  .learn_more {
    display: inline-block;
    position: relative;
    font-size: 14px;
    &:after {
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
      content: "";
      width: 100%;
      height: 2px;
      background: #000;
    }
  }
  .sub-slider_wrapper {
    padding: 10vw 24px;
  }

  .sub-slider_inner {
    .left,
    .right {
      flex-basis: auto;
      .swiper-container {
        overflow: inherit;
      }
      .swiper_desc {
        margin-top: 5.444444vw;
        text-align: center;
        h5 {
          padding: 3.5vw 0;
          font-size: 4.444444vw;
          @include SansBold;
          line-height: 1.2;
        }
        p {
          padding-bottom: 5.5vw;
          font-size: 3.333333vw;
        }
        a {
          font-weight: 700;
        }
      }
    }
    .swiper-pagination {
      margin-top: 31px;
      position: relative;
      bottom: 0;
      .swiper-pagination-bullet-active {
        background-color: #000;
      }
    }
  }
  .main-form_wrapper {
    margin-top: 24px;
    .main-form {
      width: calc(100% - 48px);
    }
  }
  .bubble_wrapper {
    width: 100%;
    .bubble_inner {
      width: 100%;

      .bubble {
        font-size: 2.5vw;
        &:nth-child(3n + 2) {
          margin: 0;
        }

        &:nth-child(2n) {
          margin-left: 8px;
        }
        &:nth-child(n + 3):nth-child(n-6) {
          margin-top: 2.666666vw;
        }
      }
    }
  }
}
</style>
