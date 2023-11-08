import React, {FunctionComponent, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {loadPlayers, selectLoadPlayersStatus, selectPlayers,} from '../../store/players/playerSlice';
import PlayerCard from "./PlayerCard";

const PlayerList: FunctionComponent = () => {
    const players = useAppSelector(selectPlayers);
    const loadPlayersStatus = useAppSelector(selectLoadPlayersStatus);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadPlayers())
    }, [dispatch]);

    if (loadPlayersStatus === "loading" || !players.length) {
        return <div className="animate-spin h-4" />
    }

    return (
        <div className="lg:flex lg:grid-cols-2 gap-8 justify-center mt-8 players-container mx-2">
            {players.map(player =>
                <PlayerCard key={player.id} player={player}/>
            )}
        </div>
    );
}

export default PlayerList;