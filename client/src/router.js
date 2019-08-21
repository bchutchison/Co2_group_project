import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Stats from '@/views/Stats';
import Settings from '@/views/Settings';

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
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
