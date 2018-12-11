import Vue from 'vue'
import Router from 'vue-router'
import TotalChart from '../pages/TotalChart'
import TotalForm from '../pages/TotalForm'
import BaseForm from '../pages/BaseForm'
import BaseChart from '../pages/BaseChart'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/TotalChart',
      name: 'TotalChart',
      component: TotalChart
    },
    {
      path: '/TotalForm',
      name: 'TotalForm',
      component: TotalForm
    },
    {
      path: '/BaseForm',
      name: 'BaseForm',
      component: BaseForm
    },
    {
      path: '/',
      name: 'BaseChart',
      component: BaseChart
    }


  ]

})
