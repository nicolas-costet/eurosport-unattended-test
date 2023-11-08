import React, {FunctionComponent} from 'react';
import {MatchDto, MatchPlayerDto} from "../../store/matches/matchesSlice";
import {clsx} from "clsx";

interface MatchProps {
    match: MatchDto;
    player: MatchPlayerDto;
}


const MatchPlayer: FunctionComponent<MatchProps> = ({match, player}) => {
    const isWinner: boolean = match.winner.id === player.id;
    return (
        <div className="flex w-full h-10 p-2">
            <div className="flex space-x-1">
                <img alt="player-country" src={player.country.picture.url}/>
                <span
                    className={clsx({
                        'font-bold': isWinner,
                        'pl-1': true
                    })}>{player.firstname}</span>
                <span
                    className={clsx({
                        'font-bold': isWinner,
                    })}>{player.lastname}</span>
                {isWinner &&
                    <img className="h-4 pt-2" alt="checked"
                         src="/img/icons/check.svg"/>
                }
            </div>
        </div>
    )

}

export default MatchPlayer;