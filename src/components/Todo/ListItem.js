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

const TextArea = styled.input`
  width: 80%;
  height: 30px;
  border: none;
  border-bottom: 2px solid #202020;
  background-color: #efc88b;
  padding: 2px;
  font-size: 20px;
  outline: none;

  :focus {
    background-color: #dab67f;
  }
`;

const NewCheckBox = styled.div`
  margin-right: 1px;
  cursor: pointer;
  height: 20px;
  width: 25px;
  background-color: #c4a472;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 6px;
  padding-left: 0px;
  font-size: 25px;
  color: #998059;

  :hover {
    color: #423726;
  }
`;

function ListItem(props) {
  return (
    <Wrapper id={props.id}>
      <TextArea
        type="text"
        maxLength="100"
        placeholder={props.defaultContent}
        value={props.value}
        onChange={props.changeHandler}
      />
      <NewCheckBox onClick={props.clickHandler}>x</NewCheckBox>
    </Wrapper>
  );
}

export default ListItem;

/*
      <CheckBox type="checkbox" onChange={props.handleComplete} id={props.id} />

      <NewCheckBox onClick={props.handleComplete} id={props.id}>
        <Tick type={faCheck} />
      </NewCheckBox>
      */
