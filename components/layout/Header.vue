<template>
  <Fragment>
    <header id="header">
      <div class="header_inner clearfix">
        <h1 class="logo">
          <a @click="goToMyPage('/')">
            <img id="logo" src="../../assets/logo.svg" alt="samsung logo" />
          </a>
        </h1>
        <nav id="nav">
          <ul class="depth1 clearfix">
            <li v-for="(v, i) in navList" :key="i">
              <div v-if="i === 5" :class="activeIndex === i ? 'hover' : ''">
                <a href="javascript:;" @mouseenter.prevent="onMouseEnter(i)">{{ v }}</a>
                <div :class="onDepth2Open(i) ? 'open' : ''" class="depth2_wrapper">
                  <div class="depth2_inner" :class="activeIndex === i ? 'open' : ''">
                    <h3 class="title">Smart Home</h3>
                    <ul class="depth2 clearfix">
                      <li>
                        <a href="#">Featured</a>
                      </li>
                      <li>
                        <a href="#">Home Entertainment</a>
                      </li>
                      <li class="active">
                        <a href="#">Home Fitness</a>
                        <div class="arrow"></div>
                        <div class="depth3_wrapper">
                          <div class="depth3_inner">
                            <ul>
                              <li>
                                <a href="javascript:;">View all Packages</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a href="#">Home Management</a>
                      </li>
                      <li>
                        <a href="#">Cleaning & Hyhiene</a>
                      </li>
                      <li>
                        <a href="#">Home Management</a>
                      </li>
                      <li>
                        <a href="#">SmartThings</a>
                      </li>
                    </ul>
                    <div class="photo_wrapper">
                      <a href="javascript:;">
                        <div class="img">
                          <img src="../../assets/main/image2.png" alt="hometarining" />
                        </div>
                        <div class="desc">
                          <p>Fitness from Anywhere</p>
                          <span>Learn more</span>
                        </div>
                      </a>
                    </div>
                    <button class="depth2_close" type="button" @click="onMouseLeave()" />
                  </div>
                </div>
              </div>
              <div v-else-if="i === 6" :class="activeIndex === i ? 'hover' : ''">
                <a href="javascript:;" @mouseenter.prevent="onMouseEnter(i)">{{ v }}</a>
                <div :class="onDepth2Open(i) ? 'open' : ''" class="depth2_wrapper">
                  <div class="depth2_inner" :class="activeIndex === i ? 'open' : ''">
                    <h3 class="title">Service</h3>
                    <ul class="depth2 clearfix">
                      <li>
                        <a href="javascript:;">Samsung Kid+</a>
                      </li>
                      <li class="active">
                        <a href="javascript:;">Samsung Homefit</a>
                        <div class="arrow"></div>
                        <div class="depth3_wrapper">
                          <div class="depth3_inner">
                            <ul>
                              <li>
                                <a href="javascript:;">Work out at Your Homefit</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div class="photo_wrapper">
                      <a href="javascript:;">
                        <div class="img">
                          <img src="../../assets/main/image.png" alt="hometarining" />
                        </div>
                        <div class="desc">
                          <p>Fitness from Anywhere</p>
                          <span>Learn more</span>
                        </div>
                      </a>
                    </div>
                    <button class="depth2_close" type="button" @click="onMouseLeave()" />
                  </div>
                </div>
              </div>
              <div v-else>
                <a href="javascript:;" @mouseenter.prevent="onMouseLeave()">{{ v }}</a>
              </div>
            </li>
          </ul>
        </nav>
        <div class="sub_gnb_wrapper">
          <ul class="sub_gnb">
            <li>Explore</li>
            <li>Support</li>
            <li>Buissness</li>
          </ul>

          <div class="icons">
            <button class="cart" type="button" :class="cartPage ? 'active' : ''">
              <span class="ir_su">카트</span>
            </button>
            <button class="search" type="button">
              <span class="ir_su">찾기</span>
            </button>
            <button
              class="profile icons_clickable"
              type="button"
              @mouseenter="onMouseToggleProfile()"
              @mouseleave="onLeaveToggleProfile()"
            >
              <span class="ir_su">프로필</span>
              <div class="profile" ref="profileRef">
                <div class="name">
                  <i></i>
                  <h5>Clair Watson</h5>
                </div>

                <ul>
                  <li @click="$router.push('/mypage')">My page</li>

                  <li>Orders</li>
                  <li>Wishlist</li>
                  <li>Subscriptions</li>
                  <li>Community</li>
                  <li>Sign out</li>
                </ul>
              </div>
            </button>
            <button class="hamburger" type="button" @click="onToggleNav()"></button>
          </div>
        </div>
      </div>
      <div class="depth2_Bg" ref="depth2" />
    </header>
    <div class="nav_dim" :class="navDepthToggle ? 'open' : ''" @mouseenter="onMouseLeave()" />
    <div class="icons_bg" :class="{ on: navToggle }" @click="onToggleNav()" />
    <div class="nav_slide" :class="{ on: navToggle }" ref="navSlideRef">
      <div class="nav_slide_wrapper" ref="nav_slide_wrapper">
        <button type="button" class="slide_remove" @click="slideGnbClose()"></button>
        <div class="nav_slide_main">
          <ul class="slider_gnb_main first" :class="{ on: navToggle }">
            <li v-for="(v, i) in navList" :key="i">
              <a href="#" @click="slideGnbOpen(i)">{{ v }}</a>
              <div class="slide_gnb" v-if="i === 5" ref="gnb5">
                <div class="slide_btn_wrap">
                  <button type="button" class="slide_back_btn" @click="slideGnbRemove()"></button>
                  <button type="button" class="slide_remove_btn" @click="slideGnbClose()"></button>
                </div>
                <h5>
                  <a href="javascript:;">Smart Home</a>
                </h5>
                <ul class="slide_gnb_depth2">
                  <li>
                    <a href="javascript:;">
                      Featured
                      <div class="close"></div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      Home Entertainment
                      <div class="close"></div>
                    </a>
                  </li>
                  <li @click="slideGnbDepth3Open(i)" ref="depth3">
                    <a href="javascript:;">
                      Home Fitness
                      <div class="close"></div>
                    </a>
                    <div class="depth3_wrapper">
                      <div class="depth3_inner">
                        <ul class="slide_gnb_depth3">
                          <li>
                            <a
                              href="javascript:;"
                              @click="$router.push('/subscription')"
                            >View All Packages</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="javascript:;">
                      Home Management
                      <div class="close"></div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      Cleaning & Hygiene
                      <div class="close"></div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      SmartThings
                      <div class="close"></div>
                    </a>
                  </li>
                </ul>
                <div class="depth2_image_container">
                  <img src="../../assets/main/image.png" alt="hometarining" />
                </div>
                <div class="depth2_desc_container">
                  <p>Fitness from Anywhere</p>
                  <span>Learn more</span>
                </div>
              </div>
              <div class="slide_gnb" v-if="i === 6" ref="gnb5">
                <div class="slide_btn_wrap">
                  <button type="button" class="slide_back_btn" @click="slideGnbRemove()"></button>
                  <button type="button" class="slide_remove_btn" @click="slideGnbClose()"></button>
                </div>
                <h5>Service</h5>
                <ul class="slide_gnb_depth2">
                  <li>
                    <a href="javascript:;">
                      Samsung Kid+
                      <div class="close"></div>
                    </a>
                  </li>
                  <li @click="slideGnbDepth3Open(i)" ref="depth3">
                    <a href="javascript:;">
                      Samsung HomeFit
                      <div class="close"></div>
                    </a>
                    <div class="depth3_wrapper">
                      <div class="depth3_inner">
                        <ul class="slide_gnb_depth3">
                          <li>
                            <a href="javascript:;">Workout at Your HomeFit</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="depth2_image_container">
                  <img src="../../assets/main/image.png" alt="hometarining" />
                </div>
                <div class="depth2_desc_container">
                  <p>Fitness from Anywhere</p>
                  <span>Learn more</span>
                </div>
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
          <ul class="slider_gnb_main noarrow" :class="{ on: navToggle }">
            <li>
              <a href="#">Client</a>
            </li>
            <li @click="goToMyPage('/mypage')">
              <a href="#">My page</a>
            </li>
            <li>
              <a href="#">Orders</a>
            </li>
            <li>
              <a href="#">Wishlist</a>
            </li>
            <li>
              <a href="#">Subscriptions</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">Sign out</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Fragment>
