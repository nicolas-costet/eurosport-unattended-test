import React, {FunctionComponent, useEffect} from 'react';

import {useAppSelector, useAppDispatch} from '../../store/hooks';
import {
    loadPlayers, selectLoadPlayersStatus,
    selectPlayers,
} from '../../store/players/playerSlice';
import PlayerCard from "./PlayerCard";
import Layout from "../Layout";

const Players: FunctionComponent = () => {
    const players = useAppSelector(selectPlayers);
    const loadPlayersStatus = useAppSelector(selectLoadPlayersStatus);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadPlayers())
    }, [dispatch]);

    return (
        <Layout>
            <div className={`lg:flex lg:grid-cols-2 gap-8 justify-center mt-8 players-container mx-2 
                ${loadPlayersStatus === "loading" ? "animate-spin" : ""}`}>
                {players.length > 0 && players.map(player =>
                    <PlayerCard key={player.id} player={player}/>
                )}
            </div>
        </Layout>
    );
}

export default Players;