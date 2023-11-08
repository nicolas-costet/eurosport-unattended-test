import React, {FunctionComponent} from 'react';

import {useAppSelector} from '../../store/hooks';
import {selectSelectedPlayerWinningMatches,} from '../../store/matches/matchesSlice';
import MatchesCard from "./MatchesCard";

const Matches: FunctionComponent = () => {
    const matches = useAppSelector(selectSelectedPlayerWinningMatches);

    return (
        <div className="flex justify-center mt-8 matches-container w-full">
            <MatchesCard matches={matches}/>
        </div>
    );
}

export default Matches;