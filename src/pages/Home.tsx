import React, {useEffect} from 'react';
import Layout from "../components/Layout";
import Players from "../components/players/Players";
import Matches from "../components/matches/Matches";
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
                <Players/>
                {selectedPlayerId &&
                    <Matches/>
                }
            </>
        </Layout>
    );
}

export default Home;
