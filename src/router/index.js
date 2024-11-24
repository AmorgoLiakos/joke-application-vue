import { createRouter, createWebHistory } from 'vue-router';
import Collection from '@/components/Collection/Collection.vue';
import Home from '@/components/Home/Home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/collection',
        name: 'Collection',
        component: Collection,
    },
];

const router = createRouter({
    history: createWebHistory(), // Use HTML5 history mode
    routes,
});

export default router;
