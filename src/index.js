import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import AppProvider from './container/Context/AppProvider';

import Layout from './container/Layout';
import Home from './routes/Home';

const GlobalStyles = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  #root {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Application = () => (
  <AppProvider>
    <GlobalStyles />
    <Layout>
      <Home />
    </Layout>
  </AppProvider>
);

ReactDOM.render(<Application />, document.getElementById('root'));
