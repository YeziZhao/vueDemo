import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';
import {constantRouterMap} from './router.js';
import NProgress from 'nprogress';

Vue.use(Router);

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes:constantRouterMap
});

export default router;
//register global progress
// const whiteList = ['/login','/authredirect','/reset','/sendpwd'];
// router.beforeEach((to,from ,next)=>{
//   NProgress.start();//开启progress
//   next();
// });