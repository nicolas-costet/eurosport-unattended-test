import {DateTime} from "luxon";

export const formatDate = (date: string): string => {
  return DateTime.fromJSDate(new Date(date)).toLocaleString(DateTime.DATETIME_MED);
}