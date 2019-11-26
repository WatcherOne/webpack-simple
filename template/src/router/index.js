import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', name: '首页', component: Index }
  ]
})

export default router
