import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import App from './components/app';
import Voting from './components/voting';

const pair = [ 'V for Vendetta', 'Batman' ];
const routes = <Route component={App}>
  <Route path='/' component={Voting} />
</Route>

ReactDOM.render(
  <Router history={ hashHistory }>{routes}</Router>,
  document.getElementById('app')
);
