import React from 'react';
import faker from 'faker'

const CommentDetails = () => {
  return (
    <div className='ui container comments'>
      <div className='comment'>
        <a href='/'  className='avatar'>
          <img alt='avatar'  src={faker.image.avatar()} />
        </a>
      </div>
      <div className='content' >
        <a href='/' className="acthor">
          Sam
        </a>
      </div>
      <div className='metadata' >
        <span href='/' className="date">
          Today at 5 PM
        </span>
      </div>
      <div className='text'> Nice</div>
    </div>
  )
};

export default CommentDetails;