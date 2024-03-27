import { DateEntry, SquareProps } from "../types";
type SquareComponentProps = SquareProps & {
    entry: DateEntry;
    col: number;
    row: number;
};
declare function Square({ entry, tooltipContent, tooltipBackground, tooltipTextColor, squareColor, squareSize, emptySquareColor, hideTooltip, onSquareClick, col, row }: SquareComponentProps): import("react/jsx-runtime").JSX.Element;
export default Square;
