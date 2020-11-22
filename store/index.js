import Vue from 'vue';
import Vuex from 'vuex';

import subscribe from './subscribe';
import bookMark from './bookMark';
import product from './product';
import login from './login';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    product,
    subscribe,
    bookMark,
    login,
  },
});
