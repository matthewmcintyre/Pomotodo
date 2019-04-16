import React from "react";
import styled, { keyframes } from "styled-components";

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

const Digit = styled.div`
  font-size: 20px;
`;

const Text = styled.div`
  font-size: 20px;
`;

function TimerAdjuster(props) {
  return (
    <AdjustTimer>
      <Text>{props.name}</Text>
      <UpArrow onClick={props.upClick} />
      <Digit>{props.time}</Digit>
      <DownArrow onClick={props.downClick} />
    </AdjustTimer>
  );
}

export default TimerAdjuster;
