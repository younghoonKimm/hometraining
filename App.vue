<template>
  <div>
    <!-- HOME BUTTON -->
    <Header :path="path" />
    <!-- VIEWS -->
    <router-view />
    <Footer :path="path" />
  </div>
</template>

<style></style>

<script>
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MypageNavigation from "./components/layout/MypageNavigation";
import "./assets/favicon.ico";

export default {
  watch: {
    $route(to, from) {
      this.path = this.$route.path;
    },
  },

  components: {
    Header,
    Footer,
    MypageNavigation,
  },

  data() {
    return {
      path: "/",
    };
  },
};
</script>
