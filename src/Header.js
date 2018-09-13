import React from 'react';
import './Header.css';

const Header = (props) => {
  return (
    <div>
      <h1 className='title'>{props.title}</h1>
      <p className='subtitle'>{props.subTitle}</p>
    </div>
  );
}

export default Header;