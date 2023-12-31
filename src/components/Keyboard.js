import React, { useCallback, useContext } from 'react'
import Key from './Key';
import { useEffect } from 'react';
import { AppContext } from '../App';


function Keyboard() {

    const {onEnter, onDelete, onSelectLetter,disableLetters} = useContext(AppContext);
    const key1 = ["Q","W","E","R","T","Y","U","I","O","P"];
    const key2 = ["A","S","D","F","G","H","J","K","L"];
    const key3 =["Z","X","C","V","B","N","M"];

    const handleKeyboard = useCallback((event)=>{
        if(event.key ==="Enter"){
            onEnter();

        } else if(event.key === "Backspace"){
            onDelete();

        }else{
            key1.forEach((key)=>{
                if(event.key.toLowerCase() ===key.toLowerCase()){
                    onSelectLetter(key);
                }
            })

            key2.forEach((key)=>{
                if(event.key.toLowerCase() ===key.toLowerCase()){
                    onSelectLetter(key);
                }
            })

            key3.forEach((key)=>{
                if(event.key.toLowerCase() ===key.toLowerCase()){
                    onSelectLetter(key);
                }
            })
        }
    })

    useEffect(()=>{
        document.addEventListener("keydown", handleKeyboard);

        return() =>{
            document.removeEventListener("keydown", handleKeyboard);
        }
    }, [handleKeyboard]);

  return (
    <div className='Keyboard' onKeyDown={handleKeyboard}> 
    <div className='line1'>{key1.map((key) => {
        return  <Key keyVal={key} disable={ disableLetters.includes(key)} />;
    })}</div>
    <div className='line2'>{key2.map((key) =>{
        return <Key keyVal ={key} disable={ disableLetters.includes(key)} />;
    })}</div>
    <div className='line3'>
        <Key keyVal={"ENTER"} bigKey/>
        {key3.map((key)=>{
            return <Key keyVal = {key} disable={ disableLetters.includes(key)} />;
        })}
        <Key keyVal={"DELETE"} bigKey/>

    </div>

    </div>
  )
}

export default Keyboard