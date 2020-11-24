<template>
  <section class="section_first">
    <div class="first-slider swiper-container" :class="{ pause: playToggle }" ref="mainSlider">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="swiper-slide-inner">
            <img
              src="https://images.samsung.com/kdp/cms_contents/104652/9d5d136f-2302-4b9f-9e90-3202f57348a6.jpg"
            />
            <p class="routerbtn" @click="$router.push('/main')">라우팅 버튼</p>
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
            <video playsinline muted>
              <source
                src="https://images.samsung.com/kdp/cms_contents/100109/9f174465-03f5-44ff-9f8e-eb6ad0b3f396.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="swiper-slide-inner">
            <img
              src="https://images.samsung.com/kdp/cms_contents/104159/66ebe585-2256-4bb8-b53c-ce1535930a98.jpg"
            />
          </div>
        </div>
      </div>
      <div class="slider-button-wrapper">
        <div class="slider-button-inner">
          <div class="swiper-pagination"></div>
          <button class="swiper_btn" @click="this.toggleSliderPlayPause">
            정지
          </button>
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
// import 'swiper/swiper-bundle.css';

const config = ['Samsung', 'Samsung', 'Samsung', 'Samsung', 'Samsung'];

export const mainSliderMobileVideo = [
  {
    src:
      'https://images.samsung.com/kdp/cms_contents/100109/4c6a7dda-2803-4436-b1d9-a7bbd86d311d.mp4',
  },
  {
    src:
      'https://images.samsung.com/kdp/cms_contents/100109/4c6a7dda-2803-4436-b1d9-a7bbd86d311d.mp4',
  },
];

export const mainSliderWebVideo = [
  {
    src:
      'https://images.samsung.com/kdp/cms_contents/100109/9f174465-03f5-44ff-9f8e-eb6ad0b3f396.mp4',
  },
  {
    src:
      'https://images.samsung.com/kdp/cms_contents/100109/9f174465-03f5-44ff-9f8e-eb6ad0b3f396.mp4',
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
    });
    window.addEventListener('resize', this.init);
  },
  data() {
    return {
      timer: null,
      playToggle: false,
      mainSlider: null,
      mainSliderOption: {
        direction: 'horizontal',
        loop: true,
        preventClicks: false,
        preventClicksPropagation: false,
        slideToClickedSlide: true,
        touchEventsTarget: 'wrapper',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function(index, className) {
            return `<div class=${className}>
                    <div class='activebar'>
                    </div>
                    <span class="swiper-pagination_desc">
                    ${config[index]}
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
      if (windowInnerWidth > 800) {
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
