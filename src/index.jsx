import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, hashHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import io from 'socket.io-client';
import reducer from './reducer';
import { setState } from './action_creators';
import App from './components/app';
import { VotingContainer } from './components/voting';
import { ResultsContainer } from './components/results';

const store = createStore(reducer);
const socket = io(`${location.protocol}//${location.hostname}:8090`);

socket.on('state', state =>
  store.dispatch(setState(state))
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={ hashHistory }>
      <Route component={App}>
        <Route path='/' component={VotingContainer} />
        <Route path='/results' component={ResultsContainer} />
      </Route>
    </Router>
  </Provider>,

  document.getElementById('app')
);
