import React, { useEffect, useState } from 'react'
import "./styles.css"
import { DateEntry, SquareProps, MonthEntry } from './types';
import { DefaultValues } from './defaults';

import Square from './components/Square'
import ShadeContainer from './components/ShadeContainer';
import MonthsContainer from './components/MonthsContainer';

import { getDateEntries, getEarliestDate, getLatestDate } from './util/DateUtility';
import { generateShades, getShadeRange, isValidHexColorCode } from './util/ShadeUtility';
import { printInvalidHexCodeWarningMessage } from './util/ErrorUtility';

type ReactDateHeatmapComponentProps = SquareProps & React.HTMLAttributes<HTMLDivElement> & {
    data: Date[];
    startDate?: Date;
    endDate?: Date;
    rows?: number;
    showMonths?: boolean;
    showShades?: boolean;
    textColor?: string;
};

export default function ReactDateHeatmap({ data, startDate, endDate, tooltipContent, textColor = DefaultValues.textColor, squareColor = DefaultValues.squareColor, squareSize = DefaultValues.squareSize, rows = DefaultValues.rows, showMonths = DefaultValues.showMonths, emptySquareColor = DefaultValues.emptySquareColor, showShades = DefaultValues.showShades, hideTooltip = DefaultValues.hideTooltip, onSquareClick, tooltipBackground, tooltipTextColor, ...props }: ReactDateHeatmapComponentProps) {
    const [board, setBoard] = useState<React.ReactNode[][]>([[]])
    const [months, setMonths] = useState<MonthEntry[]>([])
    const start = startDate ? startDate : getEarliestDate(data)
    const end = endDate ? endDate : getLatestDate(data)
    if (end <= start) {
        console.error(`The selected end date (${end}) must be later than the start date (${start}) to ensure proper functionality and accurate data representation in the component. Please adjust the dates accordingly.`)
    }
    const entries = getDateEntries(data, start, end)
    const cols = Math.ceil(entries.length / rows)
    const rest = entries.length % rows
    const squareGap = 2
    const shadeRange = getShadeRange(entries)
    const shades = [emptySquareColor, ...generateShades(squareColor, shadeRange)];
    function calculateBoard(entries: DateEntry[]) {
        const boardArray: React.ReactNode[][] = [[]];
        let counter = 0;
        const tmp_cols = rest > 0 ? cols - 1 : cols
        for (let col = 0; col < tmp_cols; col++) {
            if (col > 0) {
                boardArray.push([]);
            }
            for (let row = 0; row < rows; row++) {
                boardArray[col].push(<Square tooltipContent={tooltipContent} col={col} row={row} onSquareClick={onSquareClick} entry={entries[counter]} key={counter} squareColor={shades[entries[counter].quantity]} squareSize={squareSize} emptySquareColor={emptySquareColor} hideTooltip={hideTooltip} tooltipBackground={tooltipBackground} tooltipTextColor={tooltipTextColor} />);
                counter++
            }
        }
        if (rest > 0) {
            boardArray.push([])
            for (let row = 0; row < rest; row++) {
                boardArray[boardArray.length - 1].push(<Square tooltipContent={tooltipContent} col={boardArray.length - 1} row={row} onSquareClick={onSquareClick} entry={entries[counter]} key={counter} squareColor={shades[entries[counter].quantity]} squareSize={squareSize} emptySquareColor={emptySquareColor} hideTooltip={hideTooltip} tooltipBackground={tooltipBackground} tooltipTextColor={tooltipTextColor} />)
                counter++
            }
        }
        setBoard(boardArray);
        calculateMonths(entries)
    }

    function calculateMonths(entries: DateEntry[]) {
        const months: MonthEntry[] = [];
        const uniqueMonths: Set<string> = new Set();
        entries.forEach((entry, i) => {
            const yearMonthKey = entry.date.getFullYear() + '-' + (entry.date.getMonth() + 1);
            if (!uniqueMonths.has(yearMonthKey) && entry.date.getDate() === 1) {
                uniqueMonths.add(yearMonthKey);
                months.push({
                    month: entry.date.getMonth() + 1,
                    col: Math.floor(i / rows),
                });
            }
        });
        setMonths(months);
    }
    useEffect(() => {
        calculateBoard(entries)
    }, [data, squareSize]);

    if (!isValidHexColorCode(squareColor)) {
        printInvalidHexCodeWarningMessage(squareColor)
        squareColor = DefaultValues.squareColor
    }
    if (!isValidHexColorCode(emptySquareColor)) {
        printInvalidHexCodeWarningMessage(emptySquareColor)
        emptySquareColor = DefaultValues.emptySquareColor
    }


    return (
        <div {...props}>
            <div className='react-date-heatmap-container' >
                {showMonths && <MonthsContainer months={months} squareWidth={squareSize + squareGap} textColor={textColor} />}
                <div className='board-container' style={{ gap: squareGap }}>
                    {board.map((row, rowIndex) => (
                        <div key={rowIndex} className='board-col' style={{ gap: squareGap }}>
                            {row.map((square, colIndex) => (
                                <div key={colIndex}>{square}</div>
                            ))}
                        </div>
                    ))}
                </div>
                {showShades && <ShadeContainer shades={shades} />}
            </div>
        </div>
    )
}

