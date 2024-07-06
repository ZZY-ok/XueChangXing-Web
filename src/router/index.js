import { createRouter, createWebHistory } from 'vue-router';
import login from '../views/Login/Login.vue'
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
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
