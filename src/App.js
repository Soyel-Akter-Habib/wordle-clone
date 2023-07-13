import "./App.css";
import React, { useEffect } from "react";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { createContext, useState } from "react";
import { boardDefaultWords, createWordSet } from "./words";
import GameFinish from "./components/GameFinish";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefaultWords);

  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  const [wordSet, setWordSet] = useState(new Set());

  const [disableLetters, setDisableLetters] = useState([]);
  const [correctWord, setCorrectWord] = useState("");

  const [gameFinish,setGameFinish] = useState({gameFinish: false, guessedWord : false});


  useEffect(() => {
    createWordSet().then((words) => {
      setCorrectWord(words.tWords.toUpperCase());
      setWordSet(words.wordSet);
    });
  }, []);

  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
  };

  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;

    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
  };

  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }

    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    } else {
      alert("Word not found !");
    }

    if (currWord === correctWord) {
      setGameFinish({gameFinish :true, guessedWord: true});
      return;
    }

    if(currAttempt.attempt ===5){
      setGameFinish({gameFinish :true, guessedWord:false});
    }
  };

  return (
    <div className="App">
      <nav>
        <h1>Wordle Game by Soyel</h1>
      </nav>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          onSelectLetter,
          onEnter,
          onDelete,
          correctWord,
          setDisableLetters,
          disableLetters,
          gameFinish,
          setGameFinish
        }}
      >
        <div className="game">
          <Board />
          {gameFinish.gameFinish ? <GameFinish/> :  < Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
