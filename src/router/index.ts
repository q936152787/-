import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Money from '@/views/Money.vue';
import Statistics from '@/views/Statistics.vue';
import Label from '@/views/Label.vue';
import ErrorPage from '@/views/ErrorPage.vue';


Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect: '/money',
    },
    {
        path: '/money',
        component: Money,
    },
    {
        path: '/label',
        component: Label,
    },
    {
        path: '/statistics',
        component: Statistics,
    },
    {
        path: '/*',
        component: ErrorPage

    }

];

const router = new VueRouter({
    routes
});

export default router;
