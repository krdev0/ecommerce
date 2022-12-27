import {createRouter, createWebHistory} from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Products from "../views/Products.vue";
import Login from "../views/Login.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import AppLayout from "../components/AppLayout.vue";

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
            {
                path: 'products',
                name: 'app.products',
                component: Products
            }
        ]
    },

    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/forgot',
        name: 'forgotPassword',
        component: ForgotPassword
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
