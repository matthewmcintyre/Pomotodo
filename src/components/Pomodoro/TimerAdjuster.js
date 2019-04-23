import React from "react";
import styled, { keyframes } from "styled-components";
import { connect } from "react-redux";
import { setSession, setBreak } from "../../actions/actions";

//wrapper for adjusting break and timer
const AdjustTimer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UpArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 20px solid red;
  cursor: pointer;
`;

const DownArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 20px solid red;
  cursor: pointer;
`;

const Text = styled.div`
  width: 30%;
  font-size: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-evenly;
  align-items: center;
`;

//https://www.w3schools.com/howto/howto_js_rangeslider.asp
const Slider = styled.input`
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;
  width: 60%;
  height: 10px;
  border-radius: 4px;
  background: #e6e1c5;
  outline: none; /* Remove outline */
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
  transition: opacity 0.2s;

  ::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background: #4caf50; /* Green background */
    cursor: pointer; /* Cursor on hover */
    box-shadow: 1px 1px 5px black;
  }

  ::-moz-range-thumb {
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background: #4caf50; /* Green background */
    cursor: pointer; /* Cursor on hover */
    box-shadow: 1px 1px 5px black;
  }
`;

function TimerAdjuster(props) {
  return (
    <Wrapper>
      <Text>
        {props.name}: {props.time}
      </Text>
      <Slider type="range" min="1" max="60" value="50" />
    </Wrapper>
    /*
    <AdjustTimer>
      <Text>{props.name}</Text>
      <UpArrow onClick={props.upClick} />
      <Digit>{props.time} Minutes</Digit>
      <DownArrow onClick={props.downClick} />
    </AdjustTimer>
    */
  );
}

const mapStateToProps = state => ({
  secondsRemaining: state.pomoReducer.secondsRemaining,
  timer: state.pomoReducer.timer,
  break: state.pomoReducer.break,
  intervalId: state.pomoReducer.intervalId
});

const myActions = {
  setSession,
  setBreak
};

export default connect(
  mapStateToProps,
  myActions
)(TimerAdjuster);
