// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'     //引入路由，即router文件下index.js创建的Router实例

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,               //注入到根组件中
  template: '<App/>',
  components: { App }
})
