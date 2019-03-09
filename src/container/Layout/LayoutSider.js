import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Layout, Menu } from 'antd';

import { page } from '../../../package.json';
import Routes from '../../routes';
import { Consumer } from '../Context/Context';
import Logo from '../../component/Logo';

library.add(fas);
library.add(fab);

const { Sider } = Layout;

const PortfolioSider = ({ history, children }) => (
  <Consumer>
    {({
      broken,
      collapsedWidth,
      onBreakpoint,
      onClickMenuItem,
      onCollapse,
      sliderCollapsed,
      currentRoute,
    }) => (
      <Styled broken={broken}>
        <Sider
          breakpoint="lg"
          collapsed={sliderCollapsed}
          onCollapse={onCollapse}
          collapsedWidth={collapsedWidth}
          onBreakpoint={onBreakpoint}
        >
          <div className="logo">
            <h1>{page.title}</h1>
            <Logo />
          </div>
          <Menu
            defaultSelectedKeys={[`menu-${currentRoute}`]}
            theme="dark"
            mode="inline"
            onClick={onClickMenuItem}
          >
            {Routes.filter(({ name }) => name).map(({ path, icon, name }) => (
              <Menu.Item key={`menu-${path}`}>
                <Link to={path}>
                  <FAIcon icon={icon} />
                  <span>{name}</span>
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
      </Styled>
    )}
  </Consumer>
);

const Styled = styled.div`
  & .ant-layout-sider {
    background: #00142a;
    height: 100%;

    & .logo {
      width: 100%;
      height: 60px;
      align-items: center;
      display: flex;
      flex: 0;
      margin: 0 50px;

      & h1 {
        display: none;
      }
    }

    & .ant-menu {
      overflow: auto;
      height: 100%;

      & .ant-menu-item a {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;

        & svg {
          margin-right: 14px;
        }
      }
    }
  }
`;

export default PortfolioSider;
