import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { connect } from "react-redux";
import {
  addTodo,
  removeTodo,
  completeTodo,
  undoCompleteTodo
} from "../../actions/actions";

class Todo extends Component {
  render() {
    return <div>Hi</div>;
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
