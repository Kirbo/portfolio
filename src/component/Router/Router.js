import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';

import Routes from '../../routes';
import LoadingPage from './LoadingPage';

const Router = () => (
  <Suspense fallback={<LoadingPage />}>
    <Switch>
      {Routes.map(route => (
        <Route key={`route-${route.path}`} {...route} />
      ))}
    </Switch>
  </Suspense>
);

export default Router;
