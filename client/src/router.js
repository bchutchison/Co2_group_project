import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/views/Main';
import Stats from '@/views/Stats';
import Settings from '@/views/Settings';

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '',
      name: 'main',
      component: Main
    },
    {
      path: '/stats',
      name: 'stats',
      component: Stats
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    }
  ]
})

export default router;
