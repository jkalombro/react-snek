import React from 'react';
import { FaStar } from 'react-icons/fa';

import { ScoreBoardWrapper, RankHead, RankWrapper, StyledName, TableWrapper, RankTD, RankScore, RankTrophy } from '../../styled-components/Leaderboards.styled';

const ScoreBoard = props => {

    const rankrows = props.ranking.length > 0 ? props.ranking.map(item => (
        <tr key={item.rank}>
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
    )) : ( 
        <tr>
            <RankTD nodata ><StyledName>NO DATA AVAILABLE</StyledName></RankTD>
        </tr> 
    );

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