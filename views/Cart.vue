<template>
  <main id="main" role="main">
    <button type="button" @click="onSubmit()">구매하기</button>
  </main>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import _cloneDeep from "lodash/cloneDeep";
import _find from "lodash/find";
import { dummyProduct } from "../config";

export default {
  created() {},

  computed: {
    getSubscribe() {
      return this.newItemArray(
        this.subscribeLoad,
        dummycost,
        this.subscribesArray
      );
    },

    getProduct() {
      return this.newItemArray(
        this.productsLoad,
        dummyProduct,
        this.productsArray
      );
    },
  },

  data() {
    return {};
  },

  methods: {
    onSubmit() {
      this.$store.dispatch("login/CHANGERESERVATION");
    },
  },
};
</script>
