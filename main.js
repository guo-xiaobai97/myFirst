// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//重置样式
import "./assets/css/reset.css"
//组件管理
import "./components/index"
//过滤器管理
import "./filters/index"
//引入Vuex
import store from "./store/index"
//引入前端框架ele
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUI)



new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
