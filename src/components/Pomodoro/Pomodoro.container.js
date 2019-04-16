import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { connect } from "react-redux";
import {
  increaseTimer,
  increaseBreak,
  decreaseTimer,
  decreaseBreak,
  resetToDefault,
  tickSecond,
  setIntervalId
} from "../../actions/actions";
import TimerAdjuster from "./TimerAdjuster";

const PomoWrapper = styled.div`
  width: 100vw;
  height: 70vh;
  background-color: green;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Clock = styled.div`
cursor: pointer;
    font-size:30px;
    width:200px
    height:200px;
    background-color: red;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    `;

//wraps both of the timers
const AdjustTimerWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

class Pomodoro extends Component {
  componentDidMount() {
    console.log(this.props.intervalId + "component did mount");
  }

  componentDidUpdate() {
    console.log(this.props.intervalId + "component did update");

    //stops the timer when it hits 0
    if (this.props.secondsRemaining === 0) {
      //clears the interval
      clearInterval(this.props.intervalId);

      //reset interval id to 0 so timerStart can be called again
      this.props.setIntervalId(0);
    }
  }

  componentWillUnmount() {
    console.log(this.props.intervalId + "component will unmount");
  }

  timerStartOrStop = () => {
    if (this.props.intervalId === 0) {
      let id = setInterval(this.props.tickSecond, 1000);
      console.log(id);
      this.props.setIntervalId(id);
      console.log(this.props.intervalId + "interval ID");
    } else {
      clearInterval(this.props.intervalId);
      this.props.setIntervalId(0);
    }
  };

  render() {
    return (
      <PomoWrapper>
        <AdjustTimerWrapper>
          <TimerAdjuster
            name="Normal"
            time={this.props.timer}
            upClick={this.props.increaseTimer}
            downClick={this.props.decreaseTimer}
          />
          <TimerAdjuster
            name="Break"
            time={this.props.break}
            upClick={this.props.increaseBreak}
            downClick={this.props.decreaseBreak}
          />
        </AdjustTimerWrapper>
        <Clock onClick={this.timerStartOrStop}>
          {this.props.secondsRemaining}
        </Clock>
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
  decreaseBreak,
  resetToDefault,
  tickSecond,
  setIntervalId
};

export default connect(
  mapStateToProps,
  myActions
)(Pomodoro);

/*

TODO

1. when user adjusts timers it updates the remaining time
2. this can only be done when the timer is paused
        - maybe an error message if user tries to click?
3. starts counting down the break time after session
4. plays a sound on zero
5. has a reset to set the defaults
6. obvious play/pause rather than just clicking on circle


*/
