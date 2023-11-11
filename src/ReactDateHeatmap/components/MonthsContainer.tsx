
import { MonthEntry } from '../types'
import { numberToMonthName } from '../util/DateUtility'

type MonthsContainerProps = {
    months: MonthEntry[],
    squareWidth: number
}
function MonthsContainer({ months, squareWidth }: MonthsContainerProps) {
    return (
        <div className={'months-container'} style={{fontSize:squareWidth/2,height:squareWidth/2}}>
            {months.map((monthEntry) =>
                <div key={monthEntry.month} style={{ left: `${monthEntry.col * (squareWidth)}px`, position: "absolute" }}>{numberToMonthName(monthEntry.month)}</div>
            )}
        </div>
    )
}

export default MonthsContainer