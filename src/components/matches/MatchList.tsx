import React, {FunctionComponent, useCallback} from 'react';
import {selectSelectedPlayerWinningMatches} from "../../store/matches/matchesSlice";
import {useTranslation} from "react-i18next";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {setSelectedPlayerId} from "../../store/players/playerSlice";
import Match from './Match';


const MatchList: FunctionComponent = () => {
    const dispatch = useAppDispatch()
    const {t} = useTranslation();
    const matches = useAppSelector(selectSelectedPlayerWinningMatches);

    const handleClickOnClose = useCallback(() => dispatch(setSelectedPlayerId(undefined)
    ), [dispatch]);

    return (
        <div className="flex justify-center mt-8 matches-container w-full">
            <div className="bg-grey lg:w-1200 lg:max-w-5xl w-600 shadow-lg lg:p-16 p-4 text-xs lg:text-base mx-2">
                <div className="flex w-full">
                    <button className="ml-auto hover:scale-150 transition duration-500" onClick={handleClickOnClose}>
                        <img alt="close" src="/img/icons/close.svg"/>
                    </button>
                </div>
                <div className="w-full border-b-1 border-dark-grey mb-8">
                    <span
                        className="uppercase text-2xl">{t("eurosport.matches.title", {winningMatchesNumber: matches.length})}</span>
                </div>
                <div className="space-y-2">
                    {matches.map(match =>
                        <Match key={match.id} match={match}/>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MatchList;