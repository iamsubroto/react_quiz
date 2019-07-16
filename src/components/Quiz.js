import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppConsumer } from "../context";
import Timer from "./Timer";
import Option from "./Option";

class Quiz extends React.Component {
  state = {
    count: 0,
    isChecked: false,
    value: ""
  };


  handleCheck = e => {
    this.setState({ isChecked: e.target.checked, value: e.target.value });
  };
  handleSubmit = (q, q_ans, dispatch, e) => {
    e.preventDefault();

    if (q_ans == this.state.value) {
      dispatch({ type: "COUNT_MARKS", payload: 10 });
    } else {
      dispatch({ type: "COUNT_MARKS", payload: 0 });
    }
    this.setState(state => ({ count: state.count + 1 }));
    if (this.state.count + 1 == q.length) {
      this.props.history.push("/end_quiz");
    }
  };
  render() {
    return (
      <AppConsumer>
        {value => {
          let { count } = this.state;
          let { dispatch, questions, updateTime } = value;
          let { q_id, q_no, q, q_ans, q_options } = questions[count];
          return (
            <div className="quiz">
              <Timer />
              <div className="quiz_question animated fadeInUp">
                <h2>Q. {q}</h2>
                <div className="quiz_question_count">
                  <span>
                    {count + 1} / {questions.length}
                  </span>
                </div>
              </div>
              <form
                action=""
                onSubmit={this.handleSubmit.bind(
                  this,
                  questions,
                  q_ans,
                  dispatch
                )}
              >
                {q_options.map((option, i) => {
                  return (
                    <label
                      class="container animated fadeInUp"
                      key={q_no + "" + i}
                    >
                      {option}
                      <input
                        type="radio"
                        name="radio"
                        value={option}
                        onClick={this.handleCheck}
                      />
                      <span class="checkmark" />
                    </label>
                  );
                })}

                <button
                  className="btn-light animated fadeInLeft"
                  type="submit"
                >
                  Next Question
                </button>
              </form>
            </div>
          );
        }}
      </AppConsumer>
    );
  }
}

export default Quiz;
