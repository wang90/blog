import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('/src/views/Home.vue'),
  },
  {
    path: '/wow',
    name: 'WOW',
    component: () => import('/src/views/WOW.vue'),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});