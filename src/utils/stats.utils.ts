import {Match} from "../features/matches/matchesSlice";
import {DateTime, Duration} from "luxon";

export const formatWeight = (weight: number): string => {
  return `${(weight / 1000).toString()} Kg`;
}

export const formatHeight = (height: number): string => {
    return `${(height / 100).toString()}`;
}

export const computeTotalPlayedTime = (matches: Match[]): string => {
    return Duration.fromObject({ minutes: matches.reduce((minutesPlayed, match) => minutesPlayed + computeOneMatchPlayedTime(match), 0)}).toFormat("hhHmm");
}

export const computeOneMatchPlayedTime = (match: Match): number => {
    return DateTime.fromISO(match.endTime).diff(DateTime.fromISO(match.startTime), "minute").minutes;
}