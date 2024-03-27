import React from 'react';
import "./styles.css";
import { SquareProps } from './types';
type ReactDateHeatmapComponentProps = SquareProps & React.HTMLAttributes<HTMLDivElement> & {
    data: Date[];
    startDate?: Date;
    endDate?: Date;
    rows?: number;
    showMonths?: boolean;
    showShades?: boolean;
    textColor?: string;
};
export default function ReactDateHeatmap({ data, startDate, endDate, tooltipContent, textColor, squareColor, squareSize, rows, showMonths, emptySquareColor, showShades, hideTooltip, onSquareClick, tooltipBackground, tooltipTextColor, ...props }: ReactDateHeatmapComponentProps): import("react/jsx-runtime").JSX.Element;
export {};
