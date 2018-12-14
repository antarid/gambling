import React from 'react';
import IconLinks from './IconLinks';
import Menu from './Menu';
import NightMode from './NightMode';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {animateScroll as scroll} from 'react-scroll';
import logo from '../../assets/logo.png';
import darkLogo from '../../assets/dark-logo.png';

class Header extends React.Component {
  state = {
    isOpened: false
  };
  render() {
    return (
      <Container
        isOpened={this.state.isOpened}
        nightMode={this.props.nightMode}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-8 d-flex justify-content-start align-items-center">
              <NavLink
                to="/"
                onClick={() => setTimeout(() => scroll.scrollToTop(), 0)}
                style={{zIndex: 100}}
                activeStyle={{textDecoration: 'none'}}
              >
                <div className="logo">
                  <img src={this.props.nightMode ? darkLogo : logo} alt="" />
                </div>
              </NavLink>
            </div>
            <div className="col-lg-8 col-4 d-lg-flex d-none justify-content-end align-items-center">
              <Menu isOnMain={this.props.isOnMain} />
              <IconLinks />
              <NightMode />
            </div>
            <div className="col-4 d-lg-none d-flex justify-content-end">
              <StyledIcon
                onClick={() => this.setState({isOpened: !this.state.isOpened})}
              >
                <i className="fa fa-bars" />
              </StyledIcon>
            </div>
          </div>
        </div>
        <div className="mobile">
          <Menu
            isOnMain={this.props.isOnMain}
            closeMenu={() => this.setState({isOpened: false})}
          />
          <IconLinks closeMenu={() => this.setState({isOpened: false})} />
          <NightMode />
        </div>
      </Container>
    );
  }
}

const StyledIcon = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  z-index: 30;
  padding: 15px;
  i {
    font-size: 30px;
    color: #aaa;
    transition: all 0.3s ease;
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  box-shadow: ${props =>
    props.nightMode ? 'none' : '0px 1px 10px 0.1px #adadad'};
  background-color: ${props => (props.nightMode ? '#222222' : '#fff')};
  a {
    color: ${props => (props.nightMode ? '#fff' : '#000')};
  }
  .logo {
    width: 270px;
  }
  .logo img {
    width: 100%;
  }
  transition: all 0.2s ease;
  .mobile {
    visibility: ${props => (props.isOpened ? 'visible' : 'hidden')};
    opacity: ${props => (props.isOpened ? 1 : 0)};
    background-color: rgba(
      ${props => (props.nightMode ? '0,0,0,' : '255,255,255,')} 0.9
    );

    transition: all 0.4s ease;
    z-index: 9;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export default connect(state => ({
  nightMode: state
}))(Header);
