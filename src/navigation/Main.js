import React from 'react';
import Description from '../components/Main/Description';
import Statistics from '../components/Main/Statistics';
import Games from '../components/Main/Games2';
import FAQ from '../components/Main/FAQ';
import Header from '../components/Header';
import HowItWorks from '../components/Main/HowItWorks';
import {connect} from 'react-redux';
import styled from 'styled-components';
import Footer from '../components/Footer';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header isOnMain={true} />
        <Container nightMode={this.props.nightMode}>
          <Description />
          <Games />
          <HowItWorks />
          <FAQ />
        </Container>
        <Footer />
      </div>
    );
  }
}

const Container = styled.div`
  padding-bottom: 100px;
  transition: all 0.5s ease;
  background-color: ${props => (props.nightMode ? '#101010' : '#fff')};
  color: ${props => (props.nightMode ? '#fff' : '#000')};
`;

export default connect(state => ({
  nightMode: state
}))(Main);
