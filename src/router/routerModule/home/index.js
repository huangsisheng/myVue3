/* 首页模块 */
import Home from "@/views/home/index.vue";

const homeRouter = {
    name: 'home',
    path: '/home',
    component: Home,
    meta: {
        title: '首页'
    },
    children: {
        name: 'workbench',
        path: 'workbench',
        component: () => import(/* webpackChunkName: "workbench" */ '@/views/home/workbench/index.vue'),
        meta: {
            title: '工作台'
        }
    }
}

export default homeRouter