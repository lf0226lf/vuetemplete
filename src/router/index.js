import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'
import header from '@/components/header'
import aside from '@/components/aside'
import main from '@/components/main'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'layout',
    components: {
      layout: layout,
    },
    children: [{
      path: '/',
      name: 'content',
      components: {
        header: header,
        aside: aside,
        main: main,
      }
    }]
  }]
})
