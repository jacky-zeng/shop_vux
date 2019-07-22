import api from '@/http/api'
import * as types from '../types'
import Vue from 'vue'

let vm = new Vue({});

// 容器
const state = {
    userInfo: localStorage.userInfo,
    token: localStorage.token,
    title: ''
}

const mutations = {
    [types.LOGIN]: (state, data) => {
        localStorage.token = data;
        state.token = data;
        //vm.axios.defaults.headers.Authorization = `${data}`;
    },
    [types.LOGOUT]: (state) => {
        localStorage.removeItem('token');
        localStorage.removeItem('userInfo');
        state.token = null;
        state.userInfo = {};
    },
    [types.USER_INFO]: (state, data) => {
        localStorage.userInfo = data;
        state.userInfo = data;
    }
}

// action提交mutations，不直接更改状态（通过store.dispatch触发）
const actions = {
    // 父组件发送异步请求
    getUserInfo(store) {
        return vm.axios.post(api.userInfo, {})  //必须return dispatch().then() 才能先执行dispatch 再执行then里的
            .then(function (res) {
                let uData = res.data;
                if (uData.code == 200) {
                    let userInfo = uData.data;
                    store.commit(types.USER_INFO, JSON.stringify(userInfo));
                } else {
                    alert(uData.message);
                }
            })
            .catch(function (err) {
                alert('statusCode:' + err.status + '\n' + 'statusText:' + err.statusText + '\n' + 'description:\n' + JSON.stringify(err.responseJSON));
            });
    },
}

export default {
    state,
    mutations,
    actions
}
