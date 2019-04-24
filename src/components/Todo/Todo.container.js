import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { connect } from "react-redux";
import {
  addTodo,
  removeTodo,
  completeTodo,
  undoCompleteTodo
} from "../../actions/actions";

const ListWrapper = styled.div`
  box-sizing: border-box;
  border: 20px solid #e6ebe0;
  position: relative;
  width: 100vw;
  height: calc(100vh - 220px);
  background-color: #b8c4bb;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

class Todo extends Component {
  render() {
    return <ListWrapper>Hi</ListWrapper>;
  }
}

const mapStateToProps = state => ({
  todo: state.todoReducer.todo
});

const myActions = { addTodo, removeTodo, completeTodo, undoCompleteTodo };

export default connect(
  mapStateToProps,
  myActions
)(Todo);
