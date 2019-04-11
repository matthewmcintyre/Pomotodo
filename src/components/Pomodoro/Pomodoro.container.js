import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { connect } from "react-redux";
import {
  increaseTimer,
  increaseBreak,
  decreaseTimer,
  decreasebreak,
  resetToDefault,
  tickSecond,
  setIntervalId
} from "../../actions/actions";

const PomoWrapper = styled.div`
  width: 100vw;
  height: 50vh;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Clock = styled.div`
    font-size:30px;
    width:200px
    height:200px;
    background-color: red;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    `;

//wrapper for adjusting break and timer
const AdjustTimer = styled.div`
  display: flex;
  flex-direction: column;
`;

const UpArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 50px solid red;
`;

const DownArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-top: 50px solid red;
`;

class Pomodoro extends Component {
  componentDidMount() {
    console.log(this.props.intervalId + "component did mount");
  }

  componentDidUpdate() {
    console.log(this.props.intervalId + "component did update");
    if (this.props.secondsRemaining === 0) {
      clearInterval(this.props.intervalId);
    }
  }

  componentWillUnmount() {
    console.log(this.props.intervalId + "component will unmount");
  }

  timerStart = () => {
    if (this.props.intervalId === 0) {
      let id = setInterval(this.props.tickSecond, 1000);
      console.log(id);
      this.props.setIntervalId(id);
      console.log(this.props.intervalId + "interval ID");
    }
  };

  render() {
    return (
      <PomoWrapper>
        <AdjustTimer>
          <UpArrow />
          LMAFO
          <DownArrow />
        </AdjustTimer>
        <Clock onClick={this.timerStart}>{this.props.secondsRemaining}</Clock>
      </PomoWrapper>
    );
  }
}

const mapStateToProps = state => ({
  secondsRemaining: state.pomoReducer.secondsRemaining,
  timer: state.pomoReducer.timer,
  break: state.pomoReducer.break,
  intervalId: state.pomoReducer.intervalId
});

const myActions = {
  increaseTimer,
  increaseBreak,
  decreaseTimer,
  decreasebreak,
  resetToDefault,
  tickSecond,
  setIntervalId
};

export default connect(
  mapStateToProps,
  myActions
)(Pomodoro);
