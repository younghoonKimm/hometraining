<template>
  <Fragment>
    <div>
      <h4>혼자하는 힘든 운동은 이제 그만</h4>

      <h3>{{ dummydata.subtitle }}</h3>

      <div>{{ dummydata.desc }}</div>
      <div>{{ dummydata.descSmall }}</div>
      <div @click="$router.push('/store')">보러가기</div>
    </div>
  </Fragment>
</template>

<style></style>

<script>
import '../../assets/logo.svg';
import { Fragment } from 'vue-fragment';
const dummydata = {
  id: 2,
  subtitle: '혼자하는 힘든',
  desc: '라이브 GX집에서',
  descSmall: '참가해요',
};

export default {
  data() {
    return {
      dummydata,
    };
  },
  computed: {
    mainSliderPause: () => {
      return {
        on: this.navToggle,
      };
    },
  },
  components: {
    Fragment,
  },
  methods: {
    onToggleNav(e) {
      e.preventDefault();
      const wrap = document.querySelector('.wrap');
      this.navToggle = !this.navToggle;
    },
  },
};
</script>
