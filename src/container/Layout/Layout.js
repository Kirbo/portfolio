import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { Layout, Menu, Icon, Breadcrumb } from 'antd';

import { PROFILE_LINKS } from '../../assets/constants';
import { Consumer } from '../Context/Context';
import A from '../../component/A';

library.add(fab);

const { Header, Sider, Content, Footer } = Layout;

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

    .ant-layout-sider-zero-width-trigger {
      z-index: 10;
    }

    & .logo {
      width: 100%;
      height: 60px;
    }

    & .ant-layout-header {
      display: flex;

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
      padding: 0 16px 24px;
    }
  }
`;

const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  background: #f0f2f5;
  padding-bottom: 5px;
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
  ${props => props.broken && css`
    display: none;
  `}
`;

const Copyright = styled.div`
  padding: 20px 0 0;
  border-top: 1px solid #ccc;
`;

const YEAR_STARTED = 2019;
const YEAR_NOW = new Date().getFullYear();

const PortfolioLayout = ({ children }) => (
  <Consumer>
    {({
      sliderCollapsed,
      toggleSlider,
      collapsedWidth,
      onBreakpoint,
      broken
    }) => (
      <Styled
        sliderCollapsed={sliderCollapsed}
        collapsedWidth={collapsedWidth}
        broken={broken}
      >
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth={collapsedWidth}
            collapsible
            collapsed={sliderCollapsed}
            onBreakpoint={onBreakpoint}
            onCollapse={toggleSlider}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span>nav 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span>nav 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span>nav 3</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <HeaderWrapper>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
              </Header>
            </HeaderWrapper>
            <Content>{children}</Content>
            <Footer style={{ textAlign: 'center' }}>
              <Links>
                {PROFILE_LINKS.map(({ name, url, icon, color }) => (
                  <A href={url} key={name}>
                    <FAIcon icon={['fab', icon]} size="2x" color={color} />
                    <LinkName broken={broken}>{name}</LinkName>
                  </A>
                ))}
              </Links>
              <Copyright>
                Kimmo Saari ©{YEAR_STARTED}
                {YEAR_NOW > YEAR_STARTED && ` - ${YEAR_NOW}`} | Created by{' '}
                <A href="https://ant.design/docs/react/introduce">Ant UED</A>
              </Copyright>
            </Footer>
          </Layout>
        </Layout>
      </Styled>
    )}
  </Consumer>
);

export default PortfolioLayout;
