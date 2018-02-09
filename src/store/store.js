/**
 * 全局token管理
 */
import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: localStorage.user,
    token: localStorage.token,
    title: ''
  },
  mutations: {
    [types.LOGIN]: (state, data) => {
      localStorage.token = data;
      state.token = data;
    },
    [types.LOGOUT]: (state) => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      state.token = null;
      state.user = {};
    },
    [types.USER]: (state, data) => {
      localStorage.user = data;
      state.user = data;
    }
  }
});
