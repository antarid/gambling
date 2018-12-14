import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

class NightMode extends React.Component {
  render() {
    return (
      <StyledTrigger
        nightMode={this.props.nightMode}
        onClick={() => this.props.toggleMode(this.props.nightMode)}
      >
        {this.props.nightMode ? (
          <i class="fas fa-sun" />
        ) : (
          <i class="fas fa-moon" />
        )}
      </StyledTrigger>
    );
  }
}

const StyledTrigger = styled.div`
  font-size: 20px;
  color: ${props => (props.nightMode ? '#fff' : '#000')};
  padding: 5px;
  display: flex;
  test-align: center;
  justify-content: center;
`;

export default connect(
  state => ({
    nightMode: state
  }),
  dispatch => ({
    toggleMode: currentMode => {
      console.log(currentMode);
      localStorage.setItem('nightMode', !currentMode);
      dispatch({
        type: 'TOGGLE_NIGHT_MODE'
      });
    }
  })
)(NightMode);
