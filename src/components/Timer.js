import React, { useContext } from "react";
import { AppConsumer } from "../context";
import { AppContext } from "../context";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sec: 0, min: 0 };
  }

  componentDidMount() {
      console.log(this.props.children)
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    const { dispatch } = this.context;
    dispatch({ type: "COUNT_TIME", payload: this.state });
    console.log(this.context);
    clearInterval(this.timerID);
  }
  tick() {
    if (this.state.sec >= 59) {
      this.setState({ sec: 0, min: this.state.min + 1 });
    } else {
      this.setState({ sec: this.state.sec + 1 });
    }
  }
  render() {
    let { sec, min } = this.state;
    return (
      <div className="timer animated fadeInDown">
        <span>
          {min < 10 ? `0${min}` : `${min}`} :{" "}
          {sec < 10 ? `0${sec}` : `${sec}`}
        </span>
      </div>
    );
  }
}

Timer.contextType = AppContext;
export default Timer;
