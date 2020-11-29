<template>
  <ul class="gauage">
    <li v-for="(v, i) in new Array(8)" :key="i" :class="active(i)"></li>
  </ul>
</template>

<script>
import { getReservationFromCookie } from '../../utils/cookies';
export default {
  created() {
    this.res = getReservationFromCookie();
    console.log(this.res);
  },
  data() {
    return {
      res: null,
    };
  },
  methods: {
    active(i) {
      if (this.res === '7' && i === 0) return 'active';
    },
  },
};
</script>
