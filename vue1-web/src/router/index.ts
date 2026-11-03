import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Respuesta from '../paginae/respuesta/respuesta.vue'

export const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: () => import("../paginae/casa/casa.vue")
        },
        {
            path: "/Batman",
            component: () => import("../paginae/Batman/Batman.vue")
        },
        {
            path: "/simson",
            component: () => import("../paginae/simson/Primus.vue")
        },
        {
            path: "/respuesta",
            component: () => import("../paginae/respuesta/respuesta.vue")
        },
        {
            path: "/:pathMatch(.*)*",
            redirect: "/"
        }
    ]
});

export default router

