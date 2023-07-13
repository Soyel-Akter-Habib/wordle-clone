import React, {useContext} from 'react'
import { AppContext } from '../App'

function Key({keyVal,bigKey,disable}) {
    const { onDelete, onSelectLetter, onEnter} = useContext(AppContext);
    const selectLetter = () =>{
        if(keyVal === "ENTER"){
            onEnter();

        } else if(keyVal==="DELETE"){
            onDelete();

        }else{
            onSelectLetter(keyVal);
        }
    };
  return (
    <div className='key' id={bigKey ? "big" : disable && "disabled"} onClick={selectLetter}>{keyVal}</div>
  );
}

export default Key;