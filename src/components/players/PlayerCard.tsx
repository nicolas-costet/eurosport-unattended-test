import React, {FunctionComponent, useCallback, useEffect, useState} from 'react';
import {Player, selectSelectedPlayerId, setSelectedPlayerId} from "../../store/players/playerSlice";
import {useTranslation} from "react-i18next";
import {computeTotalPlayedTime, formatHeight, formatWeight} from "../../utils/stats.utils";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {selectMatches} from "../../store/matches/matchesSlice";
import {clsx} from "clsx";

interface PlayerProps {
    player: Player;
}

const PlayerCard: FunctionComponent<PlayerProps> = ({player}) => {

    const {t} = useTranslation();
    const dispatch = useAppDispatch();

    const matches = useAppSelector(selectMatches);
    const selectedPlayerId = useAppSelector(selectSelectedPlayerId);

    const [isActive, setActive] = useState<boolean>(false);

    useEffect(() => {
        setActive(selectedPlayerId !== undefined && selectedPlayerId === player.id);
    }, [selectedPlayerId, player.id])

    const containerStyle = clsx('mt-8 mx-auto lg:mx-0 lg:mt-0 bg-grey border-1 hover:border-dark-grey hover:bg-light-grey hover:scale-110 transition duration-500 md:w-600 max-w-lg hover:shadow-lg player-container',
        {
        'bg-light-grey border-dark-grey shadow-lg': isActive,
        'border-grey': !isActive,
    });

    const handleClickCard = useCallback(() => dispatch(setSelectedPlayerId(player.id)
    ), [dispatch, player.id]);

    return (
        <div
            className={containerStyle}
            onClick={handleClickCard}
        >
            <div className="flex w-full">
                <div className="justify-self-start">
                    <img alt="player" src={player.picture.url}/>
                </div>
                <div className="p-1 pl-4 pb justify-items-start space-y-2">
                    <div>
                        <span className="text-2xl">{player.firstname}</span>
                    </div>
                    <div>
                        <span className="text-2xl">{player.lastname}</span>
                    </div>
                    <div>
                        <div className="flex h-6">
                            <img alt="player-country" src={player.country.picture.url}/>
                            <span className="pl-1">{player.country.code}</span>
                        </div>
                    </div>
                </div>
                <div className="ml-auto flex p-4">
                    <img className="mb-auto" alt="clock" src="/img/icons/clock.svg"/>
                    <span>{computeTotalPlayedTime(matches)}</span>
                </div>
            </div>
            <div className="mt-0 flex flex-col border-t-1 border-dark-grey">
                <div className="flex space-x-20 w-full justify-between py-4 px-8">
                    <div className="space-x-2 uppercase">
                        <span>{t("eurosport.stats.rank")}</span>
                        <span className="font-bold">{player.stats.rank}</span>
                    </div>
                    <div className="space-x-2 uppercase">
                        <span>{t("eurosport.stats.points")}</span>
                        <span className="font-bold">{player.stats.points}</span>
                    </div>
                </div>
                <div className="flex space-x-10 w-full justify-between border-t-1 border-dark-grey py-2 px-16">
                    <div>
                        <div className="uppercase">{t("eurosport.stats.age")}</div>
                        <span className="font-bold">{player.stats.age}</span>
                    </div>
                    <div>
                        <div className="uppercase">{t("eurosport.stats.height")}</div>
                        <span className="font-bold">{formatHeight(player.stats.height)}</span>
                    </div>
                    <div>
                        <div className="uppercase">{t("eurosport.stats.weight")}</div>
                        <span className="font-bold">{formatWeight(player.stats.weight)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayerCard;
