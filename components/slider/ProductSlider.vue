<template>
  <section class="section_third">
    <div class="section_third_inner section_inner">
      <div class="slider_wrapper">
        <div class="mypage_slider swiper-container" ref="slide">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <!-- <img src="../assets/mypage/image_product_watchactive_2.png" /> -->
              <div class="swiper-slide-inner">
                <div class="text">
                  <h4 class="sansbold">
                    The Sero Navy Blue
                    <br />+ The Sero wheel
                  </h4>
                </div>
                <figure>
                  <img src="../../assets/mypage/image_product_thesero_wheel.png" />
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
              <!-- <img src="../assets/mypage/image_product_watchactive_2.png" /> -->
              <div class="swiper-slide-inner">
                <div class="text">
                  <h4 class="sansbold">Galaxy Watch Active 2</h4>
                </div>
                <figure>
                  <img src="../../assets/mypage/image_product_watchactive_2.png" />
                </figure>
                <ul class="color-picker clearfix">
                  <li></li>
                  <li class="beige"></li>
                </ul>
                <div class="slide_desc margin">
                  <p class="bold cost">$319.00</p>
                  <a class="bold" href="javascript:;">Add to cart</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <!-- <img src="../assets/mypage/image_product_watchactive_2.png" /> -->
              <div class="swiper-slide-inner">
                <div class="text">
                  <h4 class="sansbold">Galaxy Buds Live</h4>
                </div>
                <figure>
                  <img src="../../assets/mypage/image_product_buds.png" />
                </figure>
                <div>
                  <ul class="color-picker clearfix">
                    <li class="brown"></li>
                    <li class="indigo"></li>
                    <li class="mystic"></li>
                    <li class="white"></li>
                  </ul>
                </div>
                <div class="slide_desc margin">
                  <p class="bold cost">$179.00</p>
                  <a class="bold" href="javascript:;">Add to cart</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide web_img">
              <div class="swiper-slide-inner">4</div>
            </div>
          </div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
      <div class="swiper-pagination_wrapper">
        <div class="swiper-pagination_inner">
          <div class="swiper-pagination"></div>
          <div class="pause"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swiper from 'swiper/bundle';
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
        allowSlideNext: false,
        allowSlidePrev: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: false,
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
  data() {
    return {
      mypageSlider: null,
    };
  },
};
</script>
