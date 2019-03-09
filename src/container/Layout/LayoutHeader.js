import React from 'react';
import styled from 'styled-components';

import { Layout, Breadcrumb } from 'antd';

import { getBreadcrumb, conditionallyHide } from '../../misc/utils';
import { Consumer } from '../Context/Context';

const { Header } = Layout;

const PortfolioLayout = ({ history, children }) => (
  <Consumer>
    {({ broken, currentRoute }) => (
      <Styled broken={broken}>
        <Header>
          <Breadcrumb>
            <Breadcrumb.Item>
              <h2>{getBreadcrumb(currentRoute)}</h2>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Header>
      </Styled>
    )}
  </Consumer>
);

const Styled = styled.div`
  & .ant-layout-header {
    display: flex;
    position: fixed;
    width: 100%;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    background: #fff;
    padding: 0;

    & .ant-breadcrumb {
      margin: 16px 0;
      min-width: 0;
      flex-basis: 100%;
      padding: 0 10px;

      & .ant-breadcrumb-separator {
        ${props => (props.broken ? 'margin: 0 4px;' : '')}
      }

      &::before {
        content: '//';
        margin: 0 5px;
      }

      & > span {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

      & h2 {
        font-size: 14px;
        font-weight: normal;
        margin: 0;
        color: inherit;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }

    & > * {
      display: flex;
      flex: 0;
      align-items: center;
      padding: 0 10px;
    }
  }
`;

export default PortfolioLayout;
