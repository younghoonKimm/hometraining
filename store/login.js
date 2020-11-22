import {
  saveAuthToCookie,
  saveUserToCookie,
  saveReservationToCookie,
  getAuthFromCookie,
  getUserFromCookie,
  getReservationFromCookie,
  deleteCookie,
} from '../utils/cookies';

const state = () => ({
  username: getUserFromCookie() || '',
  token: getAuthFromCookie() || '',
  reservation: getReservationFromCookie() || '',
  isLogedIn: false,
});

const getters = {
  isLogin(state) {
    return state.username != '';
  },
};

const mutations = {
  setUsername(state, username) {
    state.username = username;
  },
  clearUsername(state) {
    state.username = '';
  },
  setToken(state, token) {
    state.token = token;
  },
  setResrvation(state, value) {
    state.reservation = value;
  },
  clearToken(state) {
    state.token = '';
  },
};

const actions = {
  LOGIN({ commit }, idInfo) {
    // save at cookie
    if (idInfo.username === 'kxkm04@hanmail.net') {
      const nickname = '김영훈';
      const token = 'Samsunglogin';
      saveAuthToCookie(token);
      saveUserToCookie(nickname);
      commit('setToken', token);
      commit('setUsername', nickname);
      state.isLoggedIn = true;
      return;
    } else {
      throw new Error('다시 확인해주세요');
    }
  },
  LOGOUT({ commit }) {
    commit('clearToken', 'token');
    commit('setUsername', 'nickname');
    deleteCookie('user');
    deleteCookie('auth');
    deleteCookie('reservation');
    window.localStorage.clear();
    return;
  },
  RESERVATIONINIT({ commit }) {
    const firstReservationValue = 8;
    saveReservationToCookie(firstReservationValue);
    commit('setResrvation', firstReservationValue);
  },
  CHANGERESERVATION({ commit }) {
    const changeReservationValue = 7;
    saveReservationToCookie(changeReservationValue);
    commit('setResrvation', changeReservationValue);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
