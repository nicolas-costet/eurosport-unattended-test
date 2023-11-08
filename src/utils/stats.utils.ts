import {MatchDto} from "../store/matches/matchesSlice";
import {DateTime, Duration} from "luxon";

export const formatWeight = (weight: number): string => {
    if (weight < 0) {
        throw new Error("Cannot format negative values")
    }
    return `${(weight / 1000).toString()} Kg`;
}

export const formatHeight = (height: number): string => {
    return `${(height / 100).toString()} m`;
}

export const computeTotalPlayedTime = (matches: MatchDto[]): string => {
    const minutesPlayed = matches.reduce((minutesPlayed, match) => minutesPlayed + computeOneMatchPlayedTime(match), 0);
    return Duration.fromObject({minutes: minutesPlayed}).toFormat("hhHmm");
}

export const computeOneMatchPlayedTime = (match: MatchDto): number => {
    const matchEndDateTime = DateTime.fromISO(match.endTime);
    const matchStartDateTime = DateTime.fromISO(match.startTime);
    if (!matchStartDateTime.isValid || !matchEndDateTime.isValid) {
        return 0;
    }
    return matchEndDateTime.diff(matchStartDateTime, "minute").minutes;
}