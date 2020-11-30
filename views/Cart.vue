<template>
  <Fragment>
    <article class="notice_wrapper">
      <div class="notice_inner">
        <span class="bold">Free returns</span>
        <span>Free, easy and convenient returns.</span>
      </div>
    </article>
    <main id="main" role="main" class="myscription_main padding-bottom-0">
      <!-- <button type="button" @click="onSubmit()">구매하기</button> -->
      <section class="section_first">
        <div class="cart_section_inner section_inner">
          <div class="form">
            <form action="get">
              <input type="text" placeholder="Postcode" />
            </form>
            <button type="submit">Apply</button>
          </div>
          <div class="cart_selected_wapper">
            <div class="cart_product_wrapper">
              <div>
                <ul class="clearfix">
                  <li>
                    <a href="javascript:;" class="product_close"></a>
                    <figure>
                      <img src="../assets/card/image_product_cart_premiummembership.png" alt />
                    </figure>
                    <div class="cart_product_desc">
                      <h4>Samsung Home Fitness Service</h4>
                      <p>Premium membership</p>
                      <span>DF10T9701BT7Q1</span>
                      <p class="price">8 classes per month / $78.00</p>
                    </div>
                  </li>
                  <li>
                    <a href="javascript:;" class="product_close"></a>
                    <div class="select_option_btn">
                      <div class="option">1</div>
                    </div>
                    <figure>
                      <img src="../assets/card/image_product_cart_theserow_buds.png" alt />
                    </figure>
                    <div class="cart_product_desc">
                      <h5 class="web">
                        Buy together to Save even more when you buy (KQ43LST05B-MS)
                      </h5>
                      <h4>The Sero Space White + Galaxy Buds Live</h4>
                      <span>KQ43LST05B-MS</span>
                      <p class="price">$1,988.00</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="cart_cost_wapper">
              <div class="cart_cost_inner">
                <div class="cost_title">
                  <p>Order summary (2 Items)</p>
                </div>
                <div class="cost_option mobile">
                  <ul class="cost_list">
                    <li>
                      <span>Subtotal</span>
                      <span class="bold">$ 2,066.00</span>
                    </li>
                    <li>
                      <span>Discount</span>
                      <span class="bold">$ 0</span>
                    </li>
                    <li>
                      <span>Shipping</span>
                      <span class="bold">$ 0</span>
                    </li>
                    <li>
                      <span>Estimated taxi</span>
                      <span class="bold">$ 0</span>
                    </li>
                  </ul>
                </div>
                <div class="cost_box">
                  <h4 class="sansbold">Total $ 2,066.00</h4>
                  <p>(VAT Included)</p>
                  <button type="button" @click="$router.push('/order')">Checkout</button>
                  <a class="save_btn bold" href="javascript">
                    <i class="mail_icon"></i> Save this cart
                  </a>
                </div>
                <div class="cost_option web">
                  <ul class="cost_list">
                    <li>
                      <span>Subtotal</span>
                      <span class="bold">$ 2,066.00</span>
                    </li>
                    <li>
                      <span>Discount</span>
                      <span class="bold">$ 0</span>
                    </li>
                    <li>
                      <span>Shipping</span>
                      <span class="bold">$ 0</span>
                    </li>
                    <li>
                      <span>Estimated taxi</span>
                      <span class="bold">$ 0</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="policy_wrapper">
                By submitting your order, you agree to the
                <a class="link" href="javascript:;">Terms & conditions</a> and we <br />will use
                your personal data in accordance with our
                <a class="link" href="javascript:;">Privacy policy.</a>

                <p class="web">Order ID : QS929201</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductSlider />
      <article class="support_wrapper">
        <div class="support_inner">
          <h5 class="bold">Supported payment types</h5>
          <div class="support_card_wrapper">
            <ul>
              <li>
                <img src="../assets/card/visa.png" alt="visa" />
              </li>
              <li>
                <img src="../assets/card/masetro.png" alt="visa" />
              </li>
              <li>
                <img src="../assets/card/mastercard.png" alt="visa" />
              </li>
              <li>
                <img src="../assets/card/american_express.png" alt="visa" />
              </li>
              <li>
                <img src="../assets/card/samsung_pay.png" alt="visa" />
              </li>
              <li>
                <img src="../assets/card/paypal.png" alt="visa" />
              </li>
              <li>
                <img src="../assets/card/paypal_credit.png" alt="visa" />
              </li>
              <li>
                <img src="../assets/card/adyen.png" alt="visa" />
              </li>
              <li>
                <img src="../assets/card/klarna.png" alt="visa" />
              </li>
            </ul>
          </div>
          <div class="info">
            <p>Any questions, call 0330 7267 467</p>

            <p>
              <span>
                What is your policy regarding
                <a href="javascript:;">returns?</a>
              </span>
              <span>
                When can I expect my
                <a href="javascript:;">order?</a>
              </span>
            </p>

            <p>Copyright© 1995-2019 SAMSUNG. All rights reserved</p>
          </div>
        </div>
        <div class="subject_wrapper">
          <div class="subject_inner">
            <span>
              Subject to Status. Terms and Conditions apply. Samsung Electronics UK LTD acts as a
              broker and offers finance from a restricted range of finance providers.
            </span>
            <span>
              PayPal Credit is a trading name of PayPal (Europe) S.à r.l. et Cie, S.C.A., 22-24
              Boulevard Royal L-2449, Luxembourg.
            </span>
            <span>Representative Example</span>
            <span>
              £1,200 Assumed Credit Limit Representative 19.9% APR (variable).19.9% pa Purchase Rate
              (variable).
            </span>
          </div>
        </div>
      </article>
    </main>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';
