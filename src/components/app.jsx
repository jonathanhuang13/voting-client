import React from 'react';
import { List, Map } from 'immutable';

const pair  = List.of('V for Vendetta', 'Batman');
const tally = Map({ 'V for Vendetta': 5, 'Batman': 3 });
const winner = 'V For Vendetta';

export default React.createClass({
  render: function() {
    return React.cloneElement(this.props.children, { winner: winner, pair: pair, tally: tally });
  }
});
