import React from 'react';
import styled from 'styled-components';

import coin from '../../assets/icons/coin.png';
import dice from '../../assets/icons/dice.png';
import twoDice from '../../assets/icons/two-dice.png';
import etheroll from '../../assets/icons/etheroll.png';

export default ({gameName}) => {
  let title;
  let image;
  switch (gameName) {
    case 'coin':
      title = 'Coin flip';
      image = coin;
      break;
    case 'dice':
      title = 'Dice';
      image = dice;
      break;
    case 'two-dice':
      title = 'Two dice';
      image = twoDice;
      break;
    case 'etheroll':
      title = 'Etheroll';
      image = etheroll;
      break;
  }
  return (
    <Container>
      <img src={image} /> <div>{title}</div>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 30px;
  font-size: 45px;
  font-weight: 200;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 45px;
    margin-right: 20px;
  }
`;
