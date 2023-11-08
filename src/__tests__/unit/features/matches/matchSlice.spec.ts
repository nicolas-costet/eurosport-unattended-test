import matchReducer, {

} from '../../../../store/matches/matchesSlice';

describe('matches reducer', () => {
    it('should handle initial state', () => {
        expect(matchReducer(undefined, { type: 'unknown' })).toEqual({
            matches: [],
            status: 'idle',
        });
    });
});