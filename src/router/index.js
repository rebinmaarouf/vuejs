// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import Home from '@/components/Home.vue';
import UserHook from '@/components/UserHook.vue';
import UserList from '@/components/UserList.vue';
import ShowDataJson from '@/components/ShowDataJson.vue';

// Define routes
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/userhook', name: 'UserHook', component: UserHook },
  { path: '/userlist', name: 'UserList', component: UserList },
  { path: '/showdatajson', name: 'ShowDataJson', component: ShowDataJson },
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
