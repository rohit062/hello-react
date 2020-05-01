import React from 'react';


class WeatherWidget extends React.Component {
  constructor(props){
    super(props)
    this.state = { lat: null, long : null }
    window.navigator.geolocation.getCurrentPosition(
      (position) => { console.log(position);
        this.setState({ lat : position.coords.latitude, long:  position.coords.longitude })},
      (error) => { console.log(error)}
    )
  }
  
  render(){
    return <div>Lat:{this.state.lat}/Long:{this.state.long}</div>
  }
}

export default WeatherWidget;