// Import the react and reactDom Lib
import React from 'react';
import ReactDom from 'react-dom';
import CommentDetails from './CommentDetails';
// create a react component
const App = () => {
  return (
    <div>
        <CommentDetails/>
        <CommentDetails/>
        <CommentDetails/>
        <CommentDetails/>
    </div>
    )
}

// Take the react  component and show it on the screen
ReactDom.render(
  <App />,
  document.querySelector('#root')
);