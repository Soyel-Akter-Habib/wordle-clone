import React, {useContext, useEffect} from 'react'
import Board from './Board';
import { AppContext } from '../App';

function Letter({letterPos,attempVal}) {
    const {board,correctWord,currAttempt, disableLetters, setDisableLetters} = useContext(AppContext);
    const letter = board[attempVal][letterPos];
    
    const correct = correctWord[letterPos] ===letter;
    const almost = !correct && letter !== "" && correctWord.includes(letter);
    const letterState = currAttempt.attempt > attempVal && (correct ? "correct" : almost ? "almost":"error");

    useEffect(()=>{
      if( letter !=="" && !correct && !almost){
        setDisableLetters((prev)=> [...prev, letter]);

      }
    }, [currAttempt.attempt]);
  return <div className='letter' id={letterState}>{" "}{letter}</div>;
  
}

export default Letter