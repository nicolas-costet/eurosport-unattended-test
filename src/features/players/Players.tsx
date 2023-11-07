import React, {FunctionComponent, useEffect} from 'react';

import {useAppSelector, useAppDispatch} from '../../app/hooks';
import {
    loadPlayers, selectLoadPlayersStatus,
    selectPlayers,
} from './playerSlice';
import PlayerCard from "../../components/PlayerCard";
import Layout from "../../components/Layout";

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