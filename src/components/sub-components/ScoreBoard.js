import React from 'react';
import { FaStar } from 'react-icons/fa';

import { ScoreBoardWrapper, RankHead, RankWrapper, StyledName, TableWrapper, RankTD, RankScore, RankTrophy } from '../../styled-components/Leaderboards.styled';

const ScoreBoard = props => {

    const rankrows = props.ranking.length > 0 ? props.ranking.map(item => (
        <tr>
            <RankTD>
                <RankTrophy rank={item.rank} />
            </RankTD>
            <RankTD>
                <StyledName>{item.ign}</StyledName>
            </RankTD>
            <RankTD>
                <RankScore><FaStar /> {item.score}</RankScore>
            </RankTD>
        </tr>
    )) : ( <RankTD nodata ><StyledName>NO DATA AVAILABLE</StyledName></RankTD> );

    return (
        <ScoreBoardWrapper>
            <RankHead>{ props.header }</RankHead>
            <RankWrapper>
                <TableWrapper>
                    <tbody>
                        { rankrows }
                    </tbody>
                </TableWrapper>
            </RankWrapper>
        </ScoreBoardWrapper>
    );
}

export default ScoreBoard;