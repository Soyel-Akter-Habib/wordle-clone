import wordBank from "./wordle-bank.txt";



export const boardDefaultWords = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
]

export const createWordSet = async () =>{
    let wordSet;
    let tWords;
    await fetch(wordBank).then((response) => response.text()).then((result)=>{
       const wordArr = result.split("\n");
       tWords = wordArr[Math.floor(Math.random() * wordArr.length)];
       wordSet = new Set(wordArr); 
    });

    return {wordSet, tWords};
}