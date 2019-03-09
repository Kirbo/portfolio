import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { Layout } from 'antd';

import { PROFILE_LINKS, COPYRIGHT_YEAR } from '../../misc/constants';
import { Consumer } from '../Context/Context';

import A from '../../component/A';

library.add(fas);
library.add(fab);

const { Footer } = Layout;

const LayoutFooter = ({ history, children }) => (
  <Consumer>
    {({ broken }) => (
      <Styled>
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
            <div>Kimmo Saari ©{COPYRIGHT_YEAR}</div>
          </Copyright>
        </Footer>
      </Styled>
    )}
  </Consumer>
);

const Styled = styled.div`
  & .ant-layout-footer {
    padding: 0 16px;
    text-align: center;
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

export default LayoutFooter;
