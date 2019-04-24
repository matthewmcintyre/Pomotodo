import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { connect } from "react-redux";
import {
  setSession,
  setBreak,
  resetToDefault,
  tickSecond,
  setIntervalId,
  setRemainingTime
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
  top:120px;
  cursor: pointer;
  z-index:1;
  font-size:35px;
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

  //sets play or pause styling
  border-style: ${props => (props.playing === 0 ? "solid" : "double")};
  border-width: ${props =>
    props.playing === 0 ? "18.5px 0 18.5px 30px" : "0px 0 0px 30px"};

  :hover {
    border-color: transparent transparent transparent #404040;
  }
`;

const ResetButton = styled(FontAwesomeIcon)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 35px;
  color: #202020;

  :hover {
    color: #404040;
  }
`;

class Pomodoro extends Component {
  componentDidMount() {
    console.log(this.props.intervalId + "component did mount");
  }

  componentDidUpdate() {
    console.log(this.props.intervalId + "component did update");

    //timer hits 0
    if (this.props.secondsRemaining === 0) {
      //PLAY A SOUND

      //what timer just finished?
      //set time remaining to the other one
      if (this.props.inSession === true) {
        this.props.setRemainingTime(false);
      } else {
        this.props.setRemainingTime(true);
      }
    }
  }

  timerStartOrStop = () => {
    if (this.props.intervalId === 0) {
      let id = setInterval(this.props.tickSecond, 1000);
      this.props.setIntervalId(id);
    } else {
      clearInterval(this.props.intervalId);
      this.props.setIntervalId(0);
    }
  };

  changeSession = e => {
    this.props.setSession(e.target.value);
  };

  changeBreak = e => {
    this.props.setBreak(e.target.value);
  };

  resetAll = () => {
    clearInterval(this.props.intervalId);
    this.props.resetToDefault();
  };

  render() {
    return (
      <PomoWrapper>
        <AdjustTimerWrapper>
          <TimerAdjuster
            name="SESSION"
            min="1"
            max="60"
            defaultValue="25"
            time={this.props.session}
            onChange={this.changeSession}
          />
          <TimerAdjuster
            name="BREAK"
            min="1"
            max="25"
            defaultValue="5"
            time={this.props.break}
            onChange={this.changeBreak}
          />
        </AdjustTimerWrapper>
        <PlayPauseButton
          onClick={this.timerStartOrStop}
          playing={this.props.intervalId}
        />
        <Clock onClick={this.timerStartOrStop} playing={this.props.intervalId}>
          {this.props.mm}:{this.props.ss}
        </Clock>
        <ResetButton icon={faRedoAlt} onClick={this.resetAll} />
      </PomoWrapper>
    );
  }
}

const mapStateToProps = state => ({
  secondsRemaining: state.pomoReducer.secondsRemaining,
  session: state.pomoReducer.session,
  break: state.pomoReducer.break,
  intervalId: state.pomoReducer.intervalId,
  inSession: state.pomoReducer.inSession,
  mm: state.pomoReducer.mm,
  ss: state.pomoReducer.ss
});

const myActions = {
  setSession,
  setBreak,
  resetToDefault,
  tickSecond,
  setIntervalId,
  setRemainingTime
};

export default connect(
  mapStateToProps,
  myActions
)(Pomodoro);
