import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入mint-ui
import MintUI from 'mint-ui'
// import axios from 'axios'

import 'mint-ui/lib/style.min.css'

Vue.config.productionTip = false
//使用vue.usez注册插件
Vue.use(MintUI)



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
