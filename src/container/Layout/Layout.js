import React from 'react';
import styled from 'styled-components';

import { Layout } from 'antd';

import { Consumer } from '../Context/Context';

import LayoutSider from './LayoutSider';
import LayoutHeader from './LayoutHeader';
import LayoutFooter from './LayoutFooter';

const { Content } = Layout;

const PortfolioLayout = ({ history, children }) => (
  <Consumer>
    {({ broken }) => (
      <Styled broken={broken}>
        <Layout>
          <LayoutSider />
          <Layout>
            <LayoutHeader />
            <Content>{children}</Content>
            <LayoutFooter />
          </Layout>
        </Layout>
      </Styled>
    )}
  </Consumer>
);

const Styled = styled.div`
  width: 100%;
  height: 100%;

  & .ant-layout {
    height: 100%;
    flex: 1 0 auto;
    ${props => (props.broken ? 'flex: 1 0 100%;' : '')}

    .ant-layout-sider-zero-width-trigger {
      z-index: 10;
    }

    & .ant-layout-content {
      margin: 80px 16px 0;
      padding: 24px;
      background: #fff;
      min-height: 280px;
      flex: 1 0 auto;
    }
  }
`;

export default PortfolioLayout;
