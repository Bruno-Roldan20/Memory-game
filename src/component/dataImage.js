import React, {useState, useEffect} from 'react'

const images = [
  
  {carta: 'Finn', source: require('../images/fin.jpg').default},

  {carta: 'Marceline', source: require('../images/marceline.jpeg').default},

  {carta: 'Ice king', source: require('../images/iceKing.png').default},

  {carta: 'jake', source: require('../images/jake.jpeg').default},

  {carta: 'Flame Princess', source: require('../images/flamePrincess.png').default},

  {carta: 'Princess Bubblegum', source: require('../images/princessBubblegum.jpeg').default},

  {carta: 'The Lich', source: require('../images/lich.jpeg').default},

  {carta: 'Lemongrab', source: require('../images/lemonGrab.jpeg').default},

]

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export default images