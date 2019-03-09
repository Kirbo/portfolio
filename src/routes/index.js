import React from 'react';
import { lazy } from 'react';

const Me = lazy(() => import('./Me'));
const Blog = lazy(() => import('./Blog'));

const Routes = [
  {
    exact: true,
    path: '/',
    icon: ['fas', 'user-circle'],
    name: 'Who am I',
    title: 'Who am I',
    component: () => <Me />,
  },
  {
    exact: false,
    path: '/blog',
    name: 'Blog',
    title: 'Blog',
    icon: ['fas', 'blog'],
    component: () => <Blog />,
  },
];

export default Routes;
