import React, {useEffect} from 'react';
import Layout from "./components/Layout";
import Players from "./features/players/Players";
import Matches from "./features/matches/Matches";
import {useAppDispatch, useAppSelector} from "./app/hooks";
import {loadMatches} from "./features/matches/matchesSlice";
import {selectSelectedPlayerId} from "./features/players/playerSlice";

function App() {
    const dispatch = useAppDispatch();

    const selectedPlayerId = useAppSelector(selectSelectedPlayerId);

    useEffect(() => {
        dispatch(loadMatches())
    }, [dispatch]);

    return (
        <Layout>
            <div className="flex-col w-full">
                <Players/>
                {selectedPlayerId &&
                    <Matches/>
                }
            </div>
        </Layout>
    );
}

export default App;
