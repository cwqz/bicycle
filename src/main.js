import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

// 引入element
Vue.use(ElementUI);

// 动态路由初始化
// import { initMenu } from "./utils/menu";

// 公共样式
import './assets/css/common.css';

// axios引用
import { postRequest } from "./utils/request";
import { putRequest } from "./utils/request";
import { deleteRequest } from "./utils/request";
import { getRequest } from "./utils/request";
import { postKeyValueRequest } from "./utils/request";
Vue.prototype.getRequest = getRequest;
Vue.prototype.deleteRequest = deleteRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.postRequest = postRequest;
Vue.prototype.postKeyValueRequest = postKeyValueRequest;


// 添加请求拦截器
// Axios.interceptors.request.use(function(config){
//     // 发送请求前判断是否存在token,若存在则将其加入请求头中
//     if(window.sessionStorage.getItem("token")){
//         config.headers.common['Authorization'] = window.sessionStorage.getItem("token");
//     }
//     return config
// },function(error){
//     router.push('/')
//     return Promise.reject(error)
// })

// 路由导航守卫
// router.beforeEach((to, from, next) => {
//         // 要跳转到登录页
//         if (to.path === '/' || to.path === '/register'|| to.path === '/login'){
//             next();
//             return;
//         } else {
//             if (window.sessionStorage.getItem("token")) {
//                 if (from.path !== to.path) {
//                     initMenu(router, store);
//                 }
//                 next();
//             } else {
//                 //  next("/?redirect=" + to.path);
//                 next('/');
//             }
//         }
//     }),

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
