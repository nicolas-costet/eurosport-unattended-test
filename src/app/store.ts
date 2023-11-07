import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import playersReducer from '../features/players/playerSlice';
import matchesReducer from '../features/matches/matchesSlice';

export const store = configureStore({
    reducer: {
        players: playersReducer,
        matches: matchesReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;