import React, {FunctionComponent} from 'react';
import {Match} from "../features/matches/matchesSlice";
import {useTranslation} from "react-i18next";
import {formatDate} from "../utils/date.utils";
import {useAppDispatch} from "../app/hooks";
import {setSelectedPlayerId} from "../features/players/playerSlice";

interface MatchesCardProps {
    matches: Match[];
}

const MatchesCard: FunctionComponent<MatchesCardProps> = ({matches}) => {
    const dispatch = useAppDispatch()
    const {t} = useTranslation();

    return (
        <div className="bg-grey lg:w-1200 lg:max-w-5xl w-600 shadow-lg lg:p-16 p-4 text-xs lg:text-base mx-2">
            <div className="flex w-full">
                <button className="ml-auto" onClick={() => dispatch(setSelectedPlayerId(undefined))}>
                    <img alt="close" src="/img/icons/close.svg"/>
                </button>
            </div>
            <div className="w-full border-b-1 border-dark-grey mb-8">
                <span className="uppercase text-2xl">{t("eurosport.matches.title")}</span>
            </div>
            <div className="space-y-2">
            {matches.map(match =>
                <div key={match.id} className="bg-white">
                    <div className="space-y-2 p-2">
                        <div className="flex-col">
                            {match.players.map((player, index) => {
                                    const isWinner: boolean = match.winner.id === player.id;
                                    return (
                                        <div className="flex w-full h-10 p-2">
                                            <div className="flex space-x-1">
                                                <img alt="player-country" src={player.country.picture.url}/>
                                                <span
                                                    className={`pl-1 ${isWinner ? "font-bold" : ""}`}>{player.firstname}</span>
                                                <span className={isWinner ? "font-bold" : ""}>{player.lastname}</span>
                                                {isWinner &&
                                                    <img className="h-4 pt-2" alt="checked" src="/img/icons/check.svg"/>
                                                }
                                            </div>
                                            {index === 0 ?
                                                <div className="ml-auto">
                                                    <div className="flex space-x-1">
                                                        <img className="invisible sm:visible" alt="clock" src="/img/icons/clock.svg"/>
                                                        <span>{t("eurosport.matches.startDate")}</span>
                                                        <span>{formatDate(match.startTime)}</span>
                                                    </div>
                                                </div>
                                                :
                                                <div className="ml-auto">
                                                    <div className="flex space-x-1">
                                                        <img className="invisible sm:visible" alt="clock" src="/img/icons/clock.svg"/>
                                                        <span>{t("eurosport.matches.endDate")}</span>
                                                        <span>{formatDate(match.endTime)}</span>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    </div>
                </div>
            )}
            </div>
        </div>
    );
}

export default MatchesCard;