import { Test } from '../pages/test/test';
import { Simple } from '../pages/example/simple';
import { Login } from '../pages/login/login';

/**
 * 
 */
const routers = [
    {
        path: '/',
        component: Test,
        exact: true,
        isRequiredLogin: true,
        routes: []
    },
    {
        path: '/simple',
        component: Simple,
        exact: true,
        isRequiredLogin: true,
        routes: [],
    },
    {
        path: '/login',
        component: Login,
        isRequiredLogin: false,
        routes: []
    }
];

export default routers;