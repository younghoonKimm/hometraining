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
  bookMarks: [],
});

const getters = {
  bookMarkLoad(state) {
    return state.bookMark;
  },

  activeCount(state) {
    return state.bookMark.find((bookMark) => bookMark.title);
  },
};

// methods 같은. (computed에 바인딩)
const mutations = {
  assignDB(state, db) {
    state.db = db;
  },
  createDB(state, newBookMarks) {
    console.log(state.db);
    state.db
      .get('bookMarks')
      .push(newBookMarks)
      .write();
  },
  deleteDB(state, bookMark) {
    state.db
      .get('bookMarks')
      .remove({ title: bookMark.title })
      .write();
  },
  assignBookMarks(state, bookMarks) {
    state.bookMarks = bookMarks;
  },
  pushBookMarks(state, newBookMarks) {
    state.bookMarks.push(newBookMarks);
  },
  assignBookMarks(state, payload) {
    const { foundBookMarks, value } = payload;

    _assign(foundBookMarks, value);
  },
  deleteBookMarks(state, index) {
    // Vue.delete(state.subscribe, index)
    state.bookMarks.splice(index, 1);
  },
};

const actions = {
  initDB({ state, commit }) {
    const adapter = new LocalStorage('bookmark');
    commit('assignDB', low(adapter));

    const hasBookMark = state.db.has('bookMarks').value();

    if (hasBookMark) {
      commit('assignBookMarks', _cloneDeep(state.db.getState().bookMarks));
    } else {
      state.db
        .defaults({
          bookMarks: [],
        })
        .write();
    }
  },
  createBookMark({ state, commit }, title) {
    const foundBookMarks = _find(state.bookMarks, { title: title });
    const foundBookMarksIndex = _findIndex(state.bookMarks, { title: title });

    if (foundBookMarks) {
      commit('deleteDB', foundBookMarks);
      commit('deleteBookMarks', foundBookMarksIndex);
      return;
    }
    const newBookMarks = {
      id: cryptoRandomString({ length: 10 }),
      title,
    };

    try {
      commit('createDB', newBookMarks);

      commit('pushBookMarks', newBookMarks);
    } catch (error) {
      console.error(error);
    }
  },
  deleteBookMarks({ state, commit }, title) {
    try {
      // DB에 저장
      commit('deleteDB', bookMarks);

      const foundIndex = _findIndex(state.bookMarks, { title: title });
      commit('deleteBookMarks', foundIndex);
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
