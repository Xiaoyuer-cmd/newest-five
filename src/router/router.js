import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
/**
 * webpackChunkName: "group-foo"
 * 为特殊注释， 把某个路由下的所有组件都打包在同个异步块(chunk) 中， 即group - foo（ 可自定义） 中
 */
export default new Router({
    mode: 'history', //将路由转化成history模式，即去除#号
    routes: [{
            path: '/',
            redirect: to => ({ //路由重定向
                path: '/netry',
            })
        },
        /**
         * 上写重定向路由
         * 下正常写路由
         */
        {
            path: '/netry',
            name: 'netry',
            redirect: '/index', // 设置默认打开子路由的页面
            component: () => import( /* webpackChunkName: "group-foo" */ '@/views/entry/netry.vue'), //路由分割模式
            // component: resolve => require(['@/views/entry/entry.vue'], resolve), //懒加载模式
            children: [{
                    path: '/',
                    name: 'index',
                    // component: () => import( /* webpackChunkName: "group-foo" */ '../views/entry/netry.vue'), //路由分割模式
                    component: resolve => require(['@/views/components/index/index.vue'], resolve), //懒加载模式
                    meta: {
                        title: '首页'

                    },
                },
                {
                    path: '/array',
                    name: '/array',
                    component: resolve => require(['@/views/view/array.vue'], resolve),
                    meta: {
                        title: '数组操作'
                    },
                },
                {
                    path: '/traversal',
                    name: '/traversal',
                    component: resolve => require(['@/views/view/traversal.vue'], resolve),
                    meta: {
                        title: '数组遍历'
                    },
                }
            ]
        },
    ]
})