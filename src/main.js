// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue';
// import App from './App';
// import router from './router';
// import store from './store';
// import ElmentIU from 'element-ui';
// import 'element-ui/lib/theme-default/index.css';
// import 'styles/index.scss'; // 全局自定义的css样式
// import './mock/index.js'; // 该项目所有请求使用mockjs模拟
// import errLog from 'store/errLog'; // error log组件

import Vue from 'vue';
import App from './App';
import i18n from './i18n';
import router from './router';
import store from './store';
import mock from './mock';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import './styles/index.scss'; // 全局自定义的css样式
import errLog from 'store/errLog'; // error log组件
import './mock/index.js'; // 该项目所有请求使用mockjs模拟

Vue.config.productionTip = false

Vue.use(ElementUI);
//初始化APP
new Vue({
  router,//需要严格参照router的构造配置http://router.vuejs.org/zh-cn/api/options.html
  store,
   i18n,
  render: h => h(App),
}).$mount('#app');





