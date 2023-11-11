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
};

export function ReactDateHeatmap({ data, startDate, endDate, squareColor = DefaultValues.squareColor, squareSize = DefaultValues.squareSize, rows = DefaultValues.rows, showMonths = DefaultValues.showMonths, emptySquareColor = DefaultValues.emptySquareColor, showShades = DefaultValues.showShades, onSquareClick, ...props }: ReactDateHeatmapComponentProps) {
    const [board, setBoard] = useState<React.ReactNode[][]>([[]])
    const [months, setMonths] = useState<MonthEntry[]>([])
    const start = startDate ? startDate : getEarliestDate(data)
    const end = endDate ? endDate : getLatestDate(data)
    if (end <= start) {
        throw Error(`Enddate ${end} can't be earlier than the Startdate ${start}.`)
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
            for (let j = 0; j < rows; j++) {
                boardArray[col].push(<Square onSquareClick={onSquareClick} entry={entries[counter]} key={counter} squareColor={shades[entries[counter].quantity]} squareSize={squareSize} emptySquareColor={emptySquareColor} />);
                counter++
            }
        }
        if (rest > 0) {
            boardArray.push([])
            for (let row = 0; row < rest; row++) {
                boardArray[boardArray.length - 1].push(<Square onSquareClick={onSquareClick} entry={entries[counter]} key={counter} squareColor={shades[entries[counter].quantity]} squareSize={squareSize} emptySquareColor={emptySquareColor} />)
                counter++
            }
        }
        setBoard(boardArray);
        calculateMonths(entries)
    }

    function calculateMonths(entries: DateEntry[]) {
        const months: MonthEntry[] = [];
        entries.forEach((entry, i) => {
            const month = entry.date.getMonth() + 1;
            if (!months.some(m => m.month === month) && entry.date.getDate() === 1) {
                months.push({
                    month: month,
                    col: Math.floor(i / rows),
                })
            }
        })
        setMonths(months)
    }

    useEffect(() => {
        calculateBoard(entries)
    }, [data,squareSize]);

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
                {showMonths && <MonthsContainer months={months} squareWidth={squareSize + squareGap} />}
                <div className='board-container' style={{gap:squareGap}}>
                    {board.map((row, rowIndex) => (
                        <div key={rowIndex} className='board-row' style={{gap:squareGap}}>
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