</template>

<style></style>

<script>
import { Fragment } from "vue-fragment";
import "../../assets/logo.svg";
import "../../assets/icons/icon_bold_shopping_cart.png";
import { navList, depth2SmatHomeList } from "../../config";

export default {
  props: {
    path: String,
  },
  data() {
    return {
      navList,
      depth2SmatHomeList,
      navDepthToggle: false,
      navToggle: false,
      activeIndex: null,
    };
  },
  components: {
    Fragment,
  },
  computed: {
    cartPage() {
      if (this.path === "/cart") return true;
    },
  },

  methods: {
    secondNav() {
      return this.$route.path == "/main";
    },

    onToggleNav() {
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

    onDepth2Open(i) {
      return this.navDepthToggle && this.activeIndex === i ? "open" : "";
    },

    onMouseToggleProfile() {
      this.$refs.profileRef.classList.add("on");
    },

    onLeaveToggleProfile() {
      this.$refs.profileRef.classList.remove("on");
    },

    slideGnbOpen(i) {
      if (i === 5) {
        this.$refs.nav_slide_wrapper.classList.add("slide");
        this.$refs.gnb5[0].classList.add("open");
      } else if (i == 6) {
        this.$refs.nav_slide_wrapper.classList.add("slide");
        this.$refs.gnb5[1].classList.add("open");
      }
      return;
    },

    slideGnbDepth3Open(i) {
      if (i === 5) return this.$refs.depth3[0].classList.toggle("open");
      if (i === 6) return this.$refs.depth3[1].classList.toggle("open");
    },

    slideGnbRemove() {
      this.$refs.nav_slide_wrapper.classList.remove("slide");
      this.$refs.gnb5[0].classList.remove("open");
      this.$refs.gnb5[1].classList.remove("open");
      this.$refs.depth3[0].classList.remove("open");
      this.$refs.depth3[1].classList.remove("open");
    },

    slideGnbClose() {
      this.navToggle = false;
      this.slideGnbRemove();
    },

    goToMyPage(page) {
      // this.slideGnbClose();
      this.$router.push(page);
    },
  },

  watch: {
    $route(to, from) {
      this.navToggle = false;
      this.$refs.navSlideRef.classList.remove("on");
      this.slideGnbRemove();
      this.onMouseLeave();
      this.onLeaveToggleProfile();
    },
  },
};
</script>
