// import Vue from 'vue'
import low from 'lowdb';
import LocalStorage from 'lowdb/adapters/LocalStorage';
import cryptoRandomString from 'crypto-random-string';
import _find from 'lodash/find';
import _findIndex from 'lodash/findIndex';
import _assign from 'lodash/assign';
import _cloneDeep from 'lodash/cloneDeep';

const state = () => ({
  db: null,
  subscribes: [],
});

const getters = {
  subscribeLoad(state) {
    return state.subscribes;
  },
};

// methods 같은. (computed에 바인딩)
const mutations = {
  assignDB(state, db) {
    state.db = db;
  },
  createDB(state, newsubscribe) {
    state.db
      .get('subscribes')
      .push(newsubscribe)
      .write();
  },
  updateDB(state, { subscribe, value }) {
    state.db
      .get('subscribes')
      .find({ id: subscribe.id })
      .assign(value)
      .write();
  },
  deleteDB(state, subscribe) {
    state.db
      .get('subscribes')
      .remove({ cost: subscribe.cost })
      .write();
  },
  assignSubscribes(state, subscribes) {
    state.subscribes = subscribes;
  },
  pushSubscribe(state, newSubscribe) {
    state.subscribes.push(newSubscribe);
  },
  assignSubscribe(state, payload) {
    const { foundsubscribes, value } = payload;

    _assign(foundsubscribes, value);
  },
  updatesubscribe(state, { subscribe, key, value }) {
    subscribe[key] = value;
  },
  deleteSubscribe(state, index) {
    // Vue.delete(state.subscribe, index)
    state.subscribes.splice(index, 1);
  },
  updateFilter(state, filter) {
    state.filter = filter;
  },
};

const actions = {
  initSubscribeDB({ state, commit }) {
    const adapter = new LocalStorage('subscribes');
    commit('assignDB', low(adapter));

    const hasSubs = state.db.has('subscribes').value();
    console.log(hasSubs);
    if (hasSubs) {
      commit('assignSubscribes', _cloneDeep(state.db.getState().subscribes));
    } else {
      state.db
        .defaults({
          subscribes: [],
        })
        .write();
    }
  },
  createSubscribe({ state, commit }, cost) {
    const newSubscribe = {
      id: cryptoRandomString({ length: 10 }),
      cost,
    };

    try {
      commit('createDB', newSubscribe);

      commit('pushSubscribe', newSubscribe);
    } catch (error) {
      console.error(error);
    }
  },

  deleteSubscribe({ state, commit }, cost) {
    try {
      // DB에 저장
      commit('deleteDB', subscribes);

      const foundIndex = _findIndex(state.subscribes, { cost: cost });
      commit('deleteSubscribe', foundIndex);
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
