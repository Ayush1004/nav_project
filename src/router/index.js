import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Secure from '../components/Secure.vue'
import Home from '../components/Home.vue'
import User from '../components/User.vue'
import Admin from "../components/admin.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: "/",
            name: 'Home',
            component: Home,
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/secure',
            name: 'Secure',
            component: Secure,
            beforeEnter: (to, from, next) => {
                if (from.fullPath == '/login') {
                    next();
                } else {
                    next('/login');
                }
            },
        },
        {
            path: '/admin',
            name: 'Admin',
            component: Admin,
            beforeEnter: (to, from, next) => {
                if (from.fullPath == '/login') {
                    next();
                } else {
                    next('/login');
                }
            },
        },
        {
            path: '/user',
            name: 'User',
            component: User,
            beforeEnter: (to, from, next) => {
                if (from.fullPath == '/login') {
                    next();
                } else {
                    next('/login');
                }
            },
        }
    ]
})
export default router;