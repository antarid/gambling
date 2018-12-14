import React from 'react';
import styled from 'styled-components';
import metamask from '../../assets/icons/metamask.png';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';

class Metamask extends React.Component {
  state = {
    installed: false,
    loggedIn: false,
    isLoaded: false,
    mainNet: false
  };
  logIn = () => {
    this.setState({loggedIn: true});
  };
  componentWillMount() {
    if (window.web3) {
      this.setState({installed: true});
      window.web3.version.getNetwork((err, type) => {
        if (type === '1') {
          this.setState({mainNet: true});
          window.web3.eth.getAccounts((err, accounts) => {
            if (err != null) alert('An error occurred: ' + err);
            else if (accounts.length != 0)
              this.setState({isLoaded: true, loggedIn: true});
            else {
              this.setState({isLoaded: true, loggedIn: false});
              let interval = setInterval(() => {
                window.web3.eth.getAccounts((err, accounts) => {
                  if (accounts.length != 0) {
                    this.setState({isLoaded: true, loggedIn: true});
                    clearInterval(interval);
                  }
                });
              }, 1000);
            }
          });
        } else this.setState({mainNet: false, isLoaded: true});
      });
    }
  }
  render() {
    let content;
    if (!this.state.installed)
      content = (
        <div>
          <div className="img-wrap">
            <img src={metamask} alt="metamask" />
          </div>
          <div className="message">Install metamask please</div>
        </div>
      );
    else if (!this.state.isLoaded)
      content = (
        <Loader type="TailSpin" color="#ff0000" height={50} width={50} />
      );
    else if (!this.state.mainNet)
      content = (
        <div>
          <div className="img-wrap">
            <img src={metamask} alt="metamask" />
          </div>
          <div className="message">Switch to main net please</div>
        </div>
      );
    else if (this.state.installed && !this.state.loggedIn)
      content = (
        <div>
          <div className="img-wrap">
            <img src={metamask} alt="metamask" />
          </div>
          <div className="message">Log in please</div>
        </div>
      );
    else
      content = (
        <div>
          <button onClick={this.props.onButtonClick}>make a bet</button>
        </div>
      );
    return <Container nightMode={this.props.nightMode}>{content}</Container>;
  }
}

const Container = styled.div`
  border-radius: 10px;
  border: 1px solid ${props => (props.nightMode ? '#eee' : '#999')};
  padding: 10px 30px;
  > div {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  }
  .message {
    margin-left: 10px;
    margin-top: 10px;
    font-weight: 200;
    font-size: 22px;
  }
  .img-wrap {
    width: 60px;
  }
  .img-wrap img {
    width: 100%;
  }
  button {
    color: #fff;
    font-weight: bold;
    background-color: red;
    border: 1px solid red;
    padding: 10px 30px;
    margin: 10px;
  }
`;

export default connect(state => ({
  nightMode: state
}))(Metamask);
