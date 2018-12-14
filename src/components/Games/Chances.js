import React from 'react';
import styled from 'styled-components';

export default ({
  chance,
  coefficient,
  bet,
  jackpotBet,
  jackpotFee,
  oraclizeFee
}) => {
  const moneyAfterPercent = bet * coefficient;
  const moneyAfterFee =
    moneyAfterPercent >= jackpotBet
      ? moneyAfterPercent - jackpotFee - oraclizeFee
      : moneyAfterPercent - oraclizeFee;
  let winningMoney = moneyAfterFee / chance;
  winningMoney = Math.floor(winningMoney * 1000) / 1000;
  const multiplicator = winningMoney / bet;
  return (
    <div className="col-xl-4 col-md-6">
      <div className="row">
        <Container>
          <div className="col-md-12 col-6 d-flex align-items-center">
            <div className="chance-item">
              <div className="title">Winning chance</div>
              <div className="value">{(chance * 100).toFixed(2)}%</div>
            </div>
          </div>
          <div className="col-md-12 col-6 d-flex align-items-center">
            <div className="chance-item">
              <div className="title">Winning bet pays</div>
              <div className="value">{multiplicator.toFixed(2)}x</div>
              <div className="description">
                You will win {winningMoney.toFixed(3)}ETH
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .chance-item {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-top: 60px;
  }
  .chance-item div {
    width: 100%;
    text-align: center;
  }
  .title {
    font-size: 25px;
    font-weight: 200;
  }
  .description {
    color: red;
    font-size: 16px;
  }
  .value {
    margin: 10px 0;
    font-weight: 700;
    font-size: 45px;
  }
`;
