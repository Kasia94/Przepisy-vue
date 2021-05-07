import VueRouter from 'vue-router';
import ListOfrecipes from './pages/ListOfrecipes.vue';
import Recipe from './pages/Recipe.vue';

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: ListOfrecipes },
    { path: '/recipe/:id', component: Recipe },
  ],
});

export default router;
