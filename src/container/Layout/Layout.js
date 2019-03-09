import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { Layout, Menu, Breadcrumb } from 'antd';

import { page } from '../../../package.json';

import Routes from '../../component/Router/Routes';

import { PROFILE_LINKS } from '../../assets/constants';
import { Consumer } from '../Context/Context';

import Logo from '../../component/Logo';
import A from '../../component/A';

library.add(fas);
library.add(fab);

const { Header, Sider, Content, Footer } = Layout;

const YEAR_STARTED = 2019;
const YEAR_NOW = new Date().getFullYear();
const COPYRIGHT_YEAR = `${YEAR_STARTED}${(YEAR_NOW > YEAR_STARTED ? ` - ${YEAR_NOW}` : '')}`;

const getBreadcrumb = currentRoute => {
  const foundRoute = Routes.find(({ path }) => path === currentRoute);

  return foundRoute ? foundRoute.name : '';
};

const PortfolioLayout = ({ history, children }) => (
  <Consumer>
    {({
      broken,
      collapsedWidth,
      onBreakpoint,
      onClickMenuItem,
      onCollapse,
      sliderCollapsed,
      currentRoute
    }) => (
      <Styled broken={broken}>
        <Layout>
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
          <Layout>
            <Header>
              <div className="logo">
                <Logo theme="light" />
              </div>
              <Breadcrumb>
                <Breadcrumb.Item>
                  <h2>{getBreadcrumb(currentRoute)}</h2>
                </Breadcrumb.Item>
              </Breadcrumb>
            </Header>
            <Content>{children}</Content>
            <Footer>
              <Links>
                {PROFILE_LINKS.map(({ name, url, icon, color }) => (
                  <A href={url} key={name}>
                    <FAIcon icon={['fab', icon]} size="2x" color={color} />
                    <LinkName broken={broken}>{name}</LinkName>
                  </A>
                ))}
              </Links>
              <Copyright>
                <div>
                  Kimmo Saari ©{COPYRIGHT_YEAR}
                </div>
                {/* <div>Created by <A href="https://ant.design/docs/react/introduce">Ant UED</A></div> */}
              </Copyright>
            </Footer>
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
    ${props =>
      props.broken &&
      css`
        flex: 1 0 100%;
      `}

    & .ant-layout-sider {
      background: #00142a;

      & h1 {
        display: flex;
        flex: 1;
        height: 100%;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: bold;
      }

      & .ant-menu {
        & .ant-menu-item a svg {
          margin-right: 14px;
        }
      }
    }

    .ant-layout-sider-zero-width-trigger {
      z-index: 10;
    }

    & .logo {
      width: 100%;
      height: 60px;

      ${props =>
        props.broken &&
        css`
          display: none;
        `}

      & > div {
        width: 100%;
        padding: 0 50px;
      }

      & h1 {
        display: none;
      }
    }

    & .ant-layout-header {
      display: flex;
      position: fixed;
      width: 100%;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
      background: #fff;
      padding: 0;

      & .logo {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0 -8px 0 6px;
        padding: 2px 0 0;

        ${props =>
          !props.broken &&
          css`
            display: none;
          `}

        & > div {
          width: 85px;
          padding: 0 6px;
        }
      }

      & .ant-breadcrumb {
        margin: 16px 0;

        ${props =>
          props.broken &&
          css`
            margin: 0;
            padding: 0;
          `}

        &::before {
          content: '//';
          margin: 0 5px;
        }

        & h2 {
          font-size: 14px;
          font-weight: normal;
          margin: 0;
          color: inherit;
        }
      }

      & > * {
        display: flex;
        flex: 0;
        align-items: center;
        padding: 0 10px;
      }
    }

    & .ant-layout-content {
      margin: 80px 16px 0;
      padding: 24px;
      background: #fff;
      min-height: 280px;
      flex: 1 0 auto;
    }

    & .ant-layout-footer {
      padding: 0 16px;
      text-align: center;
    }
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & a {
    filter: grayscale(100%);
    color: #666;
    opacity: 0.5;
    transition: all 0.5s ease;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px 0;

    &:hover {
      filter: grayscale(0%);
      color: #000;
      opacity: 1;
    }
  }
`;
const LinkName = styled.div`
  @media only screen and (max-width: 374px) {
    display: none;
  }
`;

const Copyright = styled.div`
  padding: 10px 0;
  border-top: 1px solid #ccc;

  & a {
    color: #a60d0d;
  }
`;

export default PortfolioLayout;
