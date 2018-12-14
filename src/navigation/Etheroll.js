import React from 'react';
import Game from '../components/Games';

const onValueClickHandler = function(value) {
  this.setState({
    bet: {
      ...this.state.bet,
      values: [value]
    },
    chances: {
      ...this.state.chances,
      chance: value / 100
    }
  });
};

export default () => (
  <Game gameName="etheroll" onValueClickHandler={onValueClickHandler} />
);
