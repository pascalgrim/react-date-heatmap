import React, { useState } from 'react'
import { DateEntry, ReactDateHeatmap } from "../src/ReactDateHeatmap"

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
    const [data, setData] = useState(getRandomDateArray(100))

    // Console log the Entry you clicked on 
    const onSquareClick = (entry: DateEntry) => {
        console.log("You Clicked on entry", entry)
    }
    // Create your own content div that shows up when you hover over a square/entry
    const TooltipContent = ({ entry }: { entry: DateEntry }) => {
        return (
            <div style={{ display: 'flex', flexDirection: "column" }}>
                <span>{entry.formatted}</span>
                <span>Entries: {entry.quantity}</span>
            </div>
        );
    };

    return (
        <ReactDateHeatmap tooltipContent={TooltipContent} data={data} onSquareClick={onSquareClick} />
    )
}

export default ExampleApp