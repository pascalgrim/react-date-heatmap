## ReactDateHeatmap Component Props

| Name         | Type                 | Description                                          |
| ------------ | -------------------- | ---------------------------------------------------- |
| `data`       | `Date[]`             | An array of dates to be visualized in the heatmap.   |
| `startDate`  | `Date` (optional)    | The start date for the heatmap range.                |
| `endDate`    | `Date` (optional)    | The end date for the heatmap range.                  |
| `rows`       | `number` (optional)  | Number of rows to display in the heatmap grid.       |
| `showMonths` | `boolean` (optional) | Display month indicators on the heatmap.             |
| `showShades` | `boolean` (optional) | Display shades indicating the quantity of each date. |

## SquareProps

| Name               | Type                         | Description                                  |
| ------------------ | ---------------------------- | -------------------------------------------- |
| `squareColor`      | `string`                     | Color of the filled squares in the heatmap.  |
| `squareSize`       | `number`                     | Size of each square in the heatmap grid.     |
| `emptySquareColor` | `string`                     | Color of empty squares in the heatmap.       |
| `onSquareClick`    | `(entry: DateEntry) => void` | Callback function triggered on square click. |
| `hideTooltip`      | `boolean` (optional)         | Hide tooltips on square hover.               |

## DateEntry

| Name        | Type      | Description                                    |
| ----------- | --------- | ---------------------------------------------- |
| `date`      | `Date`    | The date represented by the entry.             |
| `formatted` | `string`  | A formatted string representation of the date. |
| `active`    | `boolean` | Indicates whether the date is active or not.   |
| `quantity`  | `number`  | Quantity associated with the date.             |
