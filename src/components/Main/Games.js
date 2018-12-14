import React from 'react';
import styled from 'styled-components';
import coin from '../../assets/icons/coin.png';
import dice from '../../assets/icons/dice.png';
import twoDice from '../../assets/icons/two-dice.png';
import etheroll from '../../assets/icons/etheroll.png';
import {NavLink} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import YouTube from 'react-youtube';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Element} from 'react-scroll';
import Web3 from 'web3';
import abi from '../../assets/abi';
import bg from '../../assets/games.jpg';

export default class Games extends React.Component {
  state = {
    coefficient: 0
  };
  componentDidMount() {
    const web3 = new Web3(
      new Web3.providers.HttpProvider(
        'https://mainnet.infura.io/v3/cd4e5db67da54186bc711e2533424eb9'
      )
    );
    const contractAddress = '0x92d2633d929ca78707149110247b5349634a53e9';
    const contract = new web3.eth.Contract(abi, contractAddress);
    contract.methods
      .BENEFICIAR_FEE_PERCENT()
      .call()
      .then(res =>
        this.setState({...this.state, coefficient: (100 - res) / 100})
      );
  }
  render() {
    const coinCoefficient = (this.state.coefficient * 2).toFixed(2);
    const diceCoefficient = (this.state.coefficient * 6).toFixed(2);
    const twoDiceCoefficient = (this.state.coefficient * 36).toFixed(2);
    const etherollCoefficient = this.state.coefficient * 100;
    return this.state.coefficient ? (
      <Element name="games">
        <Container>
          <div className="container">
            <div className="title">Games</div>
            <div
              style={{marginBottom: '100px'}}
              className="container d-flex align-items-center"
            >
              <OwlCarousel
                className="owl-theme"
                dots={false}
                loop
                responsive={{
                  990: {
                    nav: true
                  }
                }}
                items={1}
              >
                <div className="row justify-content-center">
                  <div className="col-lg-3 col-sm-6">
                    <Wrap>
                      <div className="icon-wrap">
                        <img src={coin} />
                      </div>
                      <div className="name">Coin flip</div>
                      <div className="description">
                        Heads or tails? Fifty-fifty <br />
                        Winning bet pays{' '}
                        {this.state.coefficient && coinCoefficient}×
                      </div>
                      <NavLink to="/coin">
                        <div className="button">Play now</div>
                      </NavLink>
                    </Wrap>
                  </div>
                  <div className="col-lg-8 col-sm-6">
                    <YouTube
                      videoId="2g811Eo7K8U"
                      opts={{
                        height: '100%',
                        width: '100%'
                      }}
                    />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-3 col-sm-6">
                    <Wrap href="/dice">
                      <div className="icon-wrap">
                        <img src={dice} />
                      </div>
                      <div className="name">Roll a dice</div>
                      <div className="description">
                        Bet on numbers, 1 to 6 <br />
                        Winning bet pays up to{' '}
                        {this.state.coefficient && diceCoefficient}×
                      </div>
                      <NavLink to="/dice">
                        <div className="button">Play now</div>
                      </NavLink>
                    </Wrap>
                  </div>
                  <div className="col-lg-8 col-sm-6">
                    <YouTube
                      videoId="2g811Eo7K8U"
                      opts={{
                        height: '100%',
                        width: '100%'
                      }}
                    />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-3 col-sm-6">
                    <Wrap href="/two-dice">
                      <div className="icon-wrap">
                        <img src={twoDice} />
                      </div>
                      <div className="name">Two dice</div>
                      <div className="description">
                        Bet on sum, 2 to 12 <br />
                        Winning bet pays up to{' '}
                        {this.state.coefficient && twoDiceCoefficient}×
                      </div>
                      <NavLink to="/two-dice">
                        <div className="button">Play now</div>
                      </NavLink>
                    </Wrap>
                  </div>
                  <div className="col-lg-8 col-sm-6">
                    <YouTube
                      videoId="2g811Eo7K8U"
                      opts={{
                        height: '100%',
                        width: '100%'
                      }}
                    />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-3 col-sm-6">
                    <Wrap href="/etheroll">
                      <div className="icon-wrap">
                        <img src={etheroll} />
                      </div>
                      <div className="name">Etheroll</div>
                      <div className="description">
                        ANY win chance, 1% to 97%
                        <br />
                        Winning bet pays up to{' '}
                        {this.state.coefficient && etherollCoefficient}×
                      </div>
                      <NavLink to="/etheroll">
                        <div className="button">Play now</div>
                      </NavLink>
                    </Wrap>
                  </div>
                  <div className="col-lg-8 col-sm-6">
                    <YouTube
                      videoId="2g811Eo7K8U"
                      opts={{
                        height: '100%',
                        width: '100%'
                      }}
                    />
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </Container>
      </Element>
    ) : null;
  }
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .owl-carousel {
    position: relative;
  }
  .title {
    z-index: 10;
    width: 100%;
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    margin-top: 100px;
    margin-bottom: 40px;
  }
  .owl-nav {
    color: red;
    margin-top: 0 !important;
    font-size: 40px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -15px;
    right: -15px;
    display: flex;
    justify-content: space-between;
    z-index: -1;
  }
  .owl-nav button {
    outline: none;
  }
  .owl-nav button span:hover {
    background-color: transparent;
  }
`;
const Wrap = styled.div`
  padding: 40px 0;
  a {
    text-decoration: none;
    color: #000;
  }
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  .icon-wrap {
    width: 70px;
    height: 70px;
  }
  .description {
    width: 100%;
  }
  .icon-wrap img {
    height: 100%;
  }
  .name {
    width: 100%;
    font-weight: 700;
    font-size: 35px;
    margin-bottom: 15px;
  }
  .button {
    margin-top: 30px;
    padding: 10px 30px;
    text-transform: uppercase;
    color: red;
    transition: all 0.3s ease;
    font-size: 16px;
    font-weight: 500;
    border: 1px solid #ff0606;
  }
  .button:hover {
    background-color: #ff0606;
    color: #fff;
  }
`;

// position: relative;
// background-color: white;
// &:before {
// 	position: absolute;
// 	content: '';
// 	width: 100%;
// 	height: 100%;
// 	background-image: url(${bg});
// 	filter: grayscale(100%);
// 	background-size: cover;
// 	opacity: 0.3;
// }
