import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';

import Routes from './Routes';

const Router = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      {Routes.map(route => (
        <Route key={`route-${route.path}`} {...route} />
      ))}
    </Switch>
  </Suspense>
);

export default Router;
