import React from 'react';
import styled from 'styled-components';

export default () => (
  <StyledContainer>
    <StyledIcon href="https://www.instagram.com/scramblecasinoeth/">
      <i className="fab fa-facebook" />
    </StyledIcon>
    <StyledIcon href="https://www.instagram.com/scramblecasinoeth/">
      <i className="fab fa-twitter" />
    </StyledIcon>
    <StyledIcon href="https://www.instagram.com/scramblecasinoeth/">
      <i className="fab fa-instagram" />
    </StyledIcon>
    <StyledIcon href="https://www.instagram.com/scramblecasinoeth/">
      <i className="fab fa-youtube" />
    </StyledIcon>
  </StyledContainer>
);

const StyledContainer = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledIcon = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 15px;
  i {
    font-size: 30px;
    color: red;
    transition: all 0.3s ease;
  }
  :hover {
    i {
      color: red;
    }
  }
`;
