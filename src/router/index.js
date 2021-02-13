import Vue from 'vue'
import VueRouter from 'vue-router'

/* Importation des pages à utiliser dans le menu pour le router */
/*import Profile from "@/views/Profile";*/
import Contact from "@/views/Contact";
import Home from "@/views/Home";
import Projet from "@/views/Projet";

Vue.use(VueRouter)

/* On défini les routes */

const routes = [
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/',
        component: Home
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/projects',
        name: 'projects',
        component: Projet
    }
]

const router = new VueRouter({
    routes
})

export default router
