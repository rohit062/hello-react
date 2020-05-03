import React from 'react';
import './SeasonDisplay.css';

const _seasonConfig = {
  summer : {
    text: 'Let\'s hit the beach',
    iconName: 'sun'
  },
  winter : {
    text: 'Burr it\'s cold',
    iconName: 'snowflake'
  }
}

function getSeason(lat, month){
  if(month > 2 && month < 9){
    return lat > 0 ? 'summer' : 'winter';
  }
  return lat < 0 ? 'summer' : 'winter';
}

class SeasonDisplay extends React.Component{

  season = getSeason(this.props.lat, new Date().getMonth());
  text = _seasonConfig[this.season].text; iconName = _seasonConfig[this.season].iconName;

  render(){
    return (
      <div className={`season-display ${this.season}`}>
        <i className={`icon-left massive ${this.iconName} icon`}/>
        <h1>{this.text}</h1>
        <i className={`icon-right massive ${this.iconName} icon`}/>
      </div>
    )
  }
}

export default SeasonDisplay;