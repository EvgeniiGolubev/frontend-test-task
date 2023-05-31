import {createRouter, createWebHistory} from "vue-router"
import MainComponent from "@/components/MainComponent.vue"
import LoginComponent from "@/components/LoginComponent.vue"
import ShopComponent from "@/components/ShopComponent.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'MainComponent', component: MainComponent },
        { path:'/login', name: 'LoginComponent', component: LoginComponent },
        { path: '/shop', name: 'ShopComponent', component: ShopComponent },
    ]
})

export default router