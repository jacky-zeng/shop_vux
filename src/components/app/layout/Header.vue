<!--公用头部-->
<template>
  <div id="Header">
    <x-header slot="header" style="background-color:#000;width:100%;position:absolute;left:0;top:0;z-index:100;"
              :left-options="{showBack: '', backText: ''}" :right-options="{showMore: true}"
              @on-click-more="showMenus = true">{{title}}
    </x-header>

    <div v-transfer-dom>
      <popup v-model="showMenus" position="right">
        <div style="width:200px;">
          <group>
            <cell v-for="(menu,value) in menuList" :title="menu.title" :value="menu.value"
                  @click.native="goToUrl(menu.url)" :class="menu.class" v-bind:key="menu.key"></cell>
          </group>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
  import {XHeader, Popup, Group, Cell, TransferDom } from 'vux'
  import store from '@/store/store'          //'@': resolve('src')
  import api from '@/constant/api'
  import * as types from '@/store/types'

  export default {
    directives: {
      TransferDom
    },
    components: {
      XHeader,
      Popup,
      Group,
      Cell
    },
    computed: {
    },
    data () {
      return {
        title: 'Demo',
        menuList: [],
        showMenus: false
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        if (store.state.user) {
          let userInfo = JSON.parse(store.state.user);
          this.menuList = [
            {title: userInfo.name+'', value: '', url: ''},
            {title: '', value: '退出', url: '', class: 'menu'},
          ];
        }else{
          this.menuList = [
            {title: '您好', value: '', url: ''},
            {title: '', value: '请登录', url: '/login', class: 'menu'},
          ];
        }
      },
      goToUrl (path) {
        let vue = this;
        if (path) {
          vue.showMenus = false;
          vue.$router.push({path: path});
          console.log(path);
        }else{
          vue.axios.post(api.logout, [])
            .then(function (res) {
              let data = res.data;
              if (data.code == 200) {
                store.commit(types.LOGOUT);
                vue.menuList = [
                  {title: '您好', value: '', url: ''},
                  {title: '', value: '请登录', url: '/login', class: 'menu'},
                ];
                vue.showMenus = false;
                vue.$router.push({name: "login", path: "/login"});
              } else {
                alert(data.message);
              }
            })
            .catch(function (err) {
              alert('statusCode:' + err.status + '\n' + 'statusText:' + err.statusText + '\n' + 'description:\n' + JSON.stringify(err.responseJSON));
            });
        }
      }
    }
  }
</script>
<style>
  *{font-size: 14px}
  #Header .vux-header-title {
    font-size: 16px;
  }
  #Header .menu {
    margin-right: 70px;
  }
  #Header .menu div {
    color: #000;
  }
  #Header .menu:before {
    right: -70px;
  }
</style>
