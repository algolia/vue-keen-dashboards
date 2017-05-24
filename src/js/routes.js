import Home from './pages/Home';
import Login from './pages/Login';
import PageOne from './pages/One';
import PageTwo from './pages/Two';
import Explorer from './pages/Explorer';
import NotFound from './pages/NotFound';

export default [
  { path: '/', component: Home, name: 'home' },
  { path: '/login', component: Login, name: 'login' },
  { path: '/dashboards/one', component: PageOne, name: 'one' },
  { path: '/dashboards/two', component: PageTwo, name: 'two' },
  { path: '/explorer', component: Explorer, name: 'explorer' },
  { path: '*', component: NotFound }
];
