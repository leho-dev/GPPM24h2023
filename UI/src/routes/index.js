import Login from '../pages/Login';
import Home from '../pages/Home';

export const publicRouter = [
  { path: '/auth', component: Login, layout: null },
  { path: '/', component: Home, layout: 'Default' },
];

export const privateRouter = [];
