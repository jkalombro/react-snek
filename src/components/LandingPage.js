import React from 'react';
import { LandingPageWrapper, MB1 } from '../styled-components/App.styled';
import { LandingPageButton } from '../styled-components/Buttons.styled';
import AppLogo from '../Assets/AppLogo/AppLogo';

const LandingPage = props => {
    return (
        <LandingPageWrapper>
                <AppLogo />
                <br /> <br />
                <MB1>
                    <LandingPageButton onClick={props.initializeGame}>Play Game!</LandingPageButton>
                </MB1>
                <MB1>
                    <LandingPageButton onClick={() => alert("This feature is not yet available")}>LeaderBoards</LandingPageButton>
                </MB1>
        </LandingPageWrapper>
    );
}

export default LandingPage;