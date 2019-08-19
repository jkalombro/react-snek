import React from 'react';
import { AppOverlay, IntroOverlay, MB1 } from '../styled-components/App.styled';
import { GameButton, IntroPageButton } from '../styled-components/Buttons.styled';
import { SpinningLoader } from '../styled-components/Animations.styled';

import AppLogo from '../Assets/AppLogo/AppLogo';

function Overlay(props) {
    
    if (props.status === "intro") {
        return (
            <IntroOverlay>
                <AppLogo />
                <br /> <br />
                <MB1>
                    <IntroPageButton onClick={props.initializeGame}>Play Game!</IntroPageButton>
                </MB1>
                <MB1>
                    <IntroPageButton onClick={() => alert("This feature is not yet available")}>LeaderBoards</IntroPageButton>
                </MB1>
            </IntroOverlay>
        );
    } else if (props.status === "loading") {
            return (
                <AppOverlay>
                    <MB1><SpinningLoader /></MB1>
                    <MB1>Initializing game...</MB1>
                </AppOverlay>
            );
    } else if (props.status === "standby") {
        return (
            <AppOverlay>
                <GameButton onClick={props.startGame} screenmode={props.screenmode}>
                    Start game!
                </GameButton>
            </AppOverlay>
        );
    } else if (props.status === "end") {
        return (
            <AppOverlay>
                <MB1 screenmode={props.screenmode}><b>GAME OVER!</b></MB1>
                <MB1>Your score: {props.snake.length - 4} </MB1>
                <GameButton onClick={props.startGame}>Start a new game</GameButton>
            </AppOverlay>
        );
    }else{
        return null;
    }
}

export default Overlay;