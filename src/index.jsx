import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/voting';

const pair = [ 'V for Vendetta', 'Batman' ];

ReactDOM.render(
  <Voting pair={pair} hasVoted='V for Vendetta' winner='V for Vendetta' />,
  document.getElementById('app')
);
