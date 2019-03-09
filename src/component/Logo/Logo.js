import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { ReactComponent as SVG } from './Logo.svg';

const Styled = styled.div`
  height: 20px;

  & svg {
    width: 150px;
  }

  &.dark {
    & .react-tags {
      fill: #333;
    }
    & .kirbo {
      fill: #fff;
    }
    & .dev {
      fill: #e60004;
    }
  }

  &.light {
    & .react-tags {
      fill: #eee;
    }
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
