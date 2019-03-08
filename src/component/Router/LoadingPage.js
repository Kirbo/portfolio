import React from 'react';
import styled from 'styled-components';

import { Skeleton } from 'antd';

const LoadingPage = () => (
  <Styled>
    <Skeleton loading active />
  </Styled>
);

const Styled = styled.div`
  & .ant-skeleton-title {
    margin-top: 0;
  }
`;

export default LoadingPage;
