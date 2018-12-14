import React from 'react';
import Game from '../components/Games';

const onValueClickHandler = function(value) {
  const values = this.state.bet.values;
  if (value !== values[0]) {
    this.setState({
      bet: {
        ...this.state.bet,
        values: [value]
      }
    });
  }
};

export default () => (
  <Game gameName="coin" onValueClickHandler={onValueClickHandler} />
);
