import Dashboard from './pages/Dashboard';
import Users from './pages/users/Index';
import Pets from './pages/pets/Index';
import Bookings from './pages/bookings/Index';

const routeLinks = [
  {
    key: 'home',
    path: '/',
    icon: 'house',
    label: 'Home',
    exact: true,
    component: Dashboard,
  },

  {
    key: 'users',
    path: '/users',
    icon: 'team',
    label: 'Users',
    component: Users,
  },

  {
    key: 'pets',
    path: '/pets',
    icon: 'dog',
    label: 'Pets',
    component: Pets,
  },

  {
    key: 'booking',
    path: '/bookings',
    icon: 'book',
    label: 'Booking',
    component: Bookings,
  },
];

export default routeLinks;
