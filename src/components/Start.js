import React from 'react'
import logo from '../start.png';
import { Link } from "react-router-dom"; 

const  Start = () => {
    return (
      <div className="valign_wrapper">
        <div className="start">
          <img
            className="animated fadeIn dealy-2s"
            src={logo}
            style={{ width: "200px", height: "200px" }}
          />
          <Link to="/start_quiz" className="btn-light animated fadeInUp">
            Start Quiz
          </Link>
        </div>
      </div>
    );
}


export default Start;