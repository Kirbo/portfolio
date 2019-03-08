import React, { Component } from 'react';

import INITIAL_STATE from './InitialState';
import { Provider } from './Context';

class AppProvider extends Component {
  state = {
    ...INITIAL_STATE,
    onBreakpoint: broken => {
      this.setState(prevState => ({
        broken,
        collapsedWidth: broken ? 0 : 80
      }));
    },
    onClickMenuItem: () => {
      this.setState(prevState => ({
        sliderCollapsed: prevState.broken && !prevState.sliderCollapsed
      }));
    },
    onCollapse: () => {
      this.setState(prevState => ({
        sliderCollapsed: !prevState.sliderCollapsed
      }));
    }
  };

  static getDerivedStateFromProps = (props, state) => {
    const newState = {
      ...state,
      currentRoute: props.location.pathname,
    };
    return newState;
  };

  render = () => <Provider value={this.state}>{this.props.children}</Provider>;
}

export default AppProvider;
