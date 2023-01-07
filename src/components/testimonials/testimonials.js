import React from 'react';
import '../../css/testimony.css';

export function Testimony() {
  return (
    <div className='testimony-wrapper'>
      <img 
      src={require('../../imgs/t-emma.png')}
      className='testimony-img' 
      alt='Emma pic' />

      <div className='testimony-content-wrapper'>
        <p className='testimony-name'>
          <span>Emma Bostian</span> in Sweden
        </p>
        <p className='testimony-position'>
          Software Engineer at <span>Spotify</span>
        </p>
        <p className='testimony-quote'>
          "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on <span>freeCodeCamp gave me the skills</span> and confidence I needed to land my dream job as a software engineer at Spotify."
        </p>
      </div>
    </div>
  );
}