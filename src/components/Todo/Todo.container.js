import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  addTodo,
  updateTodo,
  completeTodo,
  showActive,
  showCompleted
} from "../../actions/actions";
import ListItem from "./ListItem";
import CompletedItem from "./CompletedItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

//wraps everything and has the background color...
const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  border: 20px solid #e6ebe0;
  max-width: 800px;
  margin: auto;
  height: calc(100vh - 230px);
  background-color: #b8c4bb;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const ViewOptionsWrapper = styled.div`
  text-align: center;
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: space-between;
  top: 15px;
`;

const ViewActive = styled.div`

  margin-left: 10px;
  height:30px;
  width:80px;
  font-size: 13px
  //when active change this maybe??? NOPE use z index instead and dif colors
  background-color: #97a19a;
`;

const ViewCompleted = styled.div`
  margin-right: 10px;
  font-size: 13px;
  height:30px;
  width:80px;
  font-size: 13px
  //when active change this maybe??? NOPE use z index instead and dif colors
  background-color: #95D9C3;
`;

//display active
const ActiveListWrapper = styled.div`
  overflow: scroll;
  position: absolute;
  top: 34px;
  box-sizing: border-box;
  width: calc(100% - 20px);
  height: calc(100% - 50px);
  background-color: #97a19a;

  z-index: ${props => (props.isActive === true ? "2" : "1")};

  ::-webkit-scrollbar {
    display: none;
  }
`;

//display completed
const CompletedListWrapper = styled.div`
  overflow: scroll;
  position: absolute;
  top: 34px;
  box-sizing: border-box;
  width: calc(100% - 20px);
  height: calc(100% - 50px);
  background-color: #95d9c3;

  z-index: ${props => (props.isActive === false ? "2" : "1")};

  ::-webkit-scrollbar {
    display: none;
  }
`;

const PlusWrapper = styled.div`
  margin: 10px;
  height: 50px;
  font-size: 25px;
  margin-left: 15px;
`;

const PlusIcon = styled(FontAwesomeIcon)``;

class Todo extends Component {
  //handles checkbox being marked
  //and task being completed
  handleComplete = event => {
    if (event.target.parentNode.firstChild.value) {
      this.props.completeTodo(
        event.target.parentNode.id,
        event.target.parentNode.firstChild.value
      );
    }
  };

  //handles todo item being filled out
  //this was implemented to resolve a bug where when completing a task it would overwrite other tasks
  handleChange = event => {
    this.props.updateTodo(event.target.parentNode.id, event.target.value);
  };

  render() {
    return (
      <Wrapper>
        <ViewOptionsWrapper>
          <ViewActive onClick={this.props.showActive}>Active</ViewActive>
          <ViewCompleted onClick={this.props.showCompleted}>
            Completed
          </ViewCompleted>
        </ViewOptionsWrapper>
        <ActiveListWrapper isActive={this.props.isActive}>
          {this.props.todos
            .filter(todo => todo.completed === false)
            .map(todo => (
              <ListItem
                defaultContent={todo.defaultContent}
                clickHandler={this.handleComplete}
                changeHandler={this.handleChange}
                id={todo.id}
                value={todo.content}
                key={"activeKey" + todo.id}
              />
            ))}
          <PlusWrapper>
            <PlusIcon icon={faPlus} onClick={this.props.addTodo} />
          </PlusWrapper>
        </ActiveListWrapper>
        <CompletedListWrapper isActive={this.props.isActive}>
          {this.props.todos
            .filter(todo => todo.completed === true)
            .map(todo => (
              <CompletedItem
                value={todo.content}
                id={todo.id}
                key={"completedKey" + todo.id}
              />
            ))}
        </CompletedListWrapper>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todos.todo,
  isActive: state.todoSettings.isActive,
  todos: state.todos
});

const myActions = {
  addTodo,
  updateTodo,
  completeTodo,
  showActive,
  showCompleted
};

export default connect(
  mapStateToProps,
  myActions
)(Todo);
