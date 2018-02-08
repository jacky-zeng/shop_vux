// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
//
// Vue.use(Router)
//
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 回退实现右侧动画滑出  eg:test1.vue页面调用了这个方法
VueRouter.prototype.goBack = function () {
  this.isBack = true;
  this.go(-1);
};

// 路由
const vueRouter = new VueRouter({
  saveScrollPosition: true,
  routes: [
    {
      path: '/',
      name: 'page',
      component: resolve => void(require(['../components/app/transition/page.vue'], resolve)), // 引入页面切换组件
      children: [
        {
          name: "home",
          path: '/',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component: resolve => void(require(['../components/app/home.vue'], resolve))
        },
        {
          name: "home",
          path: '/home',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component: resolve => void(require(['../components/app/home.vue'], resolve))
        },
        {
          name: "test1",
          path: '/test1',
          component: resolve => void(require(['../components/app/test1.vue'], resolve))
        },
        {
          name: "test2",
          path: '/test2',
          component: resolve => void(require(['../components/app/test2.vue'], resolve))
        },
        {
          name: "test3",
          path: '/test3',
          component: resolve => void(require(['../components/app/test3.vue'], resolve))
        }
      ]
    }
  ]
});

export default vueRouter;
