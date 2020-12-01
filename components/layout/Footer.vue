<template>
  <footer id="footer">
    <div class="footer-inner" :class="path === '/order'? 'footer-none':'' ">
      <h2 class="blind">페이지 링크</h2>
      <ul class="footer_list clearfix">
        <li>
          <h3>
            <a href="javascript:;">Product & Service</a>
          </h3>
          <ul class="clearfix">
            <li>
              <a href="javascript:;">Smartphones</a>
            </li>
            <li>
              <a href="javascript:;">Tablets</a>
            </li>
            <li>
              <a href="javascript:;">Audio Sound</a>
            </li>
            <li>
              <a href="javascript:;">Watches</a>
            </li>
            <li>
              <a href="javascript:;">TVs</a>
            </li>
            <li>
              <a href="javascript:;">Lifestyle TVs</a>
            </li>
            <li>
              <a href="javascript:;">Refrigerators</a>
            </li>
            <li>
              <a href="javascript:;">Laundry</a>
            </li>
            <li>
              <a href="javascript:;">Cooking Appliances</a>
            </li>
            <li>
              <a href="javascript:;">Monitors</a>
            </li>
            <li>
              <a href="javascript:;">Memory Storage</a>
            </li>
            <li>
              <a href="javascript:;">Sound Devices</a>
            </li>
          </ul>
        </li>
        <li>
          <h3>
            <a href="javascript:;">Shop</a>
          </h3>
          <ul class="clearfix">
            <li>
              <a href="javascript:;">All offers</a>
            </li>
            <li>
              <a href="javascript:;">Contract phones</a>
            </li>
            <li>
              <a href="javascript:;">Trade in deals</a>
            </li>
            <li>
              <a href="javascript:;">Upgrade Programme</a>
            </li>
            <li>
              <a href="javascript:;">Track your order</a>
            </li>
            <li>
              <a href="javascript:;">Help & support FAQs</a>
            </li>
            <li>
              <a href="javascript:;">Privacy (Online shop)</a>
            </li>
          </ul>
        </li>
        <li>
          <h3>
            <a href="javascript:;">Support</a>
          </h3>
          <ul class="clearfix">
            <li>
              <a href="javascript:;">Solutions, manuals & downloads</a>
            </li>
            <li>
              <a href="javascript:;">Book a repair</a>
            </li>
            <li>
              <a href="javascript:;">Track my repair</a>
            </li>
            <li>
              <a href="javascript:;">Warranty information</a>
            </li>
            <li>
              <a href="javascript:;">How to guides</a>
            </li>
            <li>
              <a href="javascript:;">Contact us</a>
            </li>
          </ul>
        </li>
        <li>
          <h3>
            <a href="javascript:;">Account & Community</a>
          </h3>
          <ul class="clearfix">
            <li>
              <a href="javascript:;">My page</a>
            </li>
            <li>
              <a href="javascript:;">My products</a>
            </li>
            <li>
              <a href="javascript:;">Support</a>
            </li>
            <li>
              <a href="javascript:;">Wishlist</a>
            </li>
            <li>
              <a href="javascript:;">Subscriptions</a>
            </li>
            <li>
              <a href="javascript:;">Members</a>
            </li>
            <li>
              <a href="javascript:;">Rewards</a>
            </li>
            <li>
              <a href="javascript:;">Vouchers</a>
            </li>
            <li>
              <a href="javascript:;">Service</a>
            </li>
            <li>
              <a href="javascript:;">Community</a>
            </li>
          </ul>
        </li>
        <li>
          <h3>
            <a href="javascript:;">Company</a>
          </h3>
          <ul class="clearfix">
            <li>
              <a href="javascript:;">About us</a>
            </li>
            <li>
              <a href="javascript:;">Find a store</a>
            </li>
            <li>
              <a href="javascript:;">Experience stores</a>
            </li>
            <li>
              <a href="javascript:;">News</a>
            </li>
            <li>
              <a href="javascript:;">Corporate citizenship</a>
            </li>
            <li>
              <a href="javascript:;">Modern Slavery Act Statement</a>
            </li>
            <li>
              <a href="javascript:;">Careers</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="footer-inner" :class="path === '/order'? 'footer-none':'' ">
      <p>Copyright© 1995-2020 SAMSUNG All Rights Reserved.</p>
      <h3 class="mobile bold">
        United Kingdom/English
        <i class="arrow"></i>
      </h3>
      <figure>
        <img src="../../assets/icons/local_logo_uk.png" alt="logo_uk" />
      </figure>
    </div>
    <div class="footer-inner">
      <h3 class="bold">United Kingdom/English</h3>
      <ul class="privacy_list">
        <li>Accessibility Help</li>
        <li>Terms and Conditions</li>
        <li>Privacy</li>
        <li>Privacy (Online shop)</li>
        <li>Cookies</li>
        <li>Legal</li>
        <li>Sitemap</li>
      </ul>
      <div class="icons_wrapper">
        <p>Stay in the Loop?</p>
        <ul class="sns">
          <li></li>
          <li class="twit"></li>
          <li class="inst"></li>
          <li class="youtube"></li>
          <li class="google"></li>
          <li class="social"></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    path: String,
  },
};
</script>


