import React, { Component } from 'react';

import INITIAL_STATE from './InitialState';
import { Provider } from './Context';

class AppProvider extends Component {
  state = {
    ...INITIAL_STATE,
    toggleSlider: () => {
      this.setState(prevState => ({
        sliderCollapsed: !prevState.sliderCollapsed,
      }))
    },
    onBreakpoint: (broken) => {
      this.setState(prevState => ({
        broken,
        collapsedWidth: broken ? 0 : 80,
      }))
    },
  };

  render = () => (
    <Provider value={this.state}>{this.props.children}</Provider>
  )
}

export default AppProvider;
