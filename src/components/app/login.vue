<template>
  <div id="Login">
    <div class="vux-load">
      <loading v-model="showLoading" :text="loadText"></loading>
    </div>
    <div class="vux-demo">
      <!--<img class="logo" src="../assets/vux_logo.png">-->
      <h1>登录</h1>
    </div>
    <group>
      <x-input title="账号" v-model="userName"></x-input>
      <x-input title="密码" v-model="userPass"></x-input>
    </group>

    <group style="padding:5px 20px;">
      <x-button type="primary" action-type="button" @click.native="login">登录</x-button>
    </group>
  </div>
</template>

<script>
  import {Group, Cell, XInput, XButton, Loading} from 'vux'

  import store from '@/store/store'
  import api from '@/constant/api'
  import * as types from '@/store/types'

  export default {
    components: {
      Group,
      Cell,
      XInput,
      XButton,
      Loading
    },
    data() {
      return {
        userName: 'user001',
        userPass: '123456',
        showLoading: false,
        loadText: 'Loading'
      }
    },
    mounted(){  //页面加载完后 立即执行
      if (store.state.token){
        this.login();
      }
    },
    methods: {
      login() {
        let vue = this;
        if (store.state.token) {
          let redirect = decodeURIComponent(vue.$route.query.redirect || '/');
          if(redirect.startsWith('/login')){
            vue.$router.push({name: "home", path: "/home"});
          }else{
            vue.$router.push({
              path: redirect
            });
          }
        } else {
          vue.showLoading = true;
          let params = {
            'grant_type': 'password',
            'client_id': '2',
            'client_secret': 'm7PQ1gzWwaz696HhkUOnWTafhyBRIjSPGCokx2WD',
            'username': vue.userName,
            'password': vue.userPass,
            'scope': ''
          };
          vue.axios.post(api.login, params)
            .then(function (res) {
              vue.showLoading = false;
              let data = res.data; //JSON.stringify(res);
              if (data.code == 200) {
                //window.localStorage.setItem('token', data.data.token_type + ' ' + data.data.access_token);
                let token = data.data.token_type + ' ' + data.data.access_token;
                store.commit(types.LOGIN, token);
                vue.axios.post(api.userInfo, {})
                  .then(function (res) {
                    let uData = res.data;
                    if (uData.code == 200) {
                      let userInfo = uData.data;
                      store.commit(types.USER, JSON.stringify(userInfo));
                      //Vue.http.headers.common['Authorization'] = window.localStorage.getItem('token');
                      // 想要导航到不同的 URL，则使用 router.push 方法。这个方法会向 history 栈添加一个新的记录，
                      // 所以，当用户点击浏览器后退按钮时，则回到之前的 URL。

                      //全部重新加载 header.vue 会重新加载
                      window.location.reload();

                      //outer.push header.vue 不会重新加载
                      // let redirect = decodeURIComponent(vue.$route.query.redirect || '/');
                      // vue.$router.push({
                      //   path: redirect
                      // });

                      //vue.$router.push({name: "home", path: "/home"});

                    } else {
                      alert(uData.message);
                    }
                  })
                  .catch(function (err) {
                    alert('statusCode:' + err.status + '\n' + 'statusText:' + err.statusText + '\n' + 'description:\n' + JSON.stringify(err.responseJSON));
                  });
              } else {
                alert(data.message);
              }
            })
            .catch(function (err) {
              vue.showLoading = false;
              alert('statusCode:' + err.status + '\n' + 'statusText:' + err.statusText + '\n' + 'description:\n' + JSON.stringify(err.responseJSON));
            });
        }
      }
    }
  }

</script>

<style>
  .vux-load {
    z-index: 2;
  }

  .vux-demo {
    text-align: center;
    z-index: 1;
  }

  /*.logo {*/
  /*width: 100px;*/
  /*height: 100px*/
  /*}*/
</style>
