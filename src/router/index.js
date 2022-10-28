import Vue from 'vue'
import VueRouter from 'vue-router'

import DashBoard from '@/views/DashBoard'
import GridSystem from '@/views/GridSystem'

Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "DashBoard",
            component: DashBoard
        },
        {
            path: "/grid-system",
            name: "GridSystem",
            component: GridSystem
        }
    ]
  })
  
export default router;