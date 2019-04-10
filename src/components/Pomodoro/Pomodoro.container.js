import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { connect } from "react-redux";
import {
  increaseTimer,
  increaseBreak,
  decreaseTimer,
  decreasebreak,
  resetToDefault
} from "../../actions/actions";

const PomoWrapper = styled.div`
    width:100px
    height:100px;
    background-color: green;
    display:flex;
    justify-content:center;
    align-items:center;
`;

class Pomodoro extends Component {
  timerStart = () => {
    let a = setInterval(this.myFunc, 1000);
  };

  myFunc = () => {};

  render() {
    return (
      <PomoWrapper>
        <div>Hi</div>
      </PomoWrapper>
    );
  }
}

const mapStateToProps = state => ({
  secondsRemaining: state.pomoReducer.secondsRemaining,
  timer: state.pomoReducer.timer,
  break: state.pomoReducer.break
});

const myActions = {
  increaseTimer,
  increaseBreak,
  decreaseTimer,
  decreasebreak,
  resetToDefault
};

export default connect(
  mapStateToProps,
  myActions
)(Pomodoro);
