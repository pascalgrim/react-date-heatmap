# react-date-heatmap

A React Component that allows you to visualize an array of dates in form of a heatmap.

## Installation

Install `react-date-heatmap` in your project using the following npm command:

```bash
npm install react-date-heatmap
```

Or with yarn

```bash
yarn add react-date-heatmap
```

After installation, you can use the ReactDateHeatmap component in your React project.

```jsx
import React from 'react';
import ReactDateHeatmap from 'react-date-heatmap';

const YourComponent = () => {
  const arrayOfDates = /* ... */;

  return (
    <ReactDateHeatmap data={arrayOfDates} />
  );
}

export default YourComponent;
```

## ReactDateHeatmap Component Props

| Name               | Type                                    | Default Value | Description                                          |
| ------------------ | --------------------------------------- | ------------- | ---------------------------------------------------- |
| `data`             | `Date[]`                                | -             | An array of dates to be visualized in the heatmap.   |
| `startDate`        | `Date` (optional)                       | -             | The start date for the heatmap range.                |
| `endDate`          | `Date` (optional)                       | -             | The end date for the heatmap range.                  |
| `rows`             | `number` (optional)                     | `7`           | Number of rows to display in the heatmap grid.       |
| `showMonths`       | `boolean` (optional)                    | `true`        | Display month indicators on the heatmap.             |
| `showShades`       | `boolean` (optional)                    | `true`        | Display shades indicating the quantity of each date. |
| `squareColor`      | `string` (optional)                     | `"#00ff00"`   | Color of the filled squares in the heatmap.          |
| `squareSize`       | `number` (optional)                     | `32`          | Size of each square in the heatmap grid.             |
| `emptySquareColor` | `string` (optional)                     | `"#000000"`   | Color of empty squares in the heatmap.               |
| `onSquareClick`    | `(entry: DateEntry) => void` (optional) | -             | Callback function triggered on square click.         |
| `hideTooltip`      | `boolean` (optional)                    | `false`       | Hide tooltips on square hover.                       |

## DateEntry

| Name        | Type      | Default Value | Description                                    |
| ----------- | --------- | ------------- | ---------------------------------------------- |
| `date`      | `Date`    | -             | The date represented by the entry.             |
| `formatted` | `string`  | -             | A formatted string representation of the date. |
| `active`    | `boolean` | -             | Indicates whether the date is active or not.   |
| `quantity`  | `number`  | -             | Quantity associated with the date.             |