import { dummyProduct } from '../config';
import './MyScriptions.scss';
import ProductSlider from '../components/slider/ProductSlider';

export default {
  created() {},

  data() {
    return {};
  },

  components: {
    Fragment,
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
.notice_wrapper {
  position: sticky;
  top: 0;
  padding: 15px 0 14px;
  width: 100%;
  display: flex;
  justify-content: center;
  background: #2189ff;
  font-size: 14px;
  color: #fff;
  z-index: 5;
  .notice_inner {
    @include sectioninner;
  }
}
.form {
  padding: 38px 24px 40px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  button {
    padding: 8px 32px;
    font-size: 12px;
    color: #aaaaaa;
    background: #dddddd;
    border-radius: 16px;
    font-weight: 700;
  }
}
input {
  width: 242px;
  margin-right: 16px;
  padding-bottom: 6px;
  border: none;
  border-bottom: 1px solid #bbbbbb;
  &::placeholder {
    color: #bbbbbb;
    font-size: 18px;
  }
}

.cart_selected_wapper {
  padding: 0 24px;
  display: flex;
  width: 100%;

  .cart_product_wrapper {
    max-width: 920px;
    flex: 2.1;
    margin-right: 24px;
    padding: 0 24px;

    width: 100%;
    li {
      position: relative;
      width: 100%;
      padding: 13px 0 22px;
      border-top: 1px solid #dddddd;
      display: flex;
    }
    .product_close {
      position: absolute;
      right: 0;
      top: 16px;
      display: block;
      width: 16px;
      height: 16px;
      background-image: url('../assets/card/icon_regular_action_cancel_close.png');
      background-size: cover;
    }
    .select_option_btn {
      position: absolute;
      right: 0;
      bottom: 31px;
      width: 104px;
      border-radius: 100px;
      border: 1px solid #ddd;
      &::after,
      &::before {
        position: absolute;
        top: 10px;
        content: '';
        display: block;
        width: 12px;
        height: 12px;
        background-size: cover;
        cursor: pointer;
      }
      &::after {
        right: 8px;

        background-image: url('../assets/card/icon_bold_action_plus.png');
      }

      &::before {
        left: 8px;

        background-image: url('../assets/card/icon_bold_action_minus.png');
      }

      .option {
        position: relative;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 32px;
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
        font-size: 14px;
      }
    }
    figure {
      margin-left: 72px;
      max-width: 94px;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .cart_product_desc {
      margin-left: 24px;
      @include SansBold;
      h5 {
        font-size: 14px;
      }
      h4 {
        @include SansBold;
        font-size: 16px;
      }
      span {
        font-weight: 400;
        font-size: 12px;
      }
      p {
        font-size: 14px;
        &.price {
          font-size: 24px;
        }
      }
    }
  }
  .cart_cost_wapper {
    max-width: 424px;
    flex: 1;
    .cart_cost_inner {
      padding: 16px 24px 16px;
      width: 100%;
      background: #f7f7f7;
      border-radius: 20px;
      .cost_title {
        display: flex;
        align-items: center;
        padding-bottom: 16px;
        border-bottom: 1px solid #dddddd;
        font-size: 14px;
        font-weight: 700;
      }
    }
    .cost_box {
      padding: 16px 0 24px;
      text-align: center;
      border-bottom: 1px solid #dddddd;
      h4 {
        font-size: 24px;
      }
      p {
        font-weight: 700;
        font-size: 12px;
      }
      button {
        padding: 8px 118.5px;
        margin-top: 24px;
        font-size: 14px;
        background: #2189ff;
        color: #fff;
        font-weight: 700;
        border-radius: 20px;
      }
    }
    .save_btn {
      margin-top: 17px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      i {
        margin-right: 4px;
        display: inline-block;
        width: 16px;
        height: 16px;
        background-image: url('../assets/icons/icon_bold_communication_email_outline.png');
        background-size: cover;
      }
    }
    .cost_option {
      padding-top: 16px;
      .cost_list {
        margin-bottom: 8px;
        li {
          font-size: 14px;
          margin-bottom: 6px;
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}
.support_wrapper {
  position: relative;
  margin-top: 84px;
  h5 {
    font-size: 18px;
  }
  .support_inner {
    margin: 0 auto;
    max-width: 1440px;
    padding: 0 24px;
  }
  .support_card_wrapper {
    margin-top: 17px;
    ul {
      display: flex;
    }
    li {
      margin-right: 24px;
      height: 21px;
      &:last-child {
        margin-right: 0;
      }
      img {
        height: 100%;
      }
    }
  }
  .info {
    margin-top: 18px;
    p {
      font-size: 12px;
      span {
        display: block;
      }
      a {
        @include link;
      }
      &:nth-child(2) {
        margin: 15px 0;
      }
    }
  }
  .subject_wrapper {
    border-top: 1px solid #dddddd;
    background: #f4f4f4;
    margin: 28px auto 0;
    max-width: 1440px;
    padding: 0 24px;
    padding: 34px 24px;
    font-size: 12px;
    .subject_inner {
      span {
        display: inline-block;
        width: 100%;
      }
    }
  }
}

.policy_wrapper {
  padding: 16px 24px 0;
  font-size: 12px;
  text-align: center;
  .link {
    @include link;
  }
  p {
    margin-top: 7px;
    font-size: 14px;
  }
}
@include B768-1440 {
  .form {
    button {
      font-size: 0.77777777vw;
    }
  }
  input {
    &::placeholder {
      font-size: 1.25vw;
    }
  }
  .cart_selected_wapper {
    .cart_product_wrapper {
      padding: 0 1.66666667vw;
      .cart_product_desc {
        margin-left: 1.66666667vw;

        h4 {
          font-size: 1.25vw;
        }
        h5 {
          font-size: 0.9722222vw;
        }
        p {
          font-size: 0.9722222vw;
          &.price {
            font-size: 1.66666667vw;
          }
        }
      }
      figure {
        margin-left: 4vw;
      }
    }
    .cart_cost_wapper {
      max-width: 29.2222vw;
      .cart_cost_inner {
        p {
          font-size: 0.9722222vw;
        }
        h4 {
          font-size: 1.66666667vw;
        }
      }
      .cost_option {
        .cost_list {
          li {
            font-size: 0.9722222vw;
          }
        }
      }
      .save_btn {
        font-size: 1.111111vw;
      }
      .cost_box {
        button {
          padding: 8px 7.7vw;
          font-size: 0.9722222vw;
        }
      }
      .policy_wrapper {
        font-size: 0.7777777vw;
        p {
          font-size: 0.9722222vw;
        }
      }
    }
  }
  .support_wrapper {
    h5 {
      font-size: 1.25vw;
    }
    .support_card_wrapper {
      li {
        margin-right: 1.666667vw;
        height: 1.3vw;
        min-height: 16px;
      }
    }
    .info {
      p {
        font-size: 0.777777vw;
      }
    }
    .subject_wrapper {
      margin: 1.95vw 0 0;
      font-size: 0.777777vw;
      padding: 2vw 24px;
    }
  }
}

@include B767 {
  .notice_wrapper {
    font-size: 3.33333vw;
    span {
      display: block;
    }
  }
  .form {
    display: none;
  }

  .support_wrapper {
    position: relative;
    margin-top: 84px;
    h5 {
      font-size: 3.888888vw;
    }
    .support_inner {
      margin: 0 auto;
      max-width: 1440px;
      padding: 0 24px;
    }
    .support_card_wrapper {
      margin-top: 4vw;
      ul {
        display: flex;
      }
      li {
        height: 2.5vw;
        margin-right: 2.5vw;

        &:last-child {
          margin-right: 0;
        }
        img {
          height: 100%;
        }
      }
    }
    .info {
      margin-top: 6.5vw;
      p {
        font-size: 2.5vw;
        span {
          display: block;
        }
        &:nth-child(2) {
          margin: 3vw 0;
        }
      }
    }
    .subject_wrapper {
      border-top: 1px solid #dddddd;
      background: #f4f4f4;
      margin: 6.8888888vw auto 0;
      padding: 6.99999999vw 24px;
      font-size: 2.5vw;
      .subject_inner {
        span {
          display: inline-block;
          width: 100%;
        }
      }
    }
  }
  .cart_selected_wapper {
    display: block;
    padding: 0;
    .cart_product_wrapper {
      max-width: none;
      margin-right: 0;
      flex: none;
      padding: 0 24px;
      line-height: 1.4;
      li {
        padding: 16px 0 52px;
        height: 56vw;
        &:first-child {
          border-top: none;
        }
      }
      .select_option_btn {
        bottom: 4.444444vw;
      }
      figure {
        position: absolute;
        right: 0;
        top: 32px;
        margin-left: 0;
        max-width: none;
        width: 26.11111111vw;
        height: 26.11111111vw;
      }
      .cart_product_desc {
        margin-top: 32px;
        margin-left: 0;
        width: 54vw;
        h4 {
          font-size: 4.444444vw;
        }
        span {
          font-size: 2.5vw;
        }
        p {
          font-size: 3.33333333vw;
          &.price {
            white-space: nowrap;
            font-size: 3.888888888vw;
          }
        }
      }
    }
    .cart_cost_wapper {
      max-width: none;
      flex: none;
      .cart_cost_inner {
        padding: 3.333333vw 24px 3.333333vw;
        width: 100%;
        border-radius: 0;
        .cost_title {
          padding-bottom: 3.333333vw;
          font-size: 3.333333vw;
        }
      }
      .cost_box {
        padding: 12px 0 12px;
        border-top: 1px solid #dddddd;
        border-bottom: none;
        h4 {
          font-size: 4.666666vw;
          text-align: left;
        }
        p {
          text-align: left;
          font-size: 2.5vw;
        }
        button {
          padding: 2.66666vw 33.555555vw;
          margin-top: 4.44444vw;
          font-size: 3.666666vw;
          border-radius: 6.5vw;
        }
      }
      .save_btn {
        margin-top: 17px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        i {
          margin-right: 4px;
          display: inline-block;
          width: 16px;
          height: 16px;
          background-image: url('../assets/icons/icon_bold_communication_email_outline.png');
          background-size: cover;
        }
      }
      .cost_option {
        padding-top: 12px;
        .cost_list {
          margin-bottom: 12px;
          li {
            margin-bottom: 0;
            font-size: 3.333333vw;
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
  }
  .policy_wrapper {
    padding: 12px 24px 0;
    font-size: 2.5vw;
    text-align: center;
  }
}
</style>
