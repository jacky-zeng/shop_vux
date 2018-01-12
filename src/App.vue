<!--公用模板页面-->
<template>
  <div id="Init">
    <app-header class="Header"></app-header>
    <router-view>
      <!--vue路由切换时，更新的就是这个里面的内容-->
    </router-view>
    <div class="content">
       <router-link to="/test1">test1</router-link>
       <router-link to="/test2">test2</router-link>
       <router-link to="/test3">test3</router-link>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
   import AppHeader from './components/app/layout/Header'
   import AppFooter from './components/app/layout/Footer'
   export default {
     components: {
         AppHeader,
         AppFooter
     }
   }
</script>

<style>
  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    background-color: #fbf9fe;
  }
  #Init .Header{margin-bottom: 46px;}
</style>

<style lang="less">
  @import '~vux/src/styles/reset.less';
</style>

