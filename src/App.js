import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom"; 


import './App.css';
import Start from './components/Start';
import End from './components/End';
import Quiz from './components/Quiz'

class App extends React.Component {
render() {
    return (
      <Router>
        <div className="App">

          <Switch>
            <Route exact path="/" component={Start} />
            <Route exact path="/start_quiz/" component={Quiz} />
            <Route exact path="/end_quiz" component={End} />
          </Switch>
        </div>
      </Router>
    );
}
}

export default App;
