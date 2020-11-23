<template>
  <Fragment>
    <header id="header">
      <div class="header_inner clearfix">
        <h1 class="logo">
          <a @click="$router.push('/')">
            <img id="logo" src="../../assets/logo.svg" alt="samsung logo" />
          </a>
        </h1>
        <nav id="nav">
          <ul class="depth1 clearfix">
            <li v-for="(v, i) in navList" :key="i">
              <div v-if="i === 5">
                <a href="javascript:;" @mouseenter.prevent="onMouseEnter(i)">{{ v }}</a>
                <div :class="navDepthToggle ? 'open' : ''" class="depth2_wrapper">
                  <div class="depth2_inner" :class="activeIndex === i ? 'open' : ''">
                    <h3 class="title">Smart Home</h3>
                    <ul class="depth2 clearfix">
                      <li class="active">
                        Featured
                        <div class="depth3_wrapper">
                          <div class="depth3_inner">
                            <ul>
                              <li>123</li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        Home Entertainment
                        <div class="depth3_wrapper">
                          <div class="depth3_inner">
                            <ul>
                              <li>123</li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>Home Fitness</li>
                      <li>Home Management</li>
                      <li>Cleaning & Hyhiene</li>
                      <li>SmartThings</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div v-else-if="i === 6">
                <a href="javascript:;" @mouseenter.prevent="onMouseEnter(i)">{{ v }}</a>
                <div :class="navDepthToggle ? 'open' : ''" class="depth2_wrapper">
                  <div class="depth2_inner" :class="activeIndex === i ? 'open' : ''">
                    <h3 class="title">Service</h3>
                    <ul class="depth2 clearfix">
                      <li class="active">
                        Featured
                        <div class="depth3_wrapper">
                          <div class="depth3_inner">
                            <ul>
                              <li>123</li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>Home Entertainment</li>
                      <li>Home Fitness</li>
                      <li>Home Management</li>
                      <li>Cleaning & Hyhiene</li>
                      <li>SmartThings</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div v-else>
                <a href="javascript:;" @mouseenter.prevent="onMouseLeave()">{{ v }}</a>
              </div>
            </li>
          </ul>
        </nav>
        <div class="icons">
          <button type="button">
            1
            <span class="ir_su">카트</span>
          </button>
          <button type="button">
            2
            <span class="ir_su">찾기</span>
          </button>
          <button
            class="icons_clickable"
            type="button"
            @mouseenter="onMouseToggleProfile()"
            @mouseleave="onMouseToggleProfile()"
          >
            3
            <span class="ir_su">프로필</span>
            <div class="profile" :class="profileToggle ? 'on' : ''">
              <h5>이름</h5>
              <ul>
                <li>1</li>
                <li>2</li>
                <li @click="$router.push('/subscription')">3</li>
                <li>4</li>
              </ul>
            </div>
          </button>
          <button class="icons_clickable" type="button" @click="this.onToggleNav">4</button>
        </div>
      </div>
      <div class="depth2_wrapper" ref="depth2" />
    </header>
    <div class="nav_dim" :class="navDepthToggle ? 'open' : ''" @mouseenter="onMouseLeave()" />
    <div class="icons_bg" :class="{ on: navToggle }" @click="this.onToggleNav" />
    <div class="nav_slide" :class="{ on: navToggle }">
      <div>
        <button type="button" :class="{ on: navToggle }">X</button>
      </div>
      <div class="nav_slide_wrapper" ref="nav_slide_wrapper">
        <div class="nav_slide_main">
          <ul class="slider_gnb_main first" :class="{ on: navToggle }">
            <li v-for="(v, i) in navList" :key="i">
              <a href="#" @click="slideGnbOpen(i)">{{v}}</a>
              <div class="slide_gnb" v-if="i === 5" ref="gnb5">
                <div>
                  <button type="button" @click="slideGnbRemove()">X</button>
                </div>
                <h5>Smart Home</h5>
                <ul class="slide_gnb_depth2">
                  <li>Featured</li>
                  <li>Home Entertainment</li>
                  <li>Home Fitness</li>
                  <li>Home Management</li>
                  <li>Cleaning & Hygiene</li>
                  <li>SmartThings</li>
                </ul>
              </div>
              <div class="slide_gnb" v-if="i === 6" ref="gnb6">
                <h5>Service</h5>
                <ul class="slide_gnb_depth2">
                  <li>Featured</li>
                  <li>Home Entertainment</li>
                  <li>Home Fitness</li>
                  <li>Home Management</li>
                  <li>Cleaning & Hygiene</li>
                  <li>SmartThings</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div class="nav_slide_sub">
          <ul class="slider_gnb_main" :class="{ on: navToggle }">
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Buissness</a>
            </li>
          </ul>
          <ul class="slider_gnb_main" :class="{ on: navToggle }">
            <li>
              <a href="#">Sign In/Sign-Up</a>
            </li>
            <li>
              <a href="#">Orders</a>
            </li>
            <li>
              <a href="#">Members</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- <div
        @click.prevent="
          (e) => {
            this.onToggleNav();
            $router.push('/subscribe');
          }
        "
      >Subscribe</div>-->
    </div>
  </Fragment>
</template>

<style></style>

<script>
import { Fragment } from "vue-fragment";
import "../../assets/logo.svg";
import { navList } from "../../config";

export default {
  created() {
    const active = this.$route.path;
    if (active === "/store") {
      this.storeNav = true;
    }
  },
  data() {
    return {
      navList,
      storeNav: false,
      navDepthToggle: false,
      navToggle: false,
      profileToggle: false,
      activeIndex: null,
    };
  },
  components: {
    Fragment,
  },
  methods: {
    secondNav() {
      return this.$route.path == "/main";
    },
    onToggleNav() {
      const wrap = document.querySelector(".wrap");
      this.navToggle = !this.navToggle;
      this.slideGnbRemove();
    },

    onMouseEnter(i) {
      this.navDepthToggle = true;
      this.activeIndex = i;
      this.$refs.depth2.classList.add("open");
    },

    onMouseLeave() {
      this.navDepthToggle = false;
      this.activeIndex = null;
      this.$refs.depth2.classList.remove("open");
    },

    onMouseToggleProfile() {
      this.profileToggle = !this.profileToggle;
    },

    slideGnbOpen(i) {
      if (i === 5) {
        this.$refs.nav_slide_wrapper.classList.add("slide");
        this.$refs.gnb5[0].classList.add("open");
      } else if (i == 6) {
        this.$refs.nav_slide_wrapper.classList.add("slide");
        this.$refs.gnb6[0].classList.add("open");
      }
      return;
    },

    slideGnbRemove() {
      this.$refs.nav_slide_wrapper.classList.remove("slide");
      this.$refs.gnb5[0].classList.remove("open");
      this.$refs.gnb6[0].classList.remove("open");
    },
  },
};
</script>
