import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { createGlobalStyle } from "styled-components";
import Pomodoro from "./components/Pomodoro/Pomodoro.container";
import Todo from "./components/Todo/Todo.container";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto+Mono');

  body {
    background: #E6EBE0;
    font-family: 'Roboto Mono', monospace;
  }
  * {
    margin: 0;
    padding: 0;
  }
`;

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Pomodoro />
    <Todo />
  </Provider>
);

export default App;
