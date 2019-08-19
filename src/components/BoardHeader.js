import React from 'react';
import { BoardheadWrapper, PlayernameWrapper, ScoreWrapper } from '../styled-components/Board.styled';

import { FaStar } from 'react-icons/fa';

function BoardHeader(props) {
    const score = props.snake.length - 4 > -1 ? props.snake.length - 4: 0;

    return (
        <BoardheadWrapper screenmode={props.screenmode}>
            <div>Playing as 
                <PlayernameWrapper>Anonymous</PlayernameWrapper>
            </div>
            <ScoreWrapper>
                <FaStar /> {score}
            </ScoreWrapper>
        </BoardheadWrapper>
    );
}

export default BoardHeader;