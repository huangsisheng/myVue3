/* 配置模块 */
const settingRouter = {
    name: 'setting',
    path: '/setting',
    component: () => import(/* webpackChunkName: "setting" */ '@/views/setting/index.vue'),
    meta: {
        title: '基础设置'
    },
    children: [
        {
            name: 'userManagement',
            path: 'userManagement',
            component: () => import(/* webpackChunkName: "userManagement" */ '@/views/setting/userManagement/index.vue'),
            meta: {
                title: '用户管理'
            }
        },
        {
            name: 'roleManagement',
            path: 'roleManagement',
            component: () => import(/* webpackChunkName: "roleManagement" */ '@/views/setting/roleManagement/index.vue'),
            meta: {
                title: '角色管理'
            }
        },
        {
            name: 'deptManagement',
            path: 'deptManagement',
            component: () => import(/* webpackChunkName: "deptManagement" */ '@/views/setting/deptManagement/index.vue'),
            meta: {
                title: '部门管理'
            }
        },
        {
            name: 'menueManagement',
            path: 'menueManagement',
            component: () => import(/* webpackChunkName: "menueManagement" */ '@/views/setting/menueManagement/index.vue'),
            meta: {
                title: '菜单管理'
            }
        }
    ]
}

export default settingRouter