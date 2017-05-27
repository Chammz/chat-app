import React from 'react';
import Home from './Home';
import Room from './Room';
import {browserHistory, Router, Route} from 'react-router';

export default (props) => (
  // https://github.com/ReactTraining/react-router/issues/2704
  <Router key={Math.random()} {...props} history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="/:roomName" component={Room} />
  </Router>
)
