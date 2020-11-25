<template>
  <div>
    <!-- HOME BUTTON -->
    <Header />
    <!-- VIEWS -->
    <router-view />
    <Footer />
  </div>
</template>

<style></style>

<script>
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MypageNavigation from "./components/layout/MypageNavigation";
import "./assets/favicon.ico";

export default {
  components: {
    Header,
    Footer,
    MypageNavigation,
  },
};
</script>
