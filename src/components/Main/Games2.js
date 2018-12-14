import React from 'react';
import {Element} from 'react-scroll';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import coin from '../../assets/icons/filters/coin.png';
import twoDice from '../../assets/icons/filters/two-dice.png';
import etheroll from '../../assets/icons/etheroll.png';
import all from '../../assets/icons/filters/all.png';
import roulette from '../../assets/icons/filters/roulette.png';
import dice from '../../assets/icons/filters/dice.png';
import question from '../../assets/icons/question.png';
import {connect} from 'react-redux';

const games = [
  {
    name: 'coin flip',
    link: 'coin',
    image: coin,
    category: 'coin'
  },
  {
    name: 'dice',
    link: 'dice',
    image: dice,
    category: 'dice'
  },
  {
    name: 'two dice',
    link: 'two-dice',
    image: twoDice,
    category: 'dice'
  },
  {
    name: 'etheroll',
    link: 'etheroll',
    image: etheroll,
    category: 'roulette'
  }
];

const Filter = ({name, changeFilter, image, active, nightMode}) => (
  <StyledFilter
    nightMode={nightMode}
    active={active === name}
    onClick={() => changeFilter(name)}
  >
    <div className="filter-image">
      <img src={image} alt={name} />
    </div>
    <div className="filter-name">{name}</div>
  </StyledFilter>
);

const Game = ({empty, link, image, name, nightMode}) => {
  if (empty)
    return (
      <div class="col-lg-3 col-sm-6">
        <StyledGame inactive={true} nightMode={nightMode}>
          <img src={question} alt="" />
          <div className="game-image">coming soon</div>
        </StyledGame>
      </div>
    );
  else
    return (
      <div className="col-lg-3 col-sm-6">
        <NavLink
          to={link}
          style={{
            width: '100%',
            height: '100%',
            textDecoration: 'none'
          }}
        >
          <StyledGame nightMode={nightMode}>
            <img src={image} alt="" />
            <div className="game-image">{name}</div>
          </StyledGame>
        </NavLink>
      </div>
    );
};

const FilteredGames = ({games, filter, nightMode}) => {
  let filteredGames = [];
  if (filter === 'all') filteredGames = games;
  else filteredGames = games.filter(game => game.category === filter);
  while (filteredGames.length !== games.length)
    filteredGames.push({empty: true});
  return filteredGames.map(game => <Game nightMode={nightMode} {...game} />);
};

class Games extends React.Component {
  state = {
    filter: 'all'
  };
  filterChangedHandler = filter => {
    this.setState({filter});
  };
  render() {
    return (
      <Element name="games">
        <Container>
          <div className="container">
            <div className="row">
              <div className="title">Games</div>
            </div>
            <div className="row">
              <div className="col-md-2 d-flex flex-md-column d-column justify-content-center align-items-center">
                <Filter
                  nightMode={this.props.nightMode}
                  name="all"
                  active={this.state.filter}
                  image={all}
                  changeFilter={this.filterChangedHandler}
                />
                <Filter
                  nightMode={this.props.nightMode}
                  name="coin"
                  active={this.state.filter}
                  image={coin}
                  changeFilter={this.filterChangedHandler}
                />
                <Filter
                  nightMode={this.props.nightMode}
                  name="dice"
                  active={this.state.filter}
                  image={dice}
                  changeFilter={this.filterChangedHandler}
                />
                <Filter
                  nightMode={this.props.nightMode}
                  name="roulette"
                  active={this.state.filter}
                  image={roulette}
                  changeFilter={this.filterChangedHandler}
                />
              </div>
              <div className="col-md-10 ">
                <div
                  className="row d-flex align-items-center"
                  style={{height: '100%'}}
                >
                  <FilteredGames
                    nightMode={this.props.nightMode}
                    games={games}
                    filter={this.state.filter}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Element>
    );
  }
}

const StyledFilter = styled.div`
  margin: 10px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transform: scale(${props => (props.active ? 1.1 : 1)});
  .filter-image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 10em;
    background-color: ${props => (props.nightMode ? '#212121' : '#ebebeb')};
    transition: all 0.3s ease;
    box-shadow: ${props =>
      props.active
        ? props.nightMode
          ? '0 0 20px 0.1px #FD9292'
          : '0 0 20px 3px #FD9292'
        : ''};
    transform: scale(${props => (props.active ? 1.05 : 1)});
    margin-bottom: 10px;
  }
  .filter-image img {
    width: 70%;
  }
  .filter-name {
    display: none;
    font-size: 14px;
    text-align: center;
    text-transform: uppercase;
    color: ${props => (props.active ? 'red' : '')};
  }
`;

const Container = styled.div`
  min-height: 100vh;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  .title {
    z-index: 10;
    width: 100%;
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 40px;
  }
`;

const StyledGame = styled.div`
  padding: 30px;
  margin-top: 20px;
  border-radius: 10px;
  background-color: ${props => (props.nightMode ? '#212121' : '#ebebeb')};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  color: ${props => (props.nightMode ? '#fff' : '#000')};
  img {
    opacity: ${props => (props.inactive ? 0.3 : 1)};
    height: 100px;
    margin-bottom: 20px;
  }
  &:hover {
    box-shadow: ${props =>
      props.inactive
        ? ''
        : props.nightMode
        ? '0 0 20px 0.1px #FD9292'
        : '0 0 20px 3px #FD9292'}
    color: red;
  }
`;

export default connect(state => ({
  nightMode: state
}))(Games);
