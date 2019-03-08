import React from 'react';
import ReactDOM from 'react-dom';
import { Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import AppProvider from './container/Context/AppProvider';
import { Consumer } from './container/Context/Context';

import Router from './component/Router';
import Layout from './container/Layout';

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
  <BrowserRouter>
    <Switch>
      <AppProvider>
        <Consumer>
          {({ Page }) => (
            <React.Fragment>
              <GlobalStyles />
              <Layout>
                <Router />
              </Layout>
            </React.Fragment>
          )}
        </Consumer>
      </AppProvider>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<Application />, document.getElementById('root'));
