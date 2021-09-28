import React from 'react';

export const guestRoutes = [
  {
    path: '/login',
    name: 'Login',
    exact: true,
    component: React.lazy(() => import('../../views/auth/index')),
  },
  {
    redirectRoute: true,
    name: 'Login',
    path: '/login',
  },
];

export const userRoutes = [
  {
    path: '/home',
    name: 'Home',
    exact: true,
    component: React.lazy(() => import('../../views/user/Home/Home')),
  },
  {
    path: '/userData',
    name: 'User Data',
    exact: true,
    component: React.lazy(() => import('../../views/user/Search/Search')),
  },
  {
    redirectRoute: true,
    name: 'Home',
    path: '/home',
  },
];
