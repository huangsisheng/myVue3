import { createRouter,createWebHashHistory } from "vue-router";
import Home from "../views/home/index.vue";

const routes = [
    {
        name:'login',
        path:'/login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
        meta:{
            title:'首页'
        }
    },
    {
        name:'home',
        path:'/',
        component: Home,
        meta:{
            title:'首页'
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to,from,next) => {
    document.title = to.meta.title
    next()
})

export default router