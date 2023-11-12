
import './App.css'
import ReactDateHeatmap from './ReactDateHeatmap/ReactDateHeatmap'
import { getRandomDateArray } from './ReactDateHeatmap/test/util';
import { DateEntry } from './ReactDateHeatmap/types';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(getRandomDateArray(100))
  const start = new Date(2022, 9, 31);
  const end = new Date(2022, 11, 31)
  const onSquareClick = (entry: DateEntry) => {
    console.log("You Clicked on Entry", entry)
  }

  return (
    <div style={{ height: "100vh", display: 'flex', justifyContent: "center", alignItems: "center" }}>
      <ReactDateHeatmap data={data} squareColor='#00ffbb' squareSize={24} startDate={start} endDate={end} onSquareClick={onSquareClick} />
      <button onClick={() => setData(getRandomDateArray(100))}>New data</button>
    </div>
  )
}

export default App
