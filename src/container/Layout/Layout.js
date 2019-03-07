import React from 'react';
import styled from 'styled-components';
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
    width: 100%;

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
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  & A {
    filter: grayscale(100%);
    color: #666;
    opacity: 0.5;
    transition: all 0.5s ease;

    &:hover {
      filter: grayscale(0%);
      color: #000;
      opacity: 1;
    }
  }
`;

const Copyright = styled.div`
  margin: 40px 0 20px;
`;

const YEAR_STARTED = 2019;
const YEAR_NOW = new Date().getFullYear();

const PortfolioLayout = ({ children }) => (
  <Styled>
    <Consumer>
      {({ sliderCollapsed, toggleSlider }) => (
        <Layout>
          <Sider trigger={null} collapsible collapsed={sliderCollapsed}>
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
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={sliderCollapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={toggleSlider}
              />
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280
              }}
            >
              {children}
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              <Links>
                {PROFILE_LINKS.map(({ name, url, icon, color }) => (
                  <A href={url} key={name}>
                    <FAIcon icon={['fab', icon]} size="2x" color={color} />
                    <div>
                      {name}
                    </div>
                  </A>
                ))}
              </Links>
              <Copyright>
                Kimmo Saari ©{YEAR_STARTED}
                {YEAR_NOW > YEAR_STARTED && ` - ${YEAR_NOW}`} Created by <A href="https://ant.design/docs/react/introduce">Ant UED</A>
              </Copyright>
            </Footer>
          </Layout>
        </Layout>
      )}
    </Consumer>
  </Styled>
);

export default PortfolioLayout;
