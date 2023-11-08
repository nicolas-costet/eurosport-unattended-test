import {computeTotalPlayedTime, formatHeight, formatWeight} from "../../../utils/stats.utils";

describe('stats utils', () => {
    it('when negative should throw error', () => {
        expect(() => formatWeight(-1)).toThrow("Cannot format negative values");
    });
    it('when good value should format weight', () => {
        expect(formatWeight(70000)).toEqual('70 Kg');
    });
    it('should format height', () => {
        expect(formatHeight(185)).toEqual('1.85');
    });

    it('should compute totalPlayedTime', () => {
        expect(computeTotalPlayedTime([
            {
                id: "1",
                players: [],
                winner: {
                    id: "1"
                },
                startTime: "2022-01-31T07:12:00.000Z",
                endTime: "2022-01-31T16:33:00.000Z"
            },
            {
                id: "1",
                players: [],
                winner: {
                    id: "1"
                },
                startTime: "2021-10-29T06:39:00.000Z",
                endTime: "2021-10-29T13:20:00.000Z"
            }
        ])).toEqual('16H02');
    });
});