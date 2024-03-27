# react-date-heatmap

A React Component that allows you to visualize an array of dates in form of a heatmap.

![screenshot](./example/example-screenshot.PNG)

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

## Usage Example

```jsx
import React, { useState } from "react";
import { DateEntry, ReactDateHeatmap } from "react-date-heatmap";

// generate an array of random dates
function getRandomDateArray(length: number) {
  const startDate = new Date(2023, 9, 7);
  const endDate = new Date(2023, 11, 31);
  const dateArray: Date[] = [];
  for (let i = 0; i < length; i++) {
    const randomTime =
      startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime());
    const randomDate = new Date(randomTime);
    dateArray.push(randomDate);
  }
  return dateArray;
}

function ExampleApp() {
  const [data, setData] = useState(getRandomDateArray(100));

  // Console log the Entry you clicked on
  const onSquareClick = (entry: DateEntry) => {
    console.log("You Clicked on entry", entry);
  };
  // Create your own content div that shows up when you hover over a square/entry
  const TooltipContent = ({ entry }: { entry: DateEntry }) => {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>{entry.formatted}</span>
        <span>Entries: {entry.quantity}</span>
      </div>
    );
  };

  return (
    <ReactDateHeatmap
      data={data}
      tooltipContent={TooltipContent}
      onSquareClick={onSquareClick}
      squareColor="#ff0000"
    />
  );
}

export default ExampleApp;
```

## List of Props

| Name                | Type                                               | Default Value | Description                                          |
| ------------------- | -------------------------------------------------- | ------------- | ---------------------------------------------------- |
| `data`              | `Date[]`                                           | -             | An array of dates to be visualized in the heatmap.   |
| `startDate`         | `Date`                                             | -             | The start date for the heatmap range.                |
| `endDate`           | `Date`                                             | -             | The end date for the heatmap range.                  |
| `rows`              | `number`                                           | `7`           | Number of rows to display in the heatmap grid.       |
| `showMonths`        | `boolean`                                          | `true`        | Display month indicators on the heatmap.             |
| `showShades`        | `boolean`                                          | `true`        | Display shades indicating the quantity of each date. |
| `squareSize`        | `number`                                           | `32`          | Size of each square in the heatmap grid.             |
| `squareColor`       | `string`                                           | `"#00ff00"`   | Color of the filled squares in the heatmap.          |
| `textColor`         | `string`                                           | `#000000`     | Color of the months text.                            |
| `emptySquareColor`  | `string`                                           | `"#333333"`   | Color of empty squares in the heatmap.               |
| `onSquareClick`     | `(entry: DateEntry) => void`                       | -             | Callback function triggered on square click.         |
| `hideTooltip`       | `boolean`                                          | `false`       | Hide tooltips on square hover.                       |
| `tooltipContent`    | `({ entry }: { entry: DateEntry }) => JSX.Element` | -             | Custom tooltip content for each square.              |
| `tooltipBackground` | `string`                                           | `"#ffffff"`   | Background color of the tooltip.                     |
| `tooltipTextColor`  | `string`                                           | `"#000000"`   | Text color of the tooltip.                           |

## Types

### DateEntry

| Name        | Type      | Description                                    |
| ----------- | --------- | ---------------------------------------------- |
| `date`      | `Date`    | The date represented by the entry.             |
| `formatted` | `string`  | A formatted string representation of the date. |
| `active`    | `boolean` | Indicates whether the date is active or not.   |
| `quantity`  | `number`  | Quantity associated with the date.             |
