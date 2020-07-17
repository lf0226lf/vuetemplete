import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'
import header from '@/components/header'
import aside from '@/components/aside'
import main from '@/components/main'
import button from '@/components/button'
import link from '@/components/link'
import input from '@/components/input'
import datetimepicker from '@/components/datetimepicker'

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
      },
      {
        path: '/main',
        name: 'main',
        components: {
          header: header,
          aside: aside,
          main: main,
        }
      },
      {
        path: '/button',
        name: 'button',
        components: {
          header: header,
          aside: aside,
          main: button,
        }
      },
      {
        path: '/link',
        name: 'link',
        components: {
          header: header,
          aside: aside,
          main: link,
        }
      },
      {
        path: '/input',
        name: 'input',
        components: {
          header: header,
          aside: aside,
          main: input,
        }
      },
      {
        path: '/datetimepicker',
        name: 'datetimepicker',
        components: {
          header: header,
          aside: aside,
          main: datetimepicker,
        }
      }
    ]
  }]
})
