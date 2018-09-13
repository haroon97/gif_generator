import React from 'react';
import './Gif.css';

const Gif = (props) => {
  return (
    <div>
      <img className='images' src={props.url} />
      <h3 className='giftitle'>{props.title}</h3> 
    </div>
  );
}

export default Gif;