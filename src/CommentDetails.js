import React from 'react';

const CommentDetails = (props) => {
  return (
    <div className='ui container comments'>
      <div className='comment'>
        <a href='/'  className='avatar'>
          <img alt='avatar'  src={props.avatar} />
        </a>
      </div>
      <div className='content' >
        <a href='/' className="acthor">
          {props.name}
        </a>
      </div>
      <div className='metadata' >
        <span href='/' className="date">
          {props.time}
        </span>
      </div>
      <div className='text'>{props.comment}</div>
    </div>
  )
};

export default CommentDetails;