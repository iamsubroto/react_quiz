import React from "react";
import achivement from "../achivement.png";
import { Link } from "react-router-dom";
import { AppConsumer } from "../context";

const End = () => {
  return (
    <AppConsumer>
      {value => {
        const { score, time } = value;
        const { min = 0, sec = 0 } = time;
        return (
          <div className="valign_wrapper">
            <div className="timer">
              <span>
                {min < 10 ? `0${min}` : `${min}`} :{" "}
                {sec < 10 ? `0${sec}` : `${sec}`}
              </span>
            </div>
            <div className="start">
              <img
                className="animated fadeInUp "
                src={achivement}
                style={{
                  width: "200px",
                  height: "200px"
                }}
              />
              <div className="score">
                Your Score is {score}
              </div>
            </div>
          </div>
        );
      }}
    </AppConsumer>
  );
};

export default End;
