
import './App.css'
import ReactDateHeatmap from './ReactDateHeatmap/ReactDateHeatmap'
import { getRandomDateArray } from './ReactDateHeatmap/test/util';
import { DateEntry } from './ReactDateHeatmap/types';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(getRandomDateArray(100))

  // Console log the Entry you clicked on 
  const onSquareClick = (entry: DateEntry) => {
    console.log("You Clicked on Entry", entry)
  }
  // Create your own content div that shows when you hover over a square
  const TooltipContent = ({ entry }: { entry: DateEntry }) => {
    return (
      <div style={{ display: 'flex', flexDirection: "column" }}>
        <span>{entry.formatted}</span>
        <span>Entries: {entry.quantity}</span>
      </div>
    );
  };
  const [squareColor,setSquareColor] = useState("#ff0000")

  return (
    <>
  <form>
    <input type="color" value={squareColor} onChange={(e)=>setSquareColor(e.target.value)}/>
  </form>

    <ReactDateHeatmap tooltipContent={TooltipContent} data={data} onSquareClick={onSquareClick} squareColor={squareColor} />
</>
  )
}

export default App
