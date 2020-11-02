import { createRouter,createWebHashHistory } from "vue-router";
import Layout from "@/layout"

/* 导入路由模块 */
const modules = require.context('./routerModule', true, /[a-zA-Z]\w+\.(js)$/)

let routerModule = {}
modules.keys().forEach((file) => {
    const fileName = file.replace(/(\.\/)(\w+)(\/\w+(.js))$/g, '$2')

    const fileModule = modules(file).default

    routerModule[fileName] = fileModule
})

const routes = [
    {
        name:'login',
        path:'/login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
        meta:{
            title:'登录页'
        }
    },
    {
        name: '',
        path: '/',
        component: Layout,
    },
    {
        name:'dashedbord',
        path:'/dashedbord',
        component: Layout,
        redirect:{path:'/home'},
        children:[
            ...Object.values(routerModule)
        ]
    }
]
localStorage.setItem('menuList', JSON.stringify(routerModule))

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to,from,next) => {
    document.title = to.meta.title
    next()
})

export default router