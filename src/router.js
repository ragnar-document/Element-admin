import Vue from 'vue'
import Router from 'vue-router'
import CreateArticle from './views/CreateArticle.vue'
import ListArticle from './views/ListArticle.vue'
import EditArticle from './views/EditArticle.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:"/article/index"
    },
    {
      path:'/article/create',
      name:'create',
      component:CreateArticle
    },
    {
      path: '/article/index',
      name: 'list',
      component: ListArticle
    },
    {
      path: '/article/:id/edit',
      name: 'Edit',
      component: EditArticle
    }
  ]
})
