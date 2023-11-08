import playerReducer, {

} from '../../../../store/players/playerSlice';

describe('players reducer', () => {
    it('should handle initial state', () => {
        expect(playerReducer(undefined, { type: 'unknown' })).toEqual({
            players: [],
            selectedPlayerId: undefined,
            status: 'idle',
        });
    });
});