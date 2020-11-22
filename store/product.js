// import Vue from 'vue'
import low from 'lowdb';
import LocalStorage from 'lowdb/adapters/LocalStorage';
import cryptoRandomString from 'crypto-random-string';
import _find from 'lodash/find';
import _findIndex from 'lodash/findIndex';
import _assign from 'lodash/assign';
import _cloneDeep from 'lodash/cloneDeep';
import _forEachRight from 'lodash/forEachRight';

const state = () => ({
  db: null,
  products: [],
});

const getters = {
  productsLoad(state) {
    return state.products;
  },
};

// methods 같은. (computed에 바인딩)
const mutations = {
  assignDB(state, db) {
    state.db = db;
  },
  createDB(state, newProduct) {
    state.db
      .get('products')
      .push(newProduct)
      .write();
  },

  deleteDB(state, product) {
    state.db
      .get('products')
      .remove({ cost: product.cost })
      .write();
  },
  assignProducts(state, products) {
    state.products = products;
  },
  pushProducts(state, newProduct) {
    state.products.push(newProduct);
  },
  assignProduct(state, payload) {
    const { foundProducts, value } = payload;

    _assign(foundProducts, value);
  },

  deleteProducts(state, index) {
    state.products.splice(index, 1);
  },
  updateFilter(state, filter) {
    state.filter = filter;
  },
};

const actions = {
  initProductDB({ state, commit }) {
    const adapter = new LocalStorage('products');
    commit('assignDB', low(adapter));

    const hasSubs = state.db.has('products').value();
    if (hasSubs) {
      commit('assignProducts', _cloneDeep(state.db.getState().products));
    } else {
      state.db
        .defaults({
          products: [],
        })
        .write();
    }
  },
  createProduct({ state, commit }, cost) {
    const newProduct = {
      id: cryptoRandomString({ length: 10 }),
      cost,
    };

    try {
      commit('createDB', newProduct);

      commit('pushProducts', newProduct);
    } catch (error) {
      console.error(error);
    }
  },

  deleteProducts({ state, commit }, cost) {
    try {
      // DB에 저장
      commit('deleteDB', products);

      const foundProducts = _findIndex(state.products, { cost: cost });
      commit('deleteProducts', foundProducts);
    } catch (error) {
      console.log(error);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
