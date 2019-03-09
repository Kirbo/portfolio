import React from 'react';
import styled from 'styled-components';

import Logo from '../../component/Logo';

const Landing = () => (
  <Styled>
    <Logo />
  </Styled>
);

const Styled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #00142a;
  flex-direction: column;

  & > div {
    height: 70px;

    & > svg {
      width: 500px;
    }
  }
`;

export default Landing;
