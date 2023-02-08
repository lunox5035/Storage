import dammy from './db/data.json';

import React from 'react'

function day() {
    const day=1;
    const wordList=dammy.words.filter(word=>(
        word.day ===1 
    ))
    console.log(wordList)
  return (
    <table>
        <tbody>
            {dammy.words.map(word=>(
                <tr>
                    <td>{word.eng}</td>                    
                    <td>{word.kor}</td>
                </tr>
            ))}
        </tbody>
    </table>
    )
}

export default day