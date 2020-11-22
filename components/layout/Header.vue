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
                <a href="javascript:;" @mouseenter.prevent="onMouseEnter(i)">
                  {{ v }}
                </a>
                <div
                  :class="[navDepthToggle ? 'open' : '', activeIndex === i ? 'active' : '']"
                  class="depth2_wrapper"
                >
                  <div class="depth2_inner" :class="activeIndex === i ? 'open' : ''">
                    <h3 class="title">Smart Home</h3>
                    <ul class="depth2 clearfix">
                      <li>
                        Featured
                        <div class="depth3_wrapper">
                          <div class="depth3_inner">
                            <ul>
                              <li>123</li>
                            </ul>
                          </div>
                          <li>View</li>
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
              <div v-else-if="i === 6">
                <a href="javascript:;" @mouseenter.prevent="onMouseEnter(i)">
                  {{ v }}
                </a>
                <div
                  :class="[navDepthToggle ? 'open' : '', activeIndex === i ? 'active' : '']"
                  class="depth2_wrapper"
                >
                  <div class="depth2_inner" :class="activeIndex === i ? 'open' : ''">
                    <h3 class="title">Service</h3>
                    <ul class="depth2 clearfix">
                      <li>
                        Featured
                        <div class="depth3_wrapper">
                          <div class="depth3_inner">
                            <ul>
                              <li>123</li>
                            </ul>
                          </div>
                          <li>View</li>
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
                <a href="javascript:;" @mouseenter.prevent="onMouseLeave()">
                  {{ v }}
                </a>
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
          <!-- <button
            class="icons_clickable"
            type="button"
            @click="this.onToggleNav"
          > -->
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
        </div>
      </div>
    </header>
    <div class="nav_dim" :class="navDepthToggle ? 'open' : ''" @mouseenter="onMouseLeave()"></div>
    <div class="icons_bg" :class="{ on: navToggle }" @click="this.onToggleNav"></div>
    <div class="nav_slide" :class="{ on: navToggle }">
      <div
        @click.prevent="
          (e) => {
            this.onToggleNav();
            $router.push('/subscribe');
          }
        "
      >
        Subscribe
      </div>
    </div>
    <nav class="router-nav" v-if="this.$route.path !== '/store'">
      <h4>홈트레이닝</h4>
      <ul class="router-nav_list">
        <li @click="$router.push('/reservation')">
          <a href="#">나의홈트</a>
        </li>
        <li>
          <a href="#">나의홈트</a>
        </li>
        <li>
          <a href="#">나의홈트</a>
        </li>
        <li>
          <a href="#">나의홈트</a>
        </li>
      </ul>
    </nav>
  </Fragment>
</template>

<style></style>

<script>
import { Fragment } from 'vue-fragment';
import '../../assets/logo.svg';
import { navList } from '../../config';

export default {
  created() {
    const active = this.$route.path;
    if (active === '/store') {
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
    onToggleNav() {
      const wrap = document.querySelector('.wrap');
      this.navToggle = !this.navToggle;
    },
    onMouseEnter(i) {
      this.navDepthToggle = true;
      this.activeIndex = i;
      console.log(this.activeIndex);
    },
    onMouseLeave() {
      this.navDepthToggle = false;
      this.activeIndex = null;
    },
    onMouseToggleProfile() {
      this.profileToggle = !this.profileToggle;
    },
  },
};
</script>
