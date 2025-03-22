import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../apps/accounts/signin/LoginPage.vue';
import SignUpPage from '../apps/accounts/signup/SignUpPage.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginPage },
  { path: '/signup', component: SignUpPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;