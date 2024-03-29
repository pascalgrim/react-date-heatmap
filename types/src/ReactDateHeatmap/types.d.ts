/// <reference types="react" />
export type DateEntry = {
    date: Date;
    formatted: string;
    active: boolean;
    quantity: number;
};
export type MonthEntry = {
    month: number;
    col: number;
};
export type SquareProps = {
    squareColor?: string;
    squareSize?: number;
    emptySquareColor?: string;
    onSquareClick?: (entry: DateEntry) => void;
    hideTooltip?: boolean;
    tooltipContent?: ({ entry }: {
        entry: DateEntry;
    }) => JSX.Element;
    tooltipBackground?: string;
    tooltipTextColor?: string;
};
