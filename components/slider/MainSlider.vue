<template>
  <section class="section_first">
    <div
      class="first-slider swiper-container"
      :class="[{ pause: playToggle }, this.whiteColor ? 'white' : '']"
      ref="mainSlider"
    >
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="swiper-slide-inner">
            <div class="main_slider_desc">
              <p class="mobile">
                Galaxy S20, S20+ <br />
                and S20 Ultra
              </p>
              <p class="web">
                Galaxy S20, S20+ and S20 <br />
                Ultra
              </p>
              <span>This is the phone that will change photography</span>
              <div class="main_slider_btn_wrapper">
                <button>1</button>
                <button>2</button>
              </div>
            </div>
            <img class="web_img" src="../../assets/main/kv_image_1.png" />
            <img class="mobile_img" src="../../assets/main/kv_image_1_mo.png" />
          </div>
        </div>
        <div class="swiper-slide">
          <div class="swiper-slide-inner">
            <video
              muted
              playsinline
              src="https://images.samsung.com/kdp/cms_contents/100109/6c26d85e-30c2-43a4-b382-3c88bf878c4a.mp4"
            >
              <source
                src="https://images.samsung.com/kdp/cms_contents/100109/6c26d85e-30c2-43a4-b382-3c88bf878c4a.mp4"
              />
            </video>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="swiper-slide-inner">
            <video
              muted
              playsinline
              src="https://images.samsung.com/kdp/cms_contents/100109/6c26d85e-30c2-43a4-b382-3c88bf878c4a.mp4"
            >
              <source
                src="https://images.samsung.com/kdp/cms_contents/100109/6c26d85e-30c2-43a4-b382-3c88bf878c4a.mp4"
              />
            </video>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="swiper-slide-inner">
            <video
              muted
              playsinline
              src="https://images.samsung.com/kdp/cms_contents/100109/6c26d85e-30c2-43a4-b382-3c88bf878c4a.mp4"
            >
              <source
                src="https://images.samsung.com/kdp/cms_contents/100109/6c26d85e-30c2-43a4-b382-3c88bf878c4a.mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <div class="slider-button-wrapper">
        <div class="slider-button-inner">
          <div class="swiper-pagination"></div>
          <button class="swiper_btn" @click="this.toggleSliderPlayPause"></button>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.routerbtn {
  position: absolute;
  width: 200px;
  left: 50%;
  top: 50%;
  height: 200px;
  z-index: 3333;
}
</style>

<script>
import Swiper from 'swiper/bundle';

export const mainSliderMobileVideo = [
  {
    src:
      'https://images.samsung.com/is/content/samsung/assets/uk/home/P6-Home-KV_WW9800T_MO_200807.mp4',
  },
  {
    src:
      'https://images.samsung.com/is/content/samsung/assets/uk/home/S20_FE_Home_MainCarousel_Animated_KV_6Colors_720X10801.mp4',
  },
  {
    src:
      'https://images.samsung.com/is/content/samsung/assets/uk/p6_gro1/p6_initial_home/homekv_vd_qled_mo_720x1080.mp4',
  },
  {
    src:
      'https://images.samsung.com/is/content/samsung/assets/uk/home/P6-Home-KV_WW9800T_MO_200807.mp4',
  },
];

export const mainSliderWebVideo = [
  {
    src:
      'https://images.samsung.com/is/content/samsung/assets/uk/home/P6-Home-KV_WW9800T_PC_200807.mp4',
  },
  {
    src:
      'https://images.samsung.com/is/content/samsung/assets/uk/home/S20_FE_Home_MainCarousel_Animated_KV_6Colors_1440X6401.mp4',
  },
  {
    src:
      'https://images.samsung.com/is/content/samsung/assets/uk/p6_gro1/p6_initial_home/200616_Unrivaled_QLED_8K_PC_1440x640.mp4',
  },
  {
    src:
      'https://images.samsung.com/is/content/samsung/assets/uk/home/P6-Home-KV_WW9800T_PC_200807.mp4',
  },
];

