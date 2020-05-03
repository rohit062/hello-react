import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import SpinnerDisplay from './SpinnerDisplay';
import ErrorDisplay from './ErrorDisplay';


class WeatherWidget extends React.Component {
  state = { lat: null, long : null, season: null, error: null };

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position) => { console.log(position);
        this.setState({ lat : position.coords.latitude, long:  position.coords.longitude })},
      (error) => {  console.log(error);
        this.setState({ error  : error.message })}
    )
  }

  render(){
    if(this.state && this.state.error){
      return <ErrorDisplay msg={this.state.error}/>
    }

    if(this.state && this.state.lat){
      return <SeasonDisplay lat={this.state.lat} />
    }
    return <SpinnerDisplay text={'Fetching location'}/>
  }
}

export default WeatherWidget;