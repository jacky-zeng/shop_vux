<!--公用底部-->
<template>
  <div class="footer">
    <tabbar>
      <tabbar-item selected link="/home">
        <img slot="icon" src="static/bottom/icon_nav_button.png">
        <span slot="label">home</span>
      </tabbar-item>
      <tabbar-item show-dot link="/test1">
        <img slot="icon" src="static/bottom/icon_nav_msg.png">
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item selected link="/test2">
        <img slot="icon" src="static/bottom/icon_nav_article.png">
        <span slot="label">userInfo</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/test3">
        <img slot="icon" src="static/bottom/icon_nav_cell.png">
        <span slot="label">News</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, Group, Cell } from 'vux'

  export default {
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell
    }
  }
</script>
<style>
  .footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
  }
</style>
