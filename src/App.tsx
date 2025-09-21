import { useState } from 'react'
// import { StarRating } from './components/StarRating';
import colorData from './data/color-data.json';
import { ColorList } from './components/ColorList';
import './App.css'

function App() {
  const [colors, setColors] = useState(colorData);

  return (
    <>
      <ColorList colors={colors} />
      {/* 
      <StarRating 
        earnedStars={3} 
        totalStars={10} 
        style={{ background: 'lightblue' }}/>
        */}
    </>
  )
}

export default App
