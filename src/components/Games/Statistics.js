import React from 'react';
import styled from 'styled-components';

import dice1 from '../../assets/icons/dice1.png';
import dice2 from '../../assets/icons/dice2.png';
import dice3 from '../../assets/icons/dice3.png';
import dice4 from '../../assets/icons/dice4.png';
import dice5 from '../../assets/icons/dice5.png';
import dice6 from '../../assets/icons/dice6.png';
import heads from '../../assets/icons/heads.png';
import tails from '../../assets/icons/tails.png';
import windice1 from '../../assets/icons/win/dice1.png';
import windice2 from '../../assets/icons/win/dice2.png';
import windice3 from '../../assets/icons/win/dice3.png';
import windice4 from '../../assets/icons/win/dice4.png';
import windice5 from '../../assets/icons/win/dice5.png';
import windice6 from '../../assets/icons/win/dice6.png';
import winheads from '../../assets/icons/win/heads.png';
import wintails from '../../assets/icons/win/tails.png';
import Loader from 'react-loader-spinner';

import {connect} from 'react-redux';

const diceIcons = [null, dice1, dice2, dice3, dice4, dice5, dice6];
const winDiceIcons = [
  null,
  windice1,
  windice2,
  windice3,
  windice4,
  windice5,
  windice6
];

export default ({gameInfos, gameName, isLoaded}) => {
  let content;
  if (isLoaded)
    content = gameInfos.map(gameInfo => (
      <GameInfo gameName={gameName} {...gameInfo} />
    ));
  else
    content = (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Loader type="TailSpin" color="#ff0000" height={100} width={100} />
      </div>
    );
  return (
    <div className="col-xl-4 col-md-12">
      <div className="row">
        <div className="col-12">
          <h1 style={{fontWeight: 200}}>Game history</h1>
        </div>
        <div className="col-12">
          <div className="row no-gutters">
            <div className="col-3">Player</div>
            <div className="col-5">Bet</div>
            <div className="col-3">Result</div>
            <div className="col-1">JP</div>
          </div>
        </div>
        <div className="col-12" style={{height: 300, overflow: 'auto'}}>
          {content}
        </div>
      </div>
    </div>
  );
};

const Player = ({address, img}) => (
  <div className="player col-3">
    <div className="player-img-wrap">
      <img src={img || 'https://www.w3schools.com/w3css/img_lights.jpg'} />
    </div>
    <div className="player-address">
      <a>{address}</a>
    </div>
  </div>
);

const Bet = ({money, values, gameName}) => {
  const Money = <div className="bet-money">{money}</div>;
  let Values;
  switch (gameName) {
    case 'coin':
      Values = (
        <div className="bet-values coin">
          <div className="img-wrap">
            <img src={values[0] ? heads : tails} />
          </div>
        </div>
      );
      break;
    case 'dice':
      Values = (
        <div className="bet-values dice">
          <div className="wrap">
            {values.map(value => (
              <div className="img-wrap ">
                <img src={diceIcons[value]} />
              </div>
            ))}
          </div>
        </div>
      );
      break;

    case 'two-dice':
      Values = <div className="bet-values two-dice">{values.join(',')}</div>;
      break;
    case 'etheroll':
      Values = <div className="bet-values etheroll">{'≤' + values[0]}</div>;
      break;
  }
  return <div className="col-5 bet">{[Money, Values]}</div>;
};

const Result = ({gameName, money, values}) => {
  const Money = <div className="result-money">{money || '-'}</div>;
  let Values;
  switch (gameName) {
    case 'coin':
      Values = (
        <div className="result-values coin">
          <div className={money ? ' win img-wrap' : 'img-wrap'}>
            <img
              src={
                values[0]
                  ? money
                    ? winheads
                    : heads
                  : money
                  ? wintails
                  : tails
              }
            />
          </div>
        </div>
      );
      break;

    case 'dice':
      Values = (
        <div className="result-values dice">
          <div className={money ? ' win img-wrap' : 'img-wrap'}>
            <img src={money ? winDiceIcons[values[0]] : diceIcons[values[0]]} />
          </div>
        </div>
      );
      break;

    case 'etheroll':
      Values = (
        <div
          className={
            money ? 'result-values etheroll win' : 'result-values etheroll'
          }
        >
          {values[0]}
        </div>
      );
      break;
    case 'two-dice':
      Values = (
        <div className="result-values two-dice">
          <div className={money ? ' win img-wrap' : 'img-wrap'}>
            <img
              src={money ? winDiceIcons[values[0]] : diceIcons[values[0]]}
              alt=""
            />
          </div>
          <div className={money ? ' win img-wrap' : 'img-wrap'}>
            <img
              src={money ? winDiceIcons[values[1]] : diceIcons[values[1]]}
              alt=""
            />
          </div>
        </div>
      );
  }
  return <div className="col-3 result">{[Values, Money]}</div>;
};

const GameInfo = props => (
  <StyledGameInfo>
    <div className="row no-gutters">
      <Player {...props.player} />
      <Bet gameName={props.gameName} {...props.bet} />
      <Result gameName={props.gameName} {...props.result} />
      <Jackpot jackpot={props.result.jackpot} />
    </div>
  </StyledGameInfo>
);

const Jackpot = ({jackpot}) => (
  <div className="col-1 jackpot">{jackpot ? jackpot : '-'}</div>
);

const StyledGameInfo = styled.div`
  width: 100%;
  margin-top: 12px;
  .player {
    font-size: 14px;
    font-weight: 200;
    display: flex;
    flex: 1;
    align-items: center;
    min-width: 0;
  }
  .bet,
  .result {
    display: flex;
    align-items: center;
  }
  .bet-money,
  .result-money {
    width: 40px;
  }
  .bet-values {
    width: calc(100% - 50px);
    overflow: hidden;
  }
  .bet-values,
  .result-values {
    display: flex;
    color: #666;
    font-size: 14px;
  }
  .bet-values.dice .img-wrap {
    margin-right: 3px;
    width: 13px;
    height: 13px;
  }

  .result-values.two-dice .img-wrap {
    margin-left: 2px;
    width: 15px;
    height: 15px;
  }

  .result-values .img-wrap img {
    opacity: 0.3;
  }

  .result-values .img-wrap.win img {
    opacity: 1;
  }

  .bet-values.coin .img-wrap,
  .result-values.coin .img-wrap,
  .result-values.dice .img-wrap {
    width: 25px;
    height: 25px;
  }
  .bet img,
  .result img {
    width: 100%;
    height: 100%;
  }
  .result-values {
    color: #999;
    margin-right: 10px;
  }
  .result-values.win {
    font-weight: bold;
    color: red;
  }
  .jackpot {
    font-weight: bold;
    color: green;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
  .player-address {
    max-width: calc(100% - 30px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .player-address a {
    max-width: 100%;
  }
  .player-img-wrap {
    height: 25px;
    width: 25px;
    margin-right: 5px;
  }
  .wrap {
    width: 1000px;
    display: flex;
  }
  .player img {
    width: 100%;
    height: 100%;
  }
  .player-address {
    display: inline-block;
  }
`;
