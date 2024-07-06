import { createRouter, createWebHashHistory } from 'vue-router';
import login from '../views/Login/Login.vue'
import register from '../views/Register/Register.vue'
import notFound from '../views/notFound.vue'
const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        name: 'login',
        component: login,
        meta: { title: '登录' }, // 添加 title
    },
    {
        path: '/register',
        name: 'register',
        component: register,
    },
    // 通配符路由，用正则表达式匹配所有路径
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: notFound
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
