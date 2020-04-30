import React from 'react';

const WeatherWidget = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => { console.log(position)},
    (error) => { console.log(error)}
  )
  return  <div>WeatherWidget</div>
}

export default WeatherWidget;