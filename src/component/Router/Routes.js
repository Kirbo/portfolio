import React from 'react';
import { lazy } from 'react';

const Me = lazy(() => import('../../routes/Me'));
const Blog = lazy(() => import('../../routes/Blog'));

const Routes = [
  {
    exact: true,
    path: '/',
    icon: ['fas','user-circle'],
    name: 'Me',
    component: () => <Me />
  },
  {
    exact: false,
    path: '/blog',
    name: 'Blog',
    icon: ['fas', 'blog'],
    component: () => <Blog />
  }
];

export default Routes;
