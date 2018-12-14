import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Element} from 'react-scroll';
import bg from '../../assets/how-it-works.jpg';

const HowItWorks = ({nightMode}) => (
  <Element id="how-it-works" name="how-it-works">
    <Container nightMode={nightMode}>
      <div className="container">
        <div
          style={{margin: '100px 0'}}
          className="row d-flex justify-content-center"
        >
          <div className="col-12">
            <div
              style={{
                width: '100%',
                textAlign: 'center',
                fontSize: '50px',
                fontWeight: 1000,
                marginBottom: '20px'
              }}
            >
              How it works
            </div>
          </div>
          <div
            style={{marginTop: '30px'}}
            className="col-xl-3 col-lg-4 col-sm-6"
          >
            <Wrap nightMode={nightMode}>
              <div className="icon-wrap">
                <i class="fas fa-code" />
              </div>
              <div className="description">
                We have written the contract, you can find it{' '}
                <a href="https://github.com">here</a>
              </div>
            </Wrap>
          </div>

          <div
            style={{marginTop: '30px'}}
            className="col-xl-3 col-lg-4 col-sm-6"
          >
            <Wrap nightMode={nightMode}>
              <div className="icon-wrap">
                <i class="fas fa-cog" />
              </div>
              <div className="description">
                At once you have send the money the code of contract
                automatically executes, it decides whether you have won or not
              </div>
            </Wrap>
          </div>

          <div
            style={{marginTop: '30px'}}
            className="col-xl-3 col-lg-4 col-sm-6"
          >
            <Wrap nightMode={nightMode}>
              <div className="icon-wrap">
                <i class="fas fa-clock" />
              </div>
              <div className="description">
                If you win, you will get your prize within 15 minutes
              </div>
            </Wrap>
          </div>
        </div>
      </div>
    </Container>
  </Element>
);

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  &:before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-image: url(${bg});
    filter: ${props => (props.nightMode ? 'grayscale(100%)' : '')};
    background-size: cover;
    opacity: 0.4;
  }
`;

const Wrap = styled.div`
  display: flex;
  height: 100%;
  padding: 30px 10px;
  flex-direction: column;
  background-color: ${props => (props.nightMode ? '#212121' : '#EDEDED')};

  text-align: center;
  a {
    text-decoration: none;
    color: red;
  }
  .title {
    font-size: 50px;
  }
  .description {
    width: 100%;
  }
  .icon-wrap {
    width: 100%;
  }
  .icon-wrap i {
    font-size: 50px;
    color: red;
  }
  .description {
    letter-spacing: 0.5px;
    font-size: 17px;
    margin-top: 20px;
  }
`;

export default connect(state => ({
  nightMode: state
}))(HowItWorks);
