import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Projects from '../views/Projects.vue';
import About from '../views/About.vue';
import Resume from '../views/Resume.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
