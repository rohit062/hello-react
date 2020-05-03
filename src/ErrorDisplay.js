import React from 'react';
const styleSheet = { 
  display: 'flex', justifyContent: 'center',alignItems: 'center', height: '100vh', backgroundColor : 'red'
}

class ErrorDisplay extends React.Component{

  render(){
    return (
      <div style={styleSheet}>
        <h1>Error: {this.props.msg}</h1>
      </div>
    )
  }
}

export default ErrorDisplay;