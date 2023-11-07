import React, {FunctionComponent} from 'react';

import {useAppSelector} from '../../app/hooks';
import {selectSelectedPlayerWinningMatches,} from './matchesSlice';
import MatchesCard from "../../components/MatchesCard";

const Matches: FunctionComponent = () => {
    const matches = useAppSelector(selectSelectedPlayerWinningMatches);

    return (
        <div className="flex justify-center mt-8 matches-container w-full">
            <MatchesCard matches={matches}/>
        </div>
    );
}

export default Matches;