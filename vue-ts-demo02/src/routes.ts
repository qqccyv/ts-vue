import { createRouter, createWebHashHistory } from 'vue-router';
import HelloWord from './components/HelloWorld.vue';
import HelloEveryone from './components/HelloEveryOne.vue';
const routes = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: HelloWord },
    // { path: '/helloEveryone/:someword', component: HelloEveryone },  // 配置的动态路由一定要和routerlink搭配使用
    { name: 'helloEveryone', path: '/helloEveryone', component: HelloEveryone },
  ]
})

export default routes