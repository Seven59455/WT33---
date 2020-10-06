
import Vue from 'vue'
const App =() => import ('./App')   //路由懒加载
import router from './router'
import Axios from 'axios'
import '../static/flexible'
import '../static/common.css'
import { Rate } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Rate);

Vue.prototype.$axios   = Axios;
Vue.config.productionTip = false


new Vue({
  el: '#app',
  render:h=>h(App),
  router,
  components: { App },
  template: '<App/>'
})
