import playerReducer, {PlayersState, setSelectedPlayerId} from '../../../../store/players/playerSlice';

describe('players reducer', () => {
    it('should handle initial state', () => {
        expect(playerReducer(undefined, {type: 'unknown'})).toEqual({
            players: [],
            selectedPlayerId: undefined,
            status: 'idle',
        });
    });

    it('should handle setSelectedPlayerId', () => {
        const previousState: PlayersState = {
            players: [],
            selectedPlayerId: undefined,
            status: 'idle',
        }
        expect(playerReducer(previousState, setSelectedPlayerId("player-1"))).toEqual({
            players: [],
            selectedPlayerId: "player-1",
            status: 'idle',
        });
    });
});