import { DateEntry } from "../types";
export declare function generateShades(baseColor: string, numShades: number, emptySquareColor: string): string[];
export declare function getShadeRange(entries: DateEntry[]): number;
export declare function isValidHexColorCode(col: string): boolean;
