import React from 'react';

import { LeaderboardMainWrapper } from '../../styled-components/Leaderboards.styled';

import ScoreBoard from './ScoreBoard';

const LeaderBoards = () => {

    const data = {
        hard: [
            { rank: 1, ign: "OG.ana.bit", score: 199 },
            { rank: 2, ign: "OG.Topson", score: 78 },
            { rank: 3, ign: "OG.Jerax.ai", score: 45 },
            { rank: 4, ign: "OG.Ceb", score: 31 },
            { rank: 5, ign: "OG.Notail", score: 21 }
        ],
        medium: [],
        easy: []
    }

    return (
        <LeaderboardMainWrapper>
            L E A D E R B O A R D S
            <ScoreBoard header="HARD" ranking={data.hard} />
            <ScoreBoard header="MEDIUM" ranking={data.medium} />
            <ScoreBoard header="EASY" ranking={data.easy} />
        </LeaderboardMainWrapper>
    )
}

export default LeaderBoards;
