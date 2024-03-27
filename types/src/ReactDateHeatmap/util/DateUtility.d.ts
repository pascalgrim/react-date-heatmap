import { DateEntry } from "../types";
export declare function getEarliestDate(dates: Date[]): Date;
export declare function getLatestDate(dates: Date[]): Date;
export declare function getDateEntries(activeDates: Date[], startDate: Date, endDate: Date): DateEntry[];
export declare function numberToMonthName(monthNumber: number): string;
