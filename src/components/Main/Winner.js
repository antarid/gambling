import React from 'react';
import styled from 'styled-components';

export default ({address, win}) => (
  <Container>
    <div className="row">
      <div className="col-6 d-flex align-items-center">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNScgaGVpZ2h0PScyNScgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjU1LDIyMywxMDIsMSk7IHN0cm9rZTpyZ2JhKDI1NSwyMjMsMTAyLDEpOyBzdHJva2Utd2lkdGg6MC4xMjU7Jz48cmVjdCAgeD0nMTAnIHk9JzInIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMTAnIHk9JzYnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMTAnIHk9JzEwJyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzEwJyB5PScxOCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PSc2JyB5PScyJyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE0JyB5PScyJyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzYnIHk9JzE0JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE0JyB5PScxNCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PSc2JyB5PScxOCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScxNCcgeT0nMTgnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMicgeT0nNicgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScxOCcgeT0nNicgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyJyB5PScxOCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScxOCcgeT0nMTgnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48L2c+PC9zdmc+"
          className="image"
        />
        <a href="#" className="link">
          {address}
        </a>
      </div>
      <div className="col-6 d-flex align-items-center">
        <div className="win">
          {win}
          <span>ETH</span>
        </div>
      </div>
    </div>
  </Container>
);

const Container = styled.div`
  margin-top: 7px;
  img {
    width: 35px;
    height: 35px;
  }
  .link {
    margin-left: 10px;
    color: red;
    text-decoration: none;
  }
  .win {
    font-weight: 700;
    font-size: 20px;
  }
  .win span {
    margin-left: 7px;
    font-size: 15px;
  }
`;
