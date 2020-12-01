<template>
  <main id="main" role="main" class="myscription_main padding-bottom-0">
    <!-- <button type="button" @click="onSubmit()">구매하기</button> -->
    <section class="section_first">
      <div class="order_section_inner section_inner">
        <div class="check_img_wrapper">
          <div class="check_img"></div>
        </div>
        <div class="desc_wrapper">
          <h4>
            <span class="sansbold">Thank you. Your order has</span>
            <span class="sansbold">been received</span>
          </h4>
          <span class="order_id bold">Order # UK3067774462</span>
          <p>
            View your order status in
            <span>My account</span>
          </p>
        </div>
        <div class="order_button_wrapper">
          <button type="button">Continue shopping</button>
          <button type="button" @click="$router.push('/subscription')">Go to My samsung</button>
        </div>
      </div>
    </section>
    <article class="copyright_wrapper">
      <div class="copyright_inner">
        <div class="copyright">
          <p>Copyright© 1995-2020 SAMSUNG All Rights Reserved.</p>
          <p>
            This website is best viewed using Internet Explorer
            <em>11, Chrome, Safari and newer browsers.</em>
          </p>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

import { dummyProduct } from '../config';
import './MyScriptions.scss';
import ProductSlider from '../components/slider/ProductSlider';

export default {
  created() {},

  data() {
    return {};
  },

  components: {
    ProductSlider,
  },

  methods: {
    onSubmit() {
      this.$store.dispatch('login/CHANGERESERVATION');
    },
  },
};
</script>

<style lang="scss">
@import 'scss/mixins.scss';

.order_section_inner {
  padding: 32px 0;
  .check_img_wrapper {
    width: 100%;
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .desc_wrapper {
    text-align: center;
  }
  h4 {
    width: 100%;
    margin-top: 24px;
    font-size: 24px;

    span {
      display: block;
      line-height: 1.35;
    }
  }
  .order_id {
    margin-top: 16px;
    display: block;
    font-size: 14px;
    color: #2189ff;
  }
  p {
    margin-top: 16px;
    font-size: 14px;
    span {
      color: #2189ff;
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .order_button_wrapper {
    margin-top: 24px;
    text-align: center;
    button {
      padding: 8px 89px;
      font-size: 14px;
      font-weight: 700;
      border-radius: 20px;
      border: 1px solid #000;
      &:nth-child(2) {
        background: #2189ff;
        border: 1px solid #2189ff;
        color: #fff;
      }
    }
  }
}

.check_img {
  width: 48px;
  height: 48px;
  background-image: url('../assets/icons/icon_regular_action_con_rmation_result.png');
  background-size: cover;
}

.copyright_inner {
  @include sectioninner;
  border-top: 1px solid #dddddd;
  .copyright {
    padding: 15px 24px;
    font-size: 12px;
  }
}

@include B767 {
  .order_section_inner {
    .desc_wrapper {
      text-align: center;
    }
    h4 {
      font-size: 6.6666666vw;

      span {
        line-height: 1.23;
      }
    }
    .order_id {
      margin-top: 3.666666666vw;
      font-size: 3.3333333vw;
    }
    p {
      margin-top: 3.666666666vw;
      font-size: 3.3333333vw;
      span {
        color: #2189ff;
        text-decoration: underline;
        cursor: pointer;
      }
    }
    .order_button_wrapper {
      margin-top: 24px;
      button {
        padding: 8px 89px;
        font-size: 14px;

        &:nth-child(2) {
          margin-top: 3.666666666vw;
        }
      }
    }
  }
  .copyright_inner {
    @include sectioninner;
    border-top: 1px solid #dddddd;
    .copyright {
      padding: 15px 24px;
      font-size: 12px;
      em {
        display: block;
      }
    }
  }
}
</style>
