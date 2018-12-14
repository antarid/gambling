import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from './navigation/Main';
import './bootstrap-grid.min.css';
import Coin from './navigation/Coin';
import Dice from './navigation/Dice';
import TwoDice from './navigation/TwoDice';
import Etheroll from './navigation/Etheroll';
import FAQ from './navigation/FAQ';
import WhyUs from './navigation/WhyUs';
import styled from 'styled-components';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/coin" component={Coin} />
          <Route path="/faq" component={FAQ} />
          <Route path="/why-us" component={WhyUs} />
          <Route path="/dice" component={Dice} />
          <Route path="/two-dice" component={TwoDice} />
          <Route path="/etheroll" component={Etheroll} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
