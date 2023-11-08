import React, {FunctionComponent} from 'react';
import {MatchDto} from "../../store/matches/matchesSlice";
import {useTranslation} from "react-i18next";
import {formatDate} from "../../utils/date.utils";
import MatchPlayer from "./MatchPlayer";

interface MatchProps {
    match: MatchDto;
}

const Match: FunctionComponent<MatchProps> = ({match}) => {
    const {t} = useTranslation();
    return (
        <div key={match.id} className="bg-white hover:scale-110 transition duration-500 cursor-pointer">
            <div className="space-y-2 p-2">
                <div className="flex">
                    <div className="flex-col">
                        {match.players.map((player) =>
                            <MatchPlayer match={match} player={player}/>
                        )}
                    </div>
                    <div className="ml-auto">
                        <div className="p-2 flex space-x-1">
                            <img className="invisible sm:visible" alt="clock"
                                 src="/img/icons/clock.svg"/>
                            <span>{t("eurosport.matches.startDate")}</span>
                            <span>{formatDate(match.startTime)}</span>
                        </div>
                        <div className="p-2 flex space-x-1">
                            <img className="invisible sm:visible" alt="clock"
                                 src="/img/icons/clock.svg"/>
                            <span>{t("eurosport.matches.endDate")}</span>
                            <span>{formatDate(match.endTime)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Match;