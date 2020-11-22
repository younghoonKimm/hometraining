<template>
  <main id="main" role="main">
    <MainSlider />
  </main>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import MainSlider from "../components/slider/MainSlider";
import "./Home.scss";

export default {
  created() {
    // this.$store.dispatch('login/LOGOUT', idInfo);
    // const reservation = this.$store.state.login.reservation;

    this.$store.dispatch("login/RESERVATIONINIT");
  },
  components: {
    MainSlider,
  },

  methods: {},
};
</script>
