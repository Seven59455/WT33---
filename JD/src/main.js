
import Vue from 'vue'
const App =() => import ('./App')   //路由懒加载
import router from './router'
import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';
import Axios from 'axios'
import '../static/flexible'
import '../static/common.css'

Vue.prototype.$axios   = Axios;
Vue.config.productionTip = false
NutUI.install(Vue);


new Vue({
  el: '#app',
  render:h=>h(App),
  router,
  components: { App },
  template: '<App/>'
})
