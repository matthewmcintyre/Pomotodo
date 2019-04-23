import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { connect } from "react-redux";
import {
  setSession,
  setBreak,
  resetToDefault,
  tickSecond,
  setIntervalId
} from "../../actions/actions";
import TimerAdjuster from "./TimerAdjuster";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";

const PomoWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 220px;
  background-color: #395c6b;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Clock = styled.div`
  position:absolute;
  top:140px;
  cursor: pointer;
  z-index:1;
  font-size:30px;
  width:180px
  height:180px;
  background-color: ${props => (props.playing === 0 ? "#F46036" : "#7EBC89")};
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:50%;
  box-shadow: 1px 1px 5px;
`;

//wraps both of the timers
const AdjustTimerWrapper = styled.div`
  position: absolute;
  top: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

//https://css-tricks.com/making-pure-css-playpause-button/

const PlayPauseButton = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;

  box-sizing: border-box;
  height: 37px;

  border-color: transparent transparent transparent #202020;
  transition: 100ms all ease;
  will-change: border-width;
  cursor: pointer;

  // play state
  border-style: solid;
  border-width: 18.5px 0 18.5px 30px;

  // paused state
  &.pause {
    border-style: double;
    border-width: 0px 0 0px 30px;
  }
`;

const ResetButton = styled(FontAwesomeIcon)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 35px;
  color: #202020;
`;

const rotateLeft = keyframes`
0% {
  -webkit-transform: rotate(0deg);
}
50% {
  -webkit-transform: rotate(180deg);
}
100% {
  -webkit-transform: rotate(180deg);
}
`;

const rotateRight = keyframes`
0% {
  -webkit-transform: rotate(0deg);
}
50% {
  -webkit-transform: rotate(0deg);
}
100% {
  -webkit-transform: rotate(180deg);
}
`;

//https://medium.com/creative-technology-concepts-code/circular-loading-bar-using-css-only-a847650582ef
const CircleLoading = styled.div`
  position: absolute;
  top: 120px;
  z-index: 999;

  span {
    width: 200px;
    height: 200px;
    border-radius: 100%;
    position: absolute;
    opacity: 0.5;
    border: 10px double #5cb16e;
  }
`;

const LeftCircle = styled.div`
  right: calc(50% + 110px);
  position: absolute;
  clip: rect(0, 250px, 250px, 110px);

  span {
    clip: rect(0, 110px, 250px, 0px);
    animation: ${rotateLeft} ${props => props.duration + "s"} infinite linear;
    animation-play-state: ${props =>
      props.playing === 0 ? "paused" : "running"};
  }
`;
const RightCircle = styled.div`
  right: calc(50% + 110px);
  position: absolute;
  clip: rect(0px, 110px, 250px, 0px);
  span {
    clip: rect(0px, 250px, 250px, 110px);
    animation: ${rotateRight} ${props => props.duration + "s"} infinite linear;
    animation-play-state: ${props =>
      props.playing === 0 ? "paused" : "running"};
  }
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
            name="Session"
            time={this.props.timer}
            onChange={this.props.setSession(this.value)}
          />
          <TimerAdjuster
            name="Break"
            time={this.props.break}
            onChange={this.props.setBreak}
          />
        </AdjustTimerWrapper>
        <CircleLoading>
          <LeftCircle
            playing={this.props.intervalId}
            duration={this.props.timer}
          >
            <span />
          </LeftCircle>
          <RightCircle
            playing={this.props.intervalId}
            duration={this.props.timer}
          >
            <span />
          </RightCircle>
        </CircleLoading>
        <PlayPauseButton />
        <Clock onClick={this.timerStartOrStop} playing={this.props.intervalId}>
          {this.props.secondsRemaining}
        </Clock>
        <ResetButton icon={faRedoAlt} />
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
  setSession,
  setBreak,
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
