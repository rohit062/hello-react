import React from 'react';

function getSeason(lat, month){
  console.log('===>',lat,month);
  if(month > 2 && month < 9){
    return lat > 0 ? 'Summer' : 'Winter';
  }
  return lat < 0 ? 'Summer' : 'Winter';
}

class WeatherWidget extends React.Component {
  constructor(props){
    super(props)
    this.state = { lat: null, long : null, season: null };
    window.navigator.geolocation.getCurrentPosition(
      (position) => { console.log(position);
        this.setState({ lat : position.coords.latitude, long:  position.coords.longitude, season: getSeason(position.coords.latitude,new Date().getMonth()) })},

      (error) => { console.log(error)}
    )
  }
  
  render(){
    return <div>Lat:{this.state.lat}/Long:{this.state.long}/Season:{this.state.season}</div>
  }
}

export default WeatherWidget;