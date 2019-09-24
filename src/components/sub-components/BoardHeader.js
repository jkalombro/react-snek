import React, { useContext } from 'react';
import GameContext from "../../helpers/GameContext";
import { FaStar } from 'react-icons/fa';

import { BoardheadWrapper, PlayernameWrapper, ScoreWrapper } from '../../styled-components/Board.styled';

const BoardHeader = props => {
    const { screenmode } = useContext(GameContext);
    const score = props.snake.length - 4 > -1 ? props.snake.length - 4: 0;

    return (
        <BoardheadWrapper screenmode={screenmode}>
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