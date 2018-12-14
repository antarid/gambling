import React from 'react';
import styled from 'styled-components';
import Rheostat from 'rheostat';
import {connect} from 'react-redux';
import 'rheostat/initialize';

import dice1 from '../../assets/icons/dice1.png';
import dice2 from '../../assets/icons/dice2.png';
import dice3 from '../../assets/icons/dice3.png';
import dice4 from '../../assets/icons/dice4.png';
import dice5 from '../../assets/icons/dice5.png';
import dice6 from '../../assets/icons/dice6.png';
import heads from '../../assets/icons/heads.png';
import tails from '../../assets/icons/tails.png';
import sum from '../../assets/icons/sum.png';

const diceIcons = [null, dice1, dice2, dice3, dice4, dice5, dice6];

export default ({gameName, values, onValueClick}) => {
  switch (gameName) {
    case 'coin':
      return (
        <Container>
          <Active
            width={100}
            active={values[0] === 0}
            onClick={() => onValueClick(0)}
          >
            <img src={heads} />
          </Active>
          <Active
            width={100}
            active={values[0] === 1}
            onClick={() => onValueClick(1)}
          >
            <img src={tails} />
          </Active>
          <Descripion>Choose coin side to bet on</Descripion>
        </Container>
      );
    case 'dice':
      const dices = [];
      for (let i = 1; i < 7; i++)
        dices.push(
          <Active
            active={values.includes(i)}
            onClick={() => onValueClick(i)}
            width={80}
          >
            <img src={diceIcons[i]} />
          </Active>
        );
      return (
        <Container>
          {dices}
          <Descripion>Choose the dice number(s) to bet on</Descripion>
        </Container>
      );
    case 'two-dice':
      const sums = [];
      for (let i = 2; i < 13; i++)
        sums.push(
          <Active
            width={80}
            active={values.includes(i)}
            onClick={() => onValueClick(i)}
          >
            <Sum number={i}>
              <img src={sum} />
            </Sum>
          </Active>
        );
      return (
        <Container>
          {sums}
          <Descripion>Choose sum of dice to bet on</Descripion>
        </Container>
      );
    case 'etheroll':
      return (
        <Container>
          <RheostatContainer>
            <Rheostat
              min={10}
              max={90}
              values={values}
              onValuesUpdated={value => onValueClick(value.values[0])}
            />
            <div className="labels">
              <div>10%</div>
              <div>30%</div>
              <div>50%</div>
              <div>70%</div>
              <div>90%</div>
            </div>
          </RheostatContainer>
          <Descripion>Adjust you win chance</Descripion>
        </Container>
      );
    default:
      return null;
  }
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Descripion = styled.p`
  width: 100%;
  font-size: 16px;
  color: #888;
  text-align: center;
  margin-top: 40px;
`;

const RheostatContainer = styled.div`
	width: 100%;
	margin-top: 30px;
  position: relative;
  .labels {
    position: absolute;
    bottom: -27px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .labels div {
    text-align: center;
		width: 31px;
		color rgba(255,0,0,.8);
  }
`;

const Active = styled.div`
  outline: none;
  user-select: none;
  width: ${props => props.width}px;
  img {
    pointer-events: none;
    width: 100%;
  }
  transition: all 0.3s ease;
  opacity: ${props => (props.active ? 1 : 0.2)};
  margin: 0 7px;
  position: relative;
  :after {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    content: '';
    transition: all 0.3s ease;
    cursor: pointer;
  }
`;

const Sum = styled.div`
  img {
    width: 100%;
  }
  :after {
    position: absolute;
    top: 50%;
		left: 45%;
		transform: translate(-50%, -50%);
		color: #fff;
		font-weight: 400;
		font-size: 26px;
    margin: auto;
    content: '${props => props.number}';
  }
`;