export default {
  created() {
    this.$nextTick(() => {
      this.mainSlider = new Swiper(this.$refs.mainSlider, this.mainSliderOption);
      this.resizeBullet();
      this.autoPlaySlider();
      this.onChangeSlideVideoSet();
      this.responsiveVideo();
      this.sliderFontColorChange();
    });
    window.addEventListener('resize', this.init);
  },
  data() {
    return {
      timer: null,
      playToggle: false,
      mainSlider: null,
      whiteColor: true,
      mainSliderOption: {
        direction: 'horizontal',
        loop: true,
        effect: 'fade',
        preventClicks: false,
        preventClicksPropagation: false,
        slideToClickedSlide: true,
        touchEventsTarget: 'wrapper',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function(index, className) {
            return `<div class=${className}>
                    <div class='activebar'>
                    </div>
                    <span class="swiper-pagination_desc">
                    </span>
                  </div>`;
          },
        },
      },
      mainSliderBulletWidth: 0,
      activeVideo: null,
    };
  },

  computed: {
    mainSliderPause: () => {
      return {
        pause: this.playToggle,
      };
    },
  },

  mounted() {},

  beforeDestroy() {
    window.removeEventListener('resize', this.init);
    window.clearInterval(this.timer);
  },

  methods: {
    onChangeSlideVideoSet() {
      this.mainSlider.on('slideChangeTransitionStart', () => {
        const mainSlider = this.$refs.mainSlider;
        const videos = mainSlider.querySelectorAll('video');
        const activeVideoFind = mainSlider.querySelector('.swiper-slide-active video');

        if (activeVideoFind) {
          this.activeVideo = activeVideoFind;
        } else {
          this.activeVideo = null;
        }

        if (videos) {
          videos.forEach((video) => {
            video.currentTime = 0;
          });
          if (this.activeVideo) {
            if (this.playToggle === true) {
              return this.activeVideo.pause();
            } else {
              return this.activeVideo.play();
            }
          }
        }
      });
    },

    resizeBullet() {
      this.mainSliderBulletWidth = this.$refs.mainSlider.querySelector(
        '.swiper-pagination-bullet-active'
      ).clientWidth;
      return this.mainSliderBulletWidth;
    },

    canAutoPlayWidthNotPaused(nowBulletWidth) {
      return (
        nowBulletWidth > 0 &&
        nowBulletWidth >= this.mainSliderBulletWidth - 1 &&
        this.playToggle == false
      );
    },

    autoPlaySlider() {
      this.timer = setInterval(() => {
        const nowBulletWidth = this.$refs.mainSlider.querySelector(
          '.swiper-pagination-bullet-active .activebar'
        ).clientWidth;
        if (nowBulletWidth === undefined) window.clearInterval(this.timer);
        if (this.canAutoPlayWidthNotPaused(nowBulletWidth)) {
          return this.mainSlider.slideNext(500);
        }
      }, 280);
    },

    sliderFontColorChange() {
      this.mainSlider.on('slideChangeTransitionStart', function() {
        if (this.realIndex === 3) {
          this.whiteColor = false;
          console.log(this.whiteColor);
        } else {
          this.whiteColor = true;
        }
      });
    },
    toggleSliderPlayPause(e) {
      e.stopPropagation();
      if (this.playToggle === false) {
        if (this.activeVideo) this.activeVideo.pause();
        window.clearInterval(this.timer);
      } else {
        if (this.activeVideo) this.activeVideo.play();
        this.autoPlaySlider();
      }
      return (this.playToggle = !this.playToggle);
    },

    responsiveVideoSet(videos, nowBullet, srcArray, device) {
      const activebar = 'activebar';
      videos.forEach((video, i) => {
        if (video.getAttribute('data-media') === device) return;
        video.setAttribute('data-media', device);
        video.src = srcArray[i].src;
        video.load();
        nowBullet.classList.remove(activebar);
        void nowBullet.offsetWidth, nowBullet.classList.add(activebar);
        this.playToggle === false ? video.play() : video.pause();
      });
    },

    responsiveVideo() {
      const windowInnerWidth = window.innerWidth;
      const videos = document.querySelectorAll('video');
      const nowBullet = document.querySelector('.swiper-pagination-bullet-active .activebar');
      if (windowInnerWidth > 767) {
        this.responsiveVideoSet(videos, nowBullet, mainSliderWebVideo, 'web');
      } else {
        this.responsiveVideoSet(videos, nowBullet, mainSliderMobileVideo, 'mobile');
      }
    },

    init(e) {
      this.resizeBullet(e);
      this.responsiveVideo(e);
    },
  },
};
</script>
