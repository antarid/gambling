import React from 'react';
import styled from 'styled-components';
import bg from '../../assets/why-us.jpg';
import {Element} from 'react-scroll';
import {connect} from 'react-redux';

const StyledWhyUs = styled.div`
	margin-top: 20px;
	width: 100%;
	display: flex;
	align-items: center;
	.icon-container{
		width: 25%;
		display: flex;
		align-items:center;
		justify-content: center;
	}
	.icon-wrap{
		font-size: 35px;
		width: 70px;
		height: 70px;
		border-radius: 10em;
		display: flex;
		justify-content: center;
		align-items: center
		background-color: red;
		color: #fff;
	}
	.text-container{
		font-size: 18px;
		width: 75%;
	}
`;

const WhyUsItem = ({text, icon}) => (
  <div className="col-md-6">
    <StyledWhyUs>
      <div className="icon-container">
        <div className="icon-wrap">
          <i className={icon} />
        </div>
      </div>
      <div className="text-container">{text}</div>
    </StyledWhyUs>
  </div>
);

const whyUsTexts = [
  {
    text:
      'Open smart contract without the possibility of fraud (your funds are not transferred to our wallet)',
    icon: 'fas fa-file-signature'
  },
  {
    text:
      'Registration and deposit is not required, because games go through a metamask that allows you to play from your wallet. ',
    icon: 'far fa-credit-card'
  },
  {
    text:
      'You become part of the rapidly developing technology of the future - blockchain ',
    icon: 'fas fa-network-wired'
  },
  {text: 'Ability to win jackpot ', icon: 'far fa-money-bill-alt'},
  {
    text:
      'Ethereum can increase in price at any time, which will increase your winnings accordingly. ',
    icon: 'fas fa-chart-line'
  },
  // {
  //   text:
  //     'We present a high level of service so that you can enjoy the benefits of our product at any given time. ',
  //   icon: ''
  // },
  {text: 'Contact us is available in live chat.', icon: 'far fa-comments'}
];

const Description = ({nightMode}) => (
  <Element name="about-us">
    <Container nightMode={nightMode}>
      <div className="container">
        <div
          style={{margin: '40px 0'}}
          className="row d-flex align-items-center"
        >
          <div className="col-12">
            <div style={{padding: '0 10px'}}>
              <h2 style={{textAlign: 'center'}}>
                Fair games that pay{' '}
                <span style={{color: 'red'}}>Scramblegamble</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {whyUsTexts.map(item => (
            <WhyUsItem {...item} />
          ))}
        </div>
      </div>
    </Container>
  </Element>
);

const Container = styled.div`
  min-height: 100vh;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 10;
  &:before {
    z-index: 0;
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-image: url(${bg});
    filter: ${props => (props.nightMode ? 'grayscale(100%)' : '')};
    background-size: cover;
    opacity: 0.2;
  }
  h2 {
    font-size: 30px;
  }
`;

export default connect(state => ({nightMode: state}))(Description);
