import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

class Bet extends React.Component {
  state = {
    isFocused: false,
    value: null
  };
  render() {
    const {
      bet,
      onBetUpdated,
      nightMode,
      minBet,
      jackpotBet,
      maxBet
    } = this.props;
    return (
      <Container nightMode={nightMode}>
        <div className="buttons-container">
          <button onClick={() => onBetUpdated(jackpotBet)}>jackpot</button>
          <button onClick={() => onBetUpdated(maxBet)}>max</button>
        </div>
        <div className="bet-container">
          <button onClick={() => onBetUpdated(bet - 0.01)}>-</button>
          <input
            className="bet"
            onChange={e =>
              this.setState({...this.state, value: e.target.value})
            }
            onFocus={() => this.setState({...this.state, isFocused: true})}
            onBlur={() => {
              onBetUpdated(this.state.value, bet);
              this.setState({...this.state, value: null, isFocused: false});
            }}
            value={
              this.state.isFocused
                ? this.state.value !== null
                  ? this.state.value
                  : bet.toFixed(2)
                : bet.toFixed(2)
            }
          />
          <button onClick={() => onBetUpdated(bet + 0.01)}>+</button>
        </div>
        <p>Your bet</p>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  margin-top: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .buttons-container {
    display: flex;
    width: 68%;
    margin-bottom: 10px;
    justify-content: center;
  }
  .buttons-container button {
    outline: none;
    border: none;
    font-weight: bold;
    background-color: red;
    color: #fff;
    padding: 10px 30px;
    margin: 0 5px;
  }
  .bet-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .bet-container button {
    outline: none;
    text-align: center;
    width: 15%;
    background: none;
    border: none;
    font-size: 40px;
    font-weight: 100;
    color: ${props => (props.nightMode ? '#fff' : '#000')};
  }
  p {
    color: #888;
    width: 100%;
    text-align: center;
  }
  .bet {
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    color: ${props => (props.nightMode ? '#fff' : '#000')};
    border: 1px solid ${props => (props.nightMode ? '#fff' : '#000')};
    text-align: center;
    width: 70%;
    font-size: 50px;
    font-weight: 200;
    border-radius: 5px;
  }
`;

export default connect(state => ({
  nightMode: state
}))(Bet);
