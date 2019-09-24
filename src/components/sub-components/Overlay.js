import React, { useContext } from 'react';
import GameContext from "../../helpers/GameContext";

import { AppOverlay, MB1 } from '../../styled-components/App.styled';
import { GameButton } from '../../styled-components/Buttons.styled';
import { SpinningLoader } from '../../styled-components/Animations.styled';

const Overlay = props => {
    const { size, screenmode } = useContext(GameContext);

    if (props.status === "ingame") return null;

    return (
        <AppOverlay size={size} screenmode={screenmode}>
            { props.status === "loading" ? (
                    <>
                        <MB1><SpinningLoader /></MB1>
                        <MB1>Initializing game...</MB1>
                    </>
                ) : 
              props.status === "standby" ? (
                    <>
                        <GameButton onClick={props.startGame}>
                            Start game!
                        </GameButton>
                    </>
                ) :
              props.status === "end" ? (
                    <>
                        <MB1><b>GAME OVER!</b></MB1>
                        <MB1>Your score: {props.snake.length - 4} </MB1>
                        <GameButton onClick={props.startGame}>Start a new game</GameButton>
                    </>
                ) : null
            }
        </AppOverlay>
    )
    
}

export default Overlay;