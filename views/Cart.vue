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

const dummycost = [
  {
    id: 1,
    month: 4,
    cost: 39000,
  },
  {
    id: 2,
    month: 8,
    cost: 78000,
  },
  {
    id: 3,
    month: 12,
    cost: 1170000,
  },
];

export default {
  created() {
    this.initSubscribeDB();
    this.initProductDB();
  },

  computed: {
    ...mapGetters("subscribe", ["subscribeLoad"]),
    ...mapGetters("product", ["productsLoad"]),

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
    return {
      productsArray: [],
      subscribesArray: [],
    };
  },

  methods: {
    ...mapActions("subscribe", ["initSubscribeDB"]),
    ...mapActions("product", ["initProductDB"]),

    newItemArray(computedArray, valueArray, newArray) {
      computedArray.forEach((v) => {
        const foundInProduct = _find(valueArray, { cost: v.cost });
        if (foundInProduct) {
          newArray = [foundInProduct, ...newArray];
        }
      });

      return newArray;
    },

    onSubmit() {
      this.$store.dispatch("login/CHANGERESERVATION");
    },
  },
};
</script>
