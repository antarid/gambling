import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

class Footer extends React.Component {
  render() {
    return (
      <Wrap nightMode={this.props.nightMode}>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-3 col-6 d-flex flex-wrap">
              <div className="title">Our games</div>
              <NavLink to="/coin">Coin flip</NavLink>
              <NavLink to="/dice">Dice</NavLink>
              <NavLink to="/two-dice">Two dice</NavLink>
              <NavLink to="/etheroll">Etheroll</NavLink>
            </div>
            <div className="col-lg-3 col-6 d-flex flex-wrap">
              <div className="title">Reach out to us</div>
              <a href="https://www.instagram.com/scramblecasinoeth/">
                Facebook
              </a>
              <a href="https://www.instagram.com/scramblecasinoeth/">
                Instagram
              </a>
              <a href="https://www.instagram.com/scramblecasinoeth/">Twitter</a>
              <a href="https://www.instagram.com/scramblecasinoeth/">Youtube</a>
            </div>
          </div>
        </div>
      </Wrap>
    );
  }
}

const Wrap = styled.div`
  padding: 20px 0;
  .title {
    color: ${props => (props.nightMode ? '#eee' : '#555')}
    margin-bottom: 10px;
		font-weight: 700;
		font-size: 18px;
  }

  a,
  .title {
    text-align: center;
    width: 100%;
  }
  a {
    font-size: 16px;
    text-decoration: none;
    transition: all 0.1s ease;
  }
  a:hover {
    color: red;
  }
  border-top: 1px solid ${props => (props.nightMode ? '#222222' : '#E2E2E2')};
  background-color: ${props => (props.nightMode ? '#222222' : '#fff')};
  a {
    color: ${props => (props.nightMode ? '#bbb' : '#000')};
  }
  transition: all 0.2s ease;
`;

export default connect(state => ({
  nightMode: state
}))(Footer);
