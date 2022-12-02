import {createRouter, createWebHistory} from 'vue-router';
import AppLayout from "../components/AppLayout.vue";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import ResetPassword from "../views/ResetPassword.vue";
import Register from "../views/Register.vue";

const routes = [
    {
        path: '/app',
        name: 'app',
        component: AppLayout,
        children: [
            {
                path: 'dashboard',
                name: 'app.dashboard',
                component: Dashboard
            },
        ]
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
