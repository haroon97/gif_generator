import React from 'react';
import Gif from './Gif.js';

const Gifs = (props) => {
  return (
    <div>
      {props.gifsList.map((data, index) => {
        return <Gif key={data.id} url={data.images.original.url} title={data.title} />
      })}
    </div>
  );
}

export default Gifs;