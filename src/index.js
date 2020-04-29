// Import the react and reactDom Lib
import React from 'react';
import ReactDom from 'react-dom';
import CommentDetails from './CommentDetails';
import faker from 'faker'

// create a react component
const App = () => {
  return (
    <div>
        <CommentDetails  avatar={faker.image.avatar()} name="Rohit" time="Today at 4 PM" comment="Nice post"/>
        <CommentDetails avatar={faker.image.avatar()} name="Alice" time="Today at 5 PM" comment="Nice post"/>
        <CommentDetails avatar={faker.image.avatar()} name="Aditi" time="Today at 6 PM" comment="Nice post"/>
        <CommentDetails avatar={faker.image.avatar()} name="Morg" time="Today at 7 PM" comment="Nice post"/>
    </div>
    )
}

// Take the react  component and show it on the screen
ReactDom.render(
  <App />,
  document.querySelector('#root')
);