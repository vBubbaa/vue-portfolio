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
    meta: {
      title: 'MJ | Portfolio',
    },
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: {
      title: 'MJ | Projects',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'MJ | About',
    },
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume,
    meta: {
      title: 'MJ | Resume',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
