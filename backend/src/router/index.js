import {createRouter, createWebHistory} from 'vue-router';
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import ResetPassword from "../views/ResetPassword.vue";
import Register from "../views/Register.vue";

const routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/reset-password',
        name: 'resetPassword',
        component: ResetPassword
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
