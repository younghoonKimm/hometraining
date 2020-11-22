<template>
  <div class="" @click="cardClick">
    card
  </div>
</template>

<style>
.card {
  width: 300px;
  height: 300px;
  border-radius: 30px;
  background-color: #ccc;
}
</style>

<script>
import '../assets/logo.svg';

export default {
  props: {
    data: {
      type: String,
    },
    index: {
      type: Number,
    },
  },
  methods: {
    cardClick() {
      console.log(this.index);
      this.$emit('buttonClick', this.index);
    },
  },
};
</script>
