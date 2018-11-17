import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/Login";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: resolve => require(['../components/Login'], resolve),
      children:[
        {
          path: '/',
          name: 'Mainpage',
          component: resolve => require(['../components/Main-page'], resolve),
          children: [
            {
              path: '/',
              name: 'Dis-count',
              component: resolve => require(['../base/Dis-count'], resolve)
            }
          ]
        }
      ]
    },
    {
      path: '/Mainpage',
      name: 'Mainpage',
      component: resolve => require(['../components/Main-page'], resolve),
      children: [
        {
          path: '/role-manger',
          name: 'role-manger',
          component: resolve => require(['../base/Role-manger'], resolve)
        },
        {
          path: '/group-manger',
          name: 'group-manger',
          component: resolve => require(['../base/Group-manger'], resolve)
        },
        {
          path: '/person-manger',
          name: 'person-manger',
          component: resolve => require(['../base/Person-manger'], resolve)
        },
        {
          path: '/cars-manger',
          name: 'cars-manger',
          component: resolve => require(['../base/Cars-manger'], resolve)
        },
        {
          path: '/Internet-manger',
          name: 'Internet-manger',
          component: resolve => require(['../base/Internet-manger'], resolve)
        },
        {
          path: '/Video-manger',
          name: 'Video-manger',
          component: resolve => require(['../base/Video-manger'], resolve)
        },
        {
          path: '/Img-manger',
          name: 'Img-manger',
          component: resolve => require(['../base/Img-manger'], resolve)
        },
        {
          path: '/Dis-count',
          name: 'Dis-count',
          component: resolve => require(['../base/Dis-count'], resolve)
        },
        {
          path: '/Dic-manger',
          name: 'Dic-manger',
          component: resolve => require(['../base/Dic-manger'], resolve)
        },{
          path: '/Log-manger',
          name: 'Log-manger',
          component: resolve => require(['../base/Log-manger'], resolve)
        },{
          path: '/PAD-manger',
          name: 'PAD-manger',
          component: resolve => require(['../base/PAD-manger'], resolve)
        },
      ]
    }
  ]
})
