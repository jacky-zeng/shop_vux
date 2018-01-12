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
        menuList: [
          {title: 'userInfo', value: '', url: '/userInfo'},
          {title: '', value: 'userInfo', url: '/userInfo', class: 'menu'},
          {title: 'userInfo', value: '', url: '/userInfo'},
          {title: '', value: 'userInfo', url: '/userInfo', class: 'menu'}
        ],
        showMenus: false
      }
    },
    methods: {
      goToUrl (path) {
        if (path) {
          console.log(path)
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
