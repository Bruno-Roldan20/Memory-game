import './App.css';
import React, {useState, useEffect} from 'react'
import images from './component/dataImage.js'
import {shuffleArray, Card} from './component/card.js'


shuffleArray(images);

let clickedImg = [];

function App() {

  const [score, setScore] = useState(0);
  const [BestScore, setBestScore] = useState(0);
 
  const clicked = (e) => {

    setScore(score + 1);

    score >= BestScore ? setBestScore(BestScore + 1) : setBestScore(BestScore)
  
    for(let i = 0; i <= clickedImg.length; i++){

       if(clickedImg[i] === e) {

         setScore(0)

         clickedImg = [];

       }
       
    }

    clickedImg.push(e)

    shuffleArray(images);

  }

  const itemList = images.map((images) => {

    return(
      <Card 
        key={images.carta}
        click={(e) => clicked(e.target.id)}
        source={images.source}
        carta={images.carta}
    />)

  });

  return (
    <div>
      <header>
        <h1>Adventure Time: Memory Game</h1>
        <h2>{'Score ' + score}</h2>
        <h2>{'Best Score ' + BestScore}</h2>
      </header>
      <main>
        {itemList}
      </main>
    </div>
  );
}

export default App;
