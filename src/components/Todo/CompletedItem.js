import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px;
  height: 50px;
  width: calc(100%-20px);
  background-color: #efc88b;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const TextArea = styled.div`
  overflow: scroll;
  width: 80%;
  height: 30px;
  border-bottom: 2px solid #202020;
  background-color: #efc88b;
  padding: 2px;
  font-size: 20px;
`;

const CheckBox = styled.input`
  cursor: pointer;
  font-size: 22px;
  height: 25px;
  width: 25px;
`;

function CompletedItem(props) {
  return (
    <Wrapper>
      <TextArea>{props.value}</TextArea>
      <CheckBox type="checkbox" readOnly checked />
    </Wrapper>
  );
}

export default CompletedItem;
