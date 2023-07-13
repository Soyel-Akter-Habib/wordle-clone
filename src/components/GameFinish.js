import React, { useContext } from 'react'
import { AppContext } from '../App';

function GameFinish() {

    const {gameFinish,setGameFinish, correctWord, currAttempt, guessedWord} = useContext(AppContext);
  return (
    <div className='gameOver'>
        <h3>{gameFinish.guessedWord ? "Yay! Thats Correct" : "You failed" }</h3>
        <h3>Correct: {correctWord}</h3>
        {gameFinish.guessedWord && (<h3> You Geussed in {currAttempt.attempt} attempts </h3>)}
    </div>
  )
}

export default GameFinish;