import React from 'react';

class SpinnerDisplay extends React.Component{

  render(){
    return (
        <div className="ui active centered inline dimmer">
          <div className="ui massive text loader">{this.props.text}</div>
        </div>
    )
  }
}

export default SpinnerDisplay;