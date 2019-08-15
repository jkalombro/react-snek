import React from 'react';
import { BoardheadWrapper, PlayernameWrapper, ScoreWrapper } from '../components/Board.components';

import { FaStar } from 'react-icons/fa';

const BoardHeader = props => {
    const score = props.snake.length - 4 > -1 ? props.snake.length - 4: 0;

    return (
        <BoardheadWrapper>
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