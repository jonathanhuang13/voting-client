import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [ PureRenderMixin ],

  getPair: function() {
    return this.props.pair || [];
  },

  getVotes: function(entry) {
    if(!this.props.tally)
      return 0

    const tally = this.props.tally.get(entry);

    if(tally)
      return tally;
    else
      return 0;
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
    return (
      <div className='results'>
        {this.renderPairs()}
      </div>
    );
  }
});
