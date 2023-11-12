

import { DefaultValues } from "../defaults";
import { DateEntry, SquareProps } from "../types";
import { Tooltip } from 'react-tooltip'

type SquareComponentProps = SquareProps & {
    entry: DateEntry;
};

function Square({ entry, squareColor = DefaultValues.squareColor, squareSize = DefaultValues.squareSize, emptySquareColor = DefaultValues.emptySquareColor, hideTooltip = DefaultValues.hideTooltip, onSquareClick }: SquareComponentProps) {
    const backgroundColor = entry.active ? squareColor : emptySquareColor
    const cursorStyle = onSquareClick ? "pointer" : "auto"
    function handleClick() {
        if (onSquareClick) {
            onSquareClick(entry)
        }
    }
    return (
        <div data-tooltip-id="my-tooltip" data-tooltip-content={`${entry.formatted} `} style={{ backgroundColor: backgroundColor, width: squareSize, height: squareSize, cursor: cursorStyle }} className={'square'} onClick={handleClick}>
            {!hideTooltip && <Tooltip id="my-tooltip" />}
        </div>
    )
}

export default Square