<style lang="scss">
@import "scss/mixins.scss";
#footer {
  position: relative;

  .footer-inner {
    position: relative;
    padding: 0 24px;
    margin: 0 auto;
    max-width: 1440px;
    border-top: 1px solid #d9d9d9;
    &.footer-none {
      display: none;
      &:nth-child(2) {
        display: none;
      }
    }
    .footer_list {
      display: flex;
      flex-direction: row;
      > li {
        flex: 1;
        padding: 0 24px 24px;
        border-right: 1px solid #d9d9d9;
        &:first-child {
          padding: 0 24px 24px 0;
        }
        &:last-child {
          padding: 0 0 24px 24px;
          border-right: none;
        }
        &.over {
          flex: 2;
          > ul {
            width: 50%;
          }
        }
        ul {
          float: left;
        }
        h3 {
          display: block;

          padding: 16px 0;
          line-height: 1.33;
          font-weight: 700;
          a {
            padding: 0;
            font-size: 18px;
          }
        }
        a {
          display: block;
          padding: 7px 24px 7px 0;
          font-size: 14px;
          line-height: 1.33;
          color: #000;
        }
      }
    }
    &:nth-child(2) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 24px;
      p {
        font-size: 12px;
      }
      figure {
        max-width: 188px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    &:nth-child(3) {
      display: flex;
      font-size: 12px;
      align-items: center;
      padding: 19.5px 24px;
      h3 {
        font-size: 12px;
        position: relative;
        padding-right: 24px;
        &:after {
          content: "";
          display: block;
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 12px;
          background: #ddd;
        }
      }
      ul {
        display: flex;
      }
      .privacy_list {
        li {
          margin-left: 24px;
        }
        margin-right: auto;
      }
      .icons_wrapper {
        display: flex;
        align-items: center;
      }
      .sns {
        li {
          margin-left: 16px;
          width: 24px;
          height: 24px;
          background-image: url("../../assets/sns/icon_bold_social_facebook.png");
          background-size: cover;
          background-repeat: no-repeat;
          &.twit {
            background-image: url("../../assets/sns/icon_bold_social_twitter.png");
          }
          &.inst {
            background-image: url("../../assets/sns/icon_bold_social_instagram.png");
          }
          &.youtube {
            background-image: url("../../assets/sns/icon_bold_social_youtube.png");
          }
          &.google {
            background-image: url("../../assets/sns/icon_bold_social_google.png");
          }
          &.social {
            background-image: url("../../assets/sns/icon_bold_social_linked_in.png");
          }
        }
      }
    }
  }
}
@include B768-1440 {
  #footer {
    .footer-inner {
      max-width: unset;
      .footer_list {
        > li {
          padding: 0 1.6667vw 1.6667vw;
          &:first-child {
            padding: 0 1.6667vw 1.6667vw 0;
          }
          &:last-child {
            padding: 0 0 1.6667vw 1.6667vw;
          }
          ul {
            float: left;
          }
          h3 {
            padding: 1.1111vw 0;
            a {
              padding: 0;
              font-size: 1.25vw;
            }
          }
          a {
            padding: 0.4861vw 1.6667vw 0.4861vw 0;
            font-size: 0.9722vw;
          }
        }
      }
      &:nth-child(2) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 24px;
        p {
          font-size: 0.8333vw;
        }
        figure {
          max-width: 13.0556vw;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      &:nth-child(3) {
        display: flex;
        font-size: 0.8333vw;
        align-items: center;
        padding: 1.3542vw 1.6667vw;
        font-size: 0.8333vw;
        h3 {
          padding-right: 1.6667vw;

          &:after {
            width: 1px;
            height: 12px;
          }
        }
        ul {
          display: flex;
        }
        .privacy_list {
          li {
            margin-left: 1.44444vw;
            &:nth-child(2) {
              display: none;
            }
          }
        }
        .sns {
          li {
            margin-left: 1.1111vw;
            width: 1.6667vw;
            height: 1.6667vw;
            background-image: url("../../assets/sns/icon_bold_social_facebook.png");
            background-size: cover;
            background-repeat: no-repeat;
            &.twit {
              background-image: url("../../assets/sns/icon_bold_social_twitter.png");
            }
            &.inst {
              background-image: url("../../assets/sns/icon_bold_social_instagram.png");
            }
            &.youtube {
              background-image: url("../../assets/sns/icon_bold_social_youtube.png");
            }
            &.google {
              background-image: url("../../assets/sns/icon_bold_social_google.png");
            }
            &.social {
              background-image: url("../../assets/sns/icon_bold_social_linked_in.png");
            }
          }
        }
      }
    }
  }
}

