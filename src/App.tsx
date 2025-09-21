import { useState } from 'react'
// import { StarRating } from './components/StarRating';
import colorData from './data/color-data.json';
import { ColorList } from './components/ColorList';
import './App.css'
import { ColorContext } from './main.tsx';

function App() {
  // we can use imported data as the initial state
  const [colors, setColors] = useState(colorData);



  return (
    <ColorContext.Provider value={{ colors }}>
      <ColorList />
      {/* 
      <StarRating 
        earnedStars={3} 
        totalStars={10} 
        style={{ background: 'lightblue' }}/>
        */}
    </ColorContext.Provider>
  )
}

export default App
