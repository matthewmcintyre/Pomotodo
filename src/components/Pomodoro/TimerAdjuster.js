import React from "react";
import styled from "styled-components";

const Text = styled.div`
  width: 20%;
  font-size: 17px;

  text-decoration: ${props => (props.active === true ? "underline" : "none")};
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
  width: 54%;
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

const Digits = styled.div`
  width: 8%;
  font-size: 20px;
`;

function TimerAdjuster(props) {
  return (
    <Wrapper>
      <Text active={props.active}>{props.name}</Text>
      <Slider
        type="range"
        min={props.min}
        max={props.max}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
      />
      <Digits>{props.time}</Digits>
    </Wrapper>
  );
}

export default TimerAdjuster;
