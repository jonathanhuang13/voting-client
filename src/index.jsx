import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, hashHistory } from 'react-router';
import App from './components/app';
import Voting from './components/voting';
import Results from './components/results';

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route component={App}>
      <Route path='/' component={Voting} />
      <Route path='/results' component={Results} />
    </Route>
  </Router>,

  document.getElementById('app')
);
