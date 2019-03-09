import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { ReactComponent as SVG } from './Logo.svg';

const Styled = styled.div`
  height: 16px;

  & svg {
    width: 100px;
  }

  &.dark {
    & .kirbo {
      fill: #fff;
    }
    & .dev {
      fill: #e60004;
    }
  }

  &.light {
    & .kirbo {
      fill: #000;
    }
    & .dev {
      fill: #e60004;
    }
  }
`;

const Logo = ({ theme }) => (
  <Styled className={theme}>
    <SVG />
  </Styled>
);

Logo.defaultProps = {
  theme: 'dark',
};

Logo.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']),
};

export default Logo;
