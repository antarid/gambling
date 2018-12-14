import React from 'react';
import styled from 'styled-components';
import Winner from './Winner';

export default class Statistics extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-4">
          <Wrap>
            <div className="text">24h wagers</div>
            <div className="number">
              2541.01 <span>ETH</span>
            </div>
            <div className="text">5693 bets</div>
          </Wrap>
        </div>

        <div className="col-4">
          <Wrap>
            <div className="text">Recent jackpot</div>
            <div className="number">
              0.50 <span>ETH</span>
            </div>
            <div className="text">Won by 0xcd4211</div>
          </Wrap>
        </div>

        <div className="col-4">
          <Wrap>
            <div className="text">24h top winners</div>
            <Winner address="0xcd4211" win="14.25" />
            <Winner address="0x25dd11" win="9.15" />
            <Winner address="0xfd1c21" win="2.05" />
          </Wrap>
        </div>
      </div>
    );
  }
}

const Wrap = styled.div`
  height: 100%;
  padding: 15px 30px;
  box-shadow: 0px 1px 10px 0.2px #adadad;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: space-between;
  div {
    width: 100%;
  }
  .text {
    text-align: center;
    color: #999;
    font-size: 16px;
  }
  .number {
    text-align: center;
    font-size: 45px;
    font-weight: 700;
    margin: 20px 0;
  }
  .number span {
    font-size: 20px;
    margin-left: 10px;
  }
`;
