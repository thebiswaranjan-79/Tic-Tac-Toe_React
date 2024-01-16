import React, { useState } from 'react';
import Card from '../card/Card';
import "./Grid.css"
import Icon from '../../Icon/Icon';

const Grid = ({numberOfCards}) => {
    const [turn, setTurn] = useState(true); // false-> x and true => O
    const[board, setBoard]= useState(Array(numberOfCards).fill("")); //[" ", " "....., " "]

    function play(index){
        console.log("Player Moved");

        if(turn == true)
        {
             board[index] = "0";
        }else{
            board[index] = "X";
        }

        setBoard([...board]);
        setTurn(!turn);                     
    }
    return (
        <>
            <h2 className='turn-highlight'>Current Turn : {(turn) ?<Icon name="circle"/> : <Icon name="cross"/>}</h2>
            <div className='grid'>
                {board.map((value, idx) => {
                        return <Card onPlay={play} player = {value} index={idx}/>
                })}
            </div>
        </>
    );
}

export default Grid;
