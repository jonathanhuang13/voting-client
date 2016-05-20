import React from 'react'
import Winner from './winner'
import Vote from './vote'

export default React.createClass({
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
