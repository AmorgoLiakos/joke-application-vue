import { createRouter, createWebHistory } from 'vue-router';
import Collection from '@/components/Collection/Collection.vue';
import Jokes from '@/components/Jokes/Jokes.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Jokes,
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
