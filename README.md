# ReactDateHeatmap Component Props

| Name               | Type                         | Default Value | Description                                          |
| ------------------ | ---------------------------- | ------------- | ---------------------------------------------------- |
| `data`             | `Date[]`                     | -             | An array of dates to be visualized in the heatmap.   |
| `startDate`        | `Date`                       | -             | The start date for the heatmap range.                |
| `endDate`          | `Date`                       | -             | The end date for the heatmap range.                  |
| `rows`             | `number`                     | `7`           | Number of rows to display in the heatmap grid.       |
| `showMonths`       | `boolean`                    | `true`        | Display month indicators on the heatmap.             |
| `showShades`       | `boolean`                    | `true`        | Display shades indicating the quantity of each date. |
| `squareColor`      | `string`                     | `"#00ff00"`   | Color of the filled squares in the heatmap.          |
| `squareSize`       | `number`                     | `32`          | Size of each square in the heatmap grid.             |
| `emptySquareColor` | `string`                     | `"#000000"`   | Color of empty squares in the heatmap.               |
| `onSquareClick`    | `(entry: DateEntry) => void` | -             | Callback function triggered on square click.         |
| `hideTooltip`      | `boolean`                    | `false`       | Hide tooltips on square hover.                       |

# DateEntry

| Name        | Type      | Default Value | Description                                    |
| ----------- | --------- | ------------- | ---------------------------------------------- |
| `date`      | `Date`    | -             | The date represented by the entry.             |
| `formatted` | `string`  | -             | A formatted string representation of the date. |
| `active`    | `boolean` | -             | Indicates whether the date is active or not.   |
| `quantity`  | `number`  | -             | Quantity associated with the date.             |
