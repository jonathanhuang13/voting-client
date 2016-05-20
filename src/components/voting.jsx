import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Winner from './winner';
import Vote from './vote';

export default React.createClass({
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
