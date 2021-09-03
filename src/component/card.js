import React, {useState, useEffect} from 'react'

function Card(props) {

  return(
    <div className='grid-element'>
      <div className='card' onClick={props.click} id={props.carta}>
        <img src={props.source}  id={props.carta} />
        <h2 id={props.carta} >{props.carta}</h2>
      </div>
    </div>
    
  );
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export {shuffleArray, Card}