@include B767 {
  #footer {
    .footer-inner {
      &.footer-none {
        &:nth-child(2) {
          display: block;
          border-top: none;
          p {
            display: none;
          }
        }
      }
      .footer_list {
        display: flex;
        flex-direction: column;
        > li {
          flex: 1;
          padding: 0;
          border-bottom: 1px solid #ddd;
          border-right: none;
          font-size: 4.4444vw;
          &:first-child {
            padding: 0;
          }
          &:last-child {
            padding: 0;
            border-bottom: none;
          }
          &.over {
            flex: 2;
            > ul {
              width: 50%;
            }
          }
          ul {
            display: none;
          }
          h3 {
            display: block;

            padding: 16px 0;
            line-height: 1.33;
            font-weight: 700;
            a {
              padding: 0;
              font-size: 18px;
            }
          }
          a {
            display: block;
            padding: 7px 24px 7px 0;
            font-size: 14px;
            line-height: 1.33;
            color: #000;
          }
        }
      }
      &:nth-child(2) {
        display: block;
        padding: 3.3333vw 24px;
        p {
          margin-top: 5.5556vw;
          margin-bottom: 8.8889vw;
          font-size: 3.33333vw;
        }
        h3 {
          font-size: 3.33333vw;
          margin-bottom: 6.6667vw;
          cursor: pointer;
          i {
            margin-top: -0.5px;
            display: inline-block;
            width: 4.44444vw;
            height: 4.44444vw;
            background-image: url("../../assets/icons/icon_regular_navigation_next.png");
            background-size: cover;
            vertical-align: middle;
          }
        }
        figure {
          max-width: 188px;
        }
      }
      &:nth-child(3) {
        display: flex;
        font-size: 3.3333vw;
        flex-wrap: wrap;
        flex-direction: column-reverse;
        padding: 0 24px 11.1111vw;
        border-top: none;
        h3 {
          display: none;
        }
        ul {
          display: flex;
        }
        .privacy_list {
          margin-top: 4.4444vw;
          padding: 0 2.2222vw;
          flex-wrap: wrap;
          justify-content: space-between;
          li {
            margin-left: 0;
          }
          margin-right: auto;
        }
        .icons_wrapper {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          flex-direction: column;
          justify-content: center;
        }
        .sns {
          margin-top: 6.6667vw;
          li {
            margin-left: 4.4444vw;
            width: 6.6667vw;
            height: 6.6667vw;
          }
        }
      }
    }
  }
}
</style>