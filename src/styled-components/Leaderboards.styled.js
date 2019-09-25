import React from 'react';
import styled from 'styled-components';
import { FaTrophy } from 'react-icons/fa';

export const LeaderboardMainWrapper = styled.div`
    margin: 7%;
    height: 85%;
`;

export const ScoreBoardWrapper = styled.div`
    height: 30%;
    background-color: black;
    border: 5px solid rgb(99, 99, 99);
    margin: 15px 0px;
    border-radius: 15px;
`;

export const RankHead = styled.div`
    width: 100%;
    height: 20%;
    background: rgb(99, 99, 99);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    letter-spacing: 3px;
    font-weight: 500;
`;

export const RankWrapper = styled.div`
    min-height: 80%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledName = styled.span`
    color: gray;
`;

export const TableWrapper = styled.table`
    width: 90%;
`;

export const RankTD = styled.td`
    font-size: 0.9rem;
    ${props => !props.nodata ? `border-bottom: 0.5px solid rgb(99,99,99, 0.5);` : ``};

    &:nth-child(1) {
        width: 20%;
        font-weight: bold;
    }

    &:nth-child(2) {
        width: 60%;
        text-align: left;
        padding-left: 30px;
    }

    &:nth-child(3) {
        width: 20%;
        text-align: left;
        padding-left: 10px;
    }
`;

export const RankScore = styled.div`
    color: yellow;
`;

const StyledTrophy = styled(FaTrophy)`
    margin-left: -13px;
    color: ${props => props.rank === 1 ? 'yellow' : props.rank === 2 ? 'gray' : 'orange' };
`;

export const RankTrophy = props => {
    if (props.rank > 3) { 
        return (
            <>{ props.rank }</>
        );
    } else {
        return (
            <>
                <StyledTrophy rank={props.rank} /> {props.rank}
            </>
        );
    }
}