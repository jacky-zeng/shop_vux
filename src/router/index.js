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

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
    saveScrollPosition: true,
    routes: [
        {
            name: "home",
            path: '/',
            component: resolve =>void(require(['../components/app/home.vue'], resolve))
        },
        {
            name: "home",
            path: '/home',
            component: resolve =>void(require(['../components/app/home.vue'], resolve))
        },
        {
            name: "test1",
            path: '/test1',
            component: resolve =>void(require(['../components/app/test1.vue'], resolve))
        },
        {
            name: "test2",
            path: '/test2',
            component: resolve =>void(require(['../components/app/test2.vue'], resolve))
        },
        {
            name: "test3",
            path: '/test3',
            component: resolve =>void(require(['../components/app/test3.vue'], resolve))
        }
    ]
})