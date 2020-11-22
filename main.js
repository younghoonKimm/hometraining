import Vue from 'vue';
import { Plugin } from 'vue-fragment';
import App from './App';
import router from './router';
import store from './store';

import './scss/normalize.scss';
import './scss/index.scss';
import 'swiper/swiper-bundle.css';

// router.beforeLeave((to, from, next) => {
//   console.log(2);
//   const answer = window.confirm('Do you really want to leave? you have unsaved changes!');
//   if (answer) {
//   } else {
//     next(false);
//   }
// });
// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  store,
  Plugin,
  render: (h) => h(App), // https://css-tricks.com/what-does-the-h-stand-for-in-vues-render-method/
});
