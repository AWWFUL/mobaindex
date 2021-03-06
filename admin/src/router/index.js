import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue'
import CategoryEdit from '../views/CategoryEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView,
    children:[
      {path:'/categories/create',component:CategoryEdit}
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
