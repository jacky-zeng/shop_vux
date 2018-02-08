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
    <img src="https://o5omsejde.qnssl.com/demo/test1.jpg?type=webp" style="width:100%">
    <br/><divider>我是有底线的</divider>
    <br/><br/>
  </div>
</template>

<script>
  import {Swiper, SwiperItem, Grid, GridItem, GroupTitle, Search, Divider } from 'vux'
  const baseList = [{
    url: '/test1',
    img: 'https://static.vux.li/demo/1.jpg',
    title: '送你一朵fua'
  }, {
    url: '/test2',
    img: 'https://static.vux.li/demo/2.jpg',
    title: '送你一辆车'
  }, {
    url: '/test3',
    img: 'https://static.vux.li/demo/3.jpg',
    title: '送你一次旅行'
  }]

  const urlList = baseList.map((item, index) => ({
    url: item.url,
    img: item.img,
    title: `(可点击)${item.title}`
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
        swiperItemIndex: 1
      }
    },
    methods: {
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
