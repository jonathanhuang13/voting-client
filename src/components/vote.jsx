import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [ PureRenderMixin ],

  getPair: function() {
    return this.props.pair || [];
  },

  isDisabled: function() {
    if(this.props.hasVoted){
      return true;
    } else {
      return false;
    }
  },

  handleClick: function(entry) {
    this.props.vote(entry);
  },

  hasVotedFor: function(entry) {
    return this.props.hasVoted === entry;
  },

  renderVotedFor: function(entry) {
    if(this.hasVotedFor(entry)){
      return(
        <div className='label'>Voted</div>
      );
    }
    else {
      return null;
    }
  },

  render: function() {
    return(
      <div className='voting'>
        {this.getPair().map(entry =>
          <button key={entry} disabled={this.isDisabled()} onClick={this.handleClick.bind(this, entry)}>
            <h1>{entry}</h1>
            {this.renderVotedFor(entry)}
          </button>
        )}
      </div>
    );
  }
});
