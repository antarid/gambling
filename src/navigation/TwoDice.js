import React from 'react';
import Game from '../components/Games';

const calculateChance = function() {
  const chancesForNumbers = {
    2: 1 / 36,
    3: 2 / 36,
    4: 3 / 36,
    5: 4 / 36,
    6: 5 / 36,
    7: 6 / 36,
    8: 5 / 36,
    9: 4 / 36,
    10: 3 / 36,
    11: 2 / 36,
    12: 1 / 36
  };
  let chance = 0;
  const values = this.state.bet.values;
  values.forEach(value => (chance += chancesForNumbers[value]));
  this.setState({
    chances: {
      ...this.state.chances,
      chance
    }
  });
};

const onValueClickHandler = function(value) {
  const values = this.state.bet.values;
  if (values.length !== 1 && values.includes(value)) {
    this.setState({
      bet: {
        ...this.state.bet,
        values: values.filter(val => val != value)
      }
    });
  } else if (!values.includes(value)) {
    if (values.length === 10) values.shift();
    this.setState({
      bet: {
        ...this.state.bet,
        values: [...values, value]
      }
    });
  }
  setTimeout(() => calculateChance.call(this), 0);
};

export default () => (
  <Game
    gameName="two-dice"
    onValueClickHandler={onValueClickHandler}
    calculateChance={calculateChance}
  />
);
