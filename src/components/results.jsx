import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import Winner from './winner';

export const Results = React.createClass({
  mixins: [ PureRenderMixin ],

  getPair: function() {
    return this.props.pair || [];
  },

  getVotes: function(entry) {
    if(!this.props.tally)
      return 0;

    const tally = this.props.tally.get(entry);

    if(tally)
      return tally;
    else
      return 0;
  },
  
  renderWinner: function() {
    return <Winner ref='winner' winner={this.props.winner} />;
  },

  renderTallies: function() {
    return (
      <div className='results'>
        <div className='tally'>
          {this.renderPairs()}
        </div>
        <div className='next'>
          <button ref='next' className='next' onClick={this.props.next}>Next</button>
        </div>
      </div>
    );
  },

  renderPairs: function() {
    return this.getPair().map(this.renderPair);
  },

  renderPair: function(entry) {
    return(
      <div key={entry} className='entry'>
        <h1>{entry}</h1>
        <div className='voteCount'>
          {this.getVotes(entry)}
        </div>
      </div>
    );
  },

  render: function() {
    if(this.props.winner)
      return this.renderWinner();
    else
      return this.renderTallies();
  }
});

export const ResultsContainer = connect(function(state){
  return {
    pair:    state.getIn([ 'vote', 'pair' ]),
    tally:   state.getIn([ 'vote', 'tally' ]),
    winner:  state.get('winner')
  }
})(Results);
