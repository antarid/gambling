import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {Link, scroller} from 'react-scroll';

const onClick = name =>
  setTimeout(() => {
    scroller.scrollTo(name, {
      smooth: true,
      duration: 500,
      offset: 0
    });
  }, 0);

export default ({isOnMain, closeMenu = () => {}}) => {
  let links = (
    <StyledContainer className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
      <NavLink onClick={() => onClick('about-us')} to="/">
        About us
      </NavLink>
      <NavLink onClick={() => onClick('games')} to="/">
        Games
      </NavLink>
      <NavLink onClick={() => onClick('how-it-works')} to="/">
        How it works
      </NavLink>
      <NavLink onClick={() => onClick('faq')} to="/">
        FAQ
      </NavLink>
    </StyledContainer>
  );
  if (isOnMain) {
    links = (
      <StyledContainer className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
        <Link
          to="about-us"
          onClick={() => closeMenu()}
          smooth={true}
          duration={500}
          offset={0}
        >
          About us
        </Link>
        <Link
          smooth={true}
          onClick={() => closeMenu()}
          duration={500}
          offset={0}
          to="games"
        >
          Games
        </Link>
        <Link
          smooth={true}
          onClick={() => closeMenu()}
          duration={500}
          offset={0}
          to="how-it-works"
        >
          How it works
        </Link>
        <Link
          smooth={true}
          onClick={() => closeMenu()}
          duration={500}
          offset={0}
          to="faq"
        >
          FAQ
        </Link>
      </StyledContainer>
    );
  }
  return links;
};

const StyledContainer = styled.div`
  padding: 0 10px;
  a {
    outline: none;
    cursor: pointer;
    text-decoration: none;
    padding: 15px;
  }
  a:hover {
    transition: all 0.3s ease;
    color: red;
  }
`;
