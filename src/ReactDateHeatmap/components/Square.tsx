

import { CSSProperties, ReactElement, useState } from "react";
import { DefaultValues } from "../defaults";
import { DateEntry, SquareProps } from "../types";

type SquareComponentProps = SquareProps & {
    entry: DateEntry;
    col: number;
    row: number;
};

function Square({ entry, tooltipContent, tooltipBackground, tooltipTextColor, squareColor = DefaultValues.squareColor, squareSize = DefaultValues.squareSize, emptySquareColor = DefaultValues.emptySquareColor, hideTooltip = DefaultValues.hideTooltip, onSquareClick, col, row }: SquareComponentProps) {
    const [isHovered, setIsHovered] = useState(false)
    const backgroundColor = entry.active ? squareColor : emptySquareColor
    function handleClick() {
        if (onSquareClick) {
            onSquareClick(entry)
        }
    }
    const cursorStyle = onSquareClick ? "pointer" : "auto"
    const tooltipStyle = hideTooltip ? "" : "tooltip"
    const tooltip: React.ReactNode = typeof tooltipContent === 'function' ? tooltipContent({ entry }) : tooltipContent || <div>{entry.formatted}</div>;
    const tooltipBackgroundStyle = tooltipBackground ? tooltipBackground : DefaultValues.tooltipBackgroundColor
    const tooltipColorStyle = tooltipTextColor ? tooltipTextColor : DefaultValues.tooltipTextColor

    return (
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{ backgroundColor: backgroundColor, width: squareSize, height: squareSize, cursor: cursorStyle }} className={'square'} onClick={handleClick}>
            {isHovered && (
                <div className={tooltipStyle} style={{ backgroundColor: tooltipBackgroundStyle, color: tooltipColorStyle }}>
                    {!hideTooltip && tooltip}
                </div>
            )}
        </div>
    )
}

export default Square