import Dashboard from './pages/Dashboard';
import Users from './pages/users/Index';
import Pets from './pages/pets/Index';
import Bookings from './pages/bookings/Index';
import AdminRooms from './pages/rooms/Index';
import AdminBlog from './pages/blogs/Index';

import PublicHome from './public/pages/index';
import AboutUs from './public/pages/about-us';
import BookNow from './public/pages/book-now';
import Rooms from './public/pages/rooms';
import Blog from './public/pages/blog';
import ContactUs from './public/pages/contact-us';
import { Login, Register } from './pages/auth/index';

const routeLinks = [
  //admin
  {
    key: 'home',
    accessLabel: 'manager',
    path: '/manage',
    icon: 'fa fa-home',
    label: 'Dashboard',
    exact: true,
    component: Dashboard,
  },

  {
    key: 'users',
    accessLabel: 'manager',
    path: '/manage/users',
    icon: 'fas fa-users',
    label: 'Users',
    component: Users,
  },

  {
    key: 'pets',
    accessLabel: 'manager',
    path: '/manage/pets',
    icon: 'fas fa-paw',
    label: 'Pets',
    component: Pets,
  },

  {
    key: 'booking',
    accessLabel: 'manager',
    path: '/manage/bookings',
    icon: 'fas fa-book-open',
    label: 'Booking',
    component: Bookings,
  },
  {
    key: 'rooms',
    accessLabel: 'manager',
    path: '/manage/rooms',
    icon: 'fas fa-door-open',
    label: 'Rooms',
    component: AdminRooms,
  },
  {
    key: 'blogs',
    accessLabel: 'manager',
    path: '/manage/blogs',
    icon: 'fab fa-blogger',
    label: 'Blogs',
    component: AdminBlog,
  },

  //employee
  {
    key: 'home',
    accessLabel: 'employee',
    path: '/manage',
    icon: 'fa fa-home',
    label: 'Home',
    exact: true,
    component: Dashboard,
  },

  {
    key: 'pets',
    accessLabel: 'employee',
    path: '/manage/pets',
    icon: 'fas fa-paw',
    label: 'Pets',
    component: Pets,
  },

  {
    key: 'booking',
    accessLabel: 'employee',
    path: '/manage/bookings',
    icon: 'fas fa-book-open',
    label: 'Booking',
    component: Bookings,
  },

  //public

  {
    key: 'home',
    accessLabel: 'owner',
    path: '/',
    exact: true,
    label: 'Home',
    component: PublicHome,
  },
  {
    key: 'about-us',
    accessLabel: 'owner',
    path: '/about-us',
    label: 'About Us',
    component: AboutUs,
  },
  {
    key: 'book-now',
    accessLabel: 'owner',
    path: '/book-now',
    label: 'Book Now',
    component: BookNow,
  },
  {
    key: 'rooms',
    accessLabel: 'owner',
    path: '/rooms',
    label: 'Rooms',
    component: Rooms,
  },
  {
    key: 'blog',
    accessLabel: 'owner',
    path: '/blog',
    label: 'Blog',
    component: Blog,
  },
  {
    key: 'contact-us',
    accessLabel: 'owner',
    path: '/contact-us',
    class: 'mr-5',
    label: 'Contact Us',
    component: ContactUs,
  },
  {
    key: 'login',
    accessLabel: 'owner',
    path: '/login',
    label: 'Login',
    component: Login,
  },
  {
    key: 'register',
    accessLabel: 'owner',
    path: '/register',
    label: 'Register',
    component: Register,
  },
];

export default routeLinks;
