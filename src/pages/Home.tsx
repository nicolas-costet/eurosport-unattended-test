import React, {useEffect} from 'react';
import Layout from "../components/Layout";
import PlayerList from "../components/players/PlayerList";
import MatchList from "../components/matches/MatchList";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {loadMatches} from "../store/matches/matchesSlice";
import {selectSelectedPlayerId} from "../store/players/playerSlice";

function Home() {
    const dispatch = useAppDispatch();

    const selectedPlayerId = useAppSelector(selectSelectedPlayerId);

    useEffect(() => {
        dispatch(loadMatches())
    }, [dispatch]);

    return (
        <Layout>
            <>
                <PlayerList/>
                {selectedPlayerId &&
                    <MatchList />
                }
            </>
        </Layout>
    );
}

export default Home;
