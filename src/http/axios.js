/**
 * http配置 & 全局token拦截
 */

import axios from 'axios'
import store from '../store/store'
import * as types from '../store/types'
import router from '../router'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://api.zengyanqi.com/api';

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (store.state.token) {
      config.headers.Authorization = `${store.state.token}`;        //token存入头部 全局http请求会加入这个token头
      // console.log('Authorization = '+config.headers.Authorization);
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

// http response 拦截器
axios.interceptors.response.use(
  response => {
    if(response.data.code == 401){  //登录授权失败
      store.commit(types.LOGOUT);
      router.replace({
        path: 'login',
        query: {redirect: router.currentRoute.fullPath}
      });
    }
    return response;
  },
  error => {
    store.commit(types.LOGOUT);
    router.replace({
      path: 'login',
      query: {redirect: router.currentRoute.fullPath}
    });
    return error;
  });

export default axios;
