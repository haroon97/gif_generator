import React from 'react';
import './SearchGif.css';

const SearchGif = (props) => {
  return (
    <div className='searchgif'>
      <form onSubmit={props.gifSearch}>
        <input className='text' onChange={props.onSearch} type='text' placeholder='Enter any keyword' name='search'></input>
        <button className='button'>Generate GIF</button>
      </form>
    </div> 
  );
}

export default SearchGif;