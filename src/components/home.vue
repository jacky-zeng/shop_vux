<template>
  <div id="Home">
    <swiper loop auto :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange"></swiper>
    <search position="absolute" auto-scroll-to-top top="46px" ref="search"></search>
          <!--@result-click="resultClick"-->
          <!--@on-change="getResult"-->
          <!--:results="results"-->
          <!--v-model="value"-->
          <!--@on-focus="onFocus"-->
          <!--@on-cancel="onCancel"-->
          <!--@on-submit="onSubmit"-->
    <divider>限时特卖</divider>
    <img src="../assets/images/product.jpeg" style="width:100%">
    <br/><divider>{{userInfo.name}} 我是有底线的</divider>
    <br/><br/>
  </div>
</template>

<script>
  import {Swiper, SwiperItem, Grid, GridItem, GroupTitle, Search, Divider } from 'vux'
  import store from '@/store/store'

  const baseList = [{
    url: '/test1',
    img: require('../assets/images/banner1.png'),
    title: '轮播一'
  }, {
    url: '/test2',
    img: require('../assets/images/banner2.png'),
    title: '轮播二'
  }, {
    url: '/test3',
    img: require('../assets/images/banner3.png'),
    title: '轮播三'
  }]

  const urlList = baseList.map((item, index) => ({
    url: item.url,
    img: item.img,
    title: `${item.title}`
  }))
  export default {
    components: {
      Swiper,
      SwiperItem,
      Grid,
      GridItem,
      GroupTitle,
      Search,
      Divider
    },
    data () {
      return {
        demo06_list: urlList,
        demo06_index: 0,
        swiperItemIndex: 1,
        userInfo:{name:''}
      }
    },
    mounted(){  //页面加载完后 立即执行
      this.getUserInfo();
    },
    methods: {
      getUserInfo() {
        if (store.state.user) {
          this.userInfo = store.state.user;
        }
      },
      onItemClick () {
        console.log('on item click')
      },
      demo06_onIndexChange (index) {
        this.demo06_index = index
      }
    }
  }
</script>
<style>
  .grid-center {
    display: block;
    text-align: center;
    color: #666;
  }
  .fadeInUp {
    animation-name: fadeInUp;
  }
  .swiper-demo-img img {
    width: 100%;
  }
</style>
