import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, hashHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './components/app';
import { VotingContainer } from './components/voting';
import { ResultsContainer } from './components/results';

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    vote: {
      pair: [ 'V for Vendetta', 'Batman' ],
      tally: { 'V for Vendetta': 2 }
    }
  }
});

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
