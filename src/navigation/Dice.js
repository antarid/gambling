import React from 'react';
import Game from '../components/Games';

const onValueClickHandler = function(value) {
  const values = this.state.bet.values;
  let length = values.length;
  if (values.length !== 1 && values.includes(value)) {
    this.setState({
      bet: {
        ...this.state.bet,
        values: values.filter(val => val != value)
      },
      chances: {
        ...this.state.chances,
        chance: (length - 1) / 6
      }
    });
  } else if (!values.includes(value)) {
    if (values.length === 5) {
      values.shift();
      length--;
    }

    this.setState({
      bet: {
        ...this.state.bet,
        values: [...values, value]
      },
      chances: {
        ...this.state.chances,
        chance: (length + 1) / 6
      }
    });
  }
};

export default () => (
  <Game gameName="dice" onValueClickHandler={onValueClickHandler} />
);
