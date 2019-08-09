import React from 'react';
import { AppOverlay, GameButton, MB1 } from '../components/App.component';

const Overlay = props => {
    if (props.status === 0) {
        return (
            <AppOverlay>
                <GameButton onClick={props.startGame}>Start game!</GameButton>
            </AppOverlay>
        );
    } else if (props.status === 2) {
        return (
            <AppOverlay>
                <MB1><b>GAME OVER!</b></MB1>
                <MB1>Your score: {props.snake.length - 4} </MB1>
                <GameButton onClick={props.startGame}>Start a new game</GameButton>
            </AppOverlay>
        );
    }else{
        return null;
    }
}

export default Overlay;