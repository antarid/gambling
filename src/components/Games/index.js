import React from 'react';
import GameName from './GameName';
import Values from './Values';
import Bet from './Bet';
import Metamask from './Metamask';
import Chances from './Chances';
import Referrer from './Referrer';
import Statistics from './Statistics';
import Header from '../Header';
import Footer from '../Footer';
import {connect} from 'react-redux';
import styled from 'styled-components';
import abi from '../../assets/abi';
import Web3 from 'web3';

class Game extends React.Component {
  state = {
    bet: {
      money: 0.05,
      values: [],
      referrer: '',
      placed: false
    },
    chances: {
      chance: 0.5
    },
    statistics: {
      isLoaded: false,
      gameInfos: []
    },
    parameters: {
      isLoaded: false,
      minBet: 0,
      maxBet: 0,
      coefficient: 0,
      jackpotBet: 0,
      oraclizeFee: 0
    }
  };
  stateSetup = () => {
    switch (this.props.gameName) {
      case 'coin':
        this.setState({
          chances: {
            ...this.state.chances,
            chance: 0.5
          },
          bet: {
            ...this.state.bet,
            values: [Math.random() > 0.5 ? 1 : 0]
          }
        });
        break;
      case 'dice':
        this.setState({
          chances: {
            ...this.state.chances,
            chance: 0.5
          },
          bet: {
            ...this.state.bet,
            values: [1, 2, 3]
          }
        });
        break;
      case 'two-dice':
        this.setState({
          bet: {
            ...this.state.bet,
            values: [2, 3, 4, 5, 6]
          },
          chances: {
            ...this.state.chances,
            chance: 0.4167
          }
        });
        break;
      case 'etheroll':
        this.setState({
          chances: {
            ...this.state.chances,
            chance: 0.5
          },
          bet: {
            ...this.state.bet,
            values: [50]
          }
        });
        break;
    }
  };
  isParametersLoaded = parameter => {
    let flag = true;
    for (let p in this.state.parameters)
      if (p !== parameter && p !== 'isLoaded')
        flag = flag && this.state.parameters[p];
    return flag;
  };
  getParameters = () => {
    const web3 = new Web3(
      new Web3.providers.HttpProvider(
        'https://mainnet.infura.io/v3/cd4e5db67da54186bc711e2533424eb9'
      )
    );
    const contractAddress = '0x92d2633d929ca78707149110247b5349634a53e9';
    const contract = new web3.eth.Contract(abi, contractAddress);
    console.log(contract);
    Promise.all([
      contract.methods.MIN_BET().call(),
      contract.methods.BENEFICIAR_FEE_PERCENT().call(),
      contract.methods.MIN_JACKPOT_BET().call(),
      contract.methods.JACKPOT_FEE().call(),
      contract.methods.MAX_BET().call(),
      contract.methods.oraclizeFee().call()
    ]).then(res => {
      this.setState({
        ...this.state,
        parameters: {
          ...this.state.parameters,
          isLoaded: true,
          minBet: res[0] / 1000000000000000000,
          coefficient: (100 - res[1]) / 100,
          jackpotBet: res[2] / 1000000000000000000,
          jackpotFee: res[3] / 1000000000000000000,
          maxBet: res[4] / 1000000000000000000,
          oraclizeFee: res[5] / 1000000000000000000
        }
      });
    });
  };
  componentDidMount() {
    this.stateSetup();
    fetch(
      `https://nameless-mesa-18702.herokuapp.com/statistics/${
        this.props.gameName
      }`
    )
      .then(res => res.json())
      .then(gameInfos =>
        this.setState({
          statistics: {
            ...this.state.statistics,
            isLoaded: true,
            gameInfos
          }
        })
      );
    this.getParameters();
  }
  onBetChangeHandler = (bet, prevBet) => {
    if (isNaN(bet - '')) {
      this.setState({
        bet: {
          ...this.state.bet,
          money: prevBet
        }
      });
      return;
    }
    bet = Math.max(this.state.parameters.minBet, bet);
    bet = Math.min(this.state.parameters.maxBet, bet);
    bet = bet.toFixed(2) - '';
    this.setState({
      bet: {
        ...this.state.bet,
        money: bet
      }
    });
  };
  getValuesForTransaction = () => {
    switch (this.props.gameName) {
      case 'coin':
        return this.state.bet.values;
      case 'dice':
        return this.state.bet.values
          .map(i => i - 1)
          .sort((a, b) => (a > b ? 1 : -1));
      case 'two-dice':
        return this.state.bet.values
          .map(i => i - 2)
          .sort((a, b) => (a > b ? 1 : -1));
      case 'etheroll':
        const arr = [];
        for (let i = 0; i < this.state.bet.values[0]; i++) arr.push(i);
        return arr;
      default:
        return;
    }
  };
  getGameIndex = () => {
    switch (this.props.gameName) {
      case 'coin':
        return 0;
      case 'dice':
        return 1;
      case 'two-dice':
        return 2;
      case 'etheroll':
        return 3;
    }
  };
  isAddressValid = address => {
    const web3 = new Web3(
      new Web3.providers.HttpProvider(
        'https://mainnet.infura.io/v3/cd4e5db67da54186bc711e2533424eb9'
      )
    );
    return web3.utils.isAddress(address);
  };
  onBetButtonClickHandler = () => {
    const contractAddress = '0xE21A4328244D549fC47b9719C1581CB1B27dB254';
    const contract = window.web3.eth.contract(abi).at(contractAddress);
    this.setState({...this.state, bet: {...this.state.bet, placed: true}});
    window.web3.eth.getAccounts((err, accounts) => {
      console.log(
        'here: ',
        this.getGameIndex(),
        this.getValuesForTransaction(),
        this.state.bet.referrer + '123',
        this.isAddressValid(this.state.bet.referrer)
          ? this.state.bet.referrer
          : '0x0'
      );
      contract.placeBet.sendTransaction(
        this.getGameIndex(),
        this.getValuesForTransaction(),
        this.isAddressValid(this.state.bet.referrer)
          ? this.state.bet.referrer
          : '0x0',
        {
          from: accounts[0],
          value: this.state.bet.money * 1000000000000000000
        },
        (err, txhash) => {
          this.setState({
            ...this.state,
            bet: {...this.state.bet, placed: false}
          });
        }
      );
    });
  };
  render() {
    return (
      <div>
        <Header isOnMain={false} />
        <Container
          displayMessage={this.state.bet.placed}
          nightMode={this.props.nightMode}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-md-6">
                <GameName gameName={this.props.gameName} />
                <Values
                  gameName={this.props.gameName}
                  values={this.state.bet.values}
                  onValueClick={this.props.onValueClickHandler.bind(this)}
                />
                {this.state.parameters.isLoaded && (
                  <Bet
                    bet={this.state.bet.money}
                    onBetUpdated={this.onBetChangeHandler}
                    {...this.state.parameters}
                  />
                )}
                <Referrer
                  value={this.state.bet.referrer}
                  onReferrerChange={e =>
                    this.setState({
                      bet: {...this.state.bet, referrer: e.target.value}
                    })
                  }
                />
                <Metamask onButtonClick={this.onBetButtonClickHandler} />
              </div>

              {this.state.parameters.isLoaded && (
                <Chances
                  bet={this.state.bet.money}
                  coefficient={this.state.parameters.coefficient}
                  chance={this.state.chances.chance}
                  jackpotBet={this.state.parameters.jackpotBet}
                  jackpotFee={this.state.parameters.jackpotFee}
                  oraclizeFee={this.state.parameters.oraclizeFee}
                />
              )}
              <Statistics
                isLoaded={this.state.statistics.isLoaded}
                gameName={this.props.gameName}
                gameInfos={this.state.statistics.gameInfos}
              />
            </div>
          </div>
          <div className="metamask">
            Please check your Metamask and confirm a pending transaction.
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

const Container = styled.div`
  padding: 100px 0;
  padding-top: 170px;
  transition: all 0.5s ease;
  background-color: ${props => (props.nightMode ? '#101010' : '#fff')};
	color: ${props => (props.nightMode ? '#fff' : '#000')};
	position: relative;
	.metamask{
		display: ${props => (props.displayMessage ? 'block' : 'none')}
		position: fixed;
    width: 500px;
    height: 500px;
    right: -250px;
    top: -250px;
		padding: 50px;
		padding-right: 270px;
    padding-top: 300px;
    box-sizing: border-box;
		background: red;
		color: #fff;
    border-radius: 250px;
    z-index: 20;
	}
`;

export default connect(state => ({
  nightMode: state
}))(Game);
