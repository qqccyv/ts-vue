import { createRouter, createWebHashHistory } from 'vue-router';
import HelloWord from './components/HelloWorld.vue';
import HelloEveryone from './components/HelloEveryOne.vue';
const routes = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: HelloWord },
    { path: '/helloEveryone', component: HelloEveryone }
  ]
})

export default routes