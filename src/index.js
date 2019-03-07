import React from 'react';
import ReactDOM from 'react-dom';

import AppProvider from './container/Context/AppProvider';

import Layout from './container/Layout';
import Home from './routes/Home';

import GlobalStyles from './globalStyles';

const Application = () => (
  <AppProvider>
    <GlobalStyles />
    <Layout>
      <Home />
    </Layout>
  </AppProvider>
);

ReactDOM.render(<Application />, document.getElementById('root'));
