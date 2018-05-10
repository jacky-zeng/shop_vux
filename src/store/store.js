//store.js
import Vue from 'vue'
import Vuex from 'vuex'

// 用户相关
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user
  }
});
