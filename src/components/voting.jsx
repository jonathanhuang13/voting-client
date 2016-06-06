import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import Winner from './winner';
import Vote from './vote';

export const Voting = React.createClass({
  mixins: [ PureRenderMixin ],
  
  render: function() {
    if(this.props.winner){
      return (
        <Winner ref='winner' winner={this.props.winner} />
      );
    } else {
      return (
        <Vote {...this.props} />
      );
    };
  }
});

export const VotingContainer = connect(function(state){
  return {
    pair: state.getIn([ 'vote', 'pair' ]),
    winner: state.get('winner')
  };
})(Voting);
