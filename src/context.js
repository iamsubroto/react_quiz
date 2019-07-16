import React, { Component } from "react";

export const AppContext = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "COUNT_MARKS":
      return {
        ...state,
        score: state.score + action.payload
      };
      case "COUNT_TIME":
        return {
          ...state,
          time: action.payload
        }
      default:
      return state;
  }
};
class AppProvider extends Component {
  state = {
    Count: 0,
    score: 0,
    time: {},
    questions: [
      {
        q_id: "abcd",
        q_no: 1,
        q: 'How do you write "Hello World" in an alert box?',
        q_ans: 'alert("Hello World");',
        q_options: [
          'alert("Hello World");',
          'alertBox("Hello World");',
          'msgBox("Hello World");',
          'msg("Hello World");'
        ]
      },
      {
        q_id: "efgh",
        q_no: 2,
        q: "Inside which HTML element do we put the JavaScript?",
        q_ans: "<script>",
        q_options: ["<script>", "<scripting>", "<javascript>", "<js>"]
      },
      {
        q_id: "wxyz",
        q_no: 3,
        q:
          "What is the correct JavaScript syntax to change the content of the HTML element below?",
        q_ans: 'document.getElementById("demo").innerHTML = "Hello World!";',
        q_options: [
          'document.getElementById("demo").innerHTML = "Hello World!";',
          'document.getElementByName("p").innerHTML = "Hello World!";',
          '#demo.innerHTML = "Hello World!";',
          'document.getElement("p").innerHTML = "Hello World!";'
        ]
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}


export default AppProvider;
export const AppConsumer = AppContext.Consumer;
