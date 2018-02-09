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
import store from '../store/store';

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
          component: resolve => void(require(['../components/app/home.vue'], resolve))
        },
        {
          name: "home",
          path: '/home',
          component: resolve => void(require(['../components/app/home.vue'], resolve))
        },
        {
          name: "login",
          path: '/login',
          component: resolve => void(require(['../components/app/login.vue'], resolve))
        },
        {
          name: "test1",
          path: '/test1',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
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

vueRouter.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (store.state.token) {  // 通过vuex state获取当前的token是否存在
      //console.log('route token = ' + store.state.token);
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
});
