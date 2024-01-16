import React from 'react';
import  "./Card.css";
import Icon from '../../Icon/Icon';

const Card = ({onPlay, player, index}) => {

    let icon = <Icon/>
    
    if(player == 'X'){
        <Icon name={"cross"}/>
    }else if(player == '0'){
        <Icon name={"circle"}/>
    }
    
    return (
        <div className='card' onClick={() => onPlay(index)}>
            
            

        </div>
    );
}

export default Card;
