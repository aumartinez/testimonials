import React, { Fragment } from 'react';
import '../../css/testimony.css';

export function Testimony(props) {
  return (
    <div className='testimony-wrapper'>
      <img 
      src={require(`../../${props.img}`)}
      className='testimony-img' 
      alt={props.name + ' pic' } />

      <div className='testimony-content-wrapper'>
        <p className='testimony-name'>
          <span>{props.name}</span> in {props.country}
        </p>
        <p className='testimony-position'>
          {props.position} at <span>{props.company}</span>
        </p>
        <p className='testimony-quote'>
          "{props.quote}"
        </p>
      </div>
    </div>
  );
}