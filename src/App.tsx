import { useState } from 'react'
// import { StarRating } from './components/StarRating';
import colorData from './data/color-data.json';
import { ColorList } from './components/ColorList';
import './App.css'

function App() {
  // we can use imported data as the initial state
  const [colors, setColors] = useState(colorData);

  const removeColor = (id: string) => {
    const newColors = colors.filter(color => color.id !== id);
    setColors(newColors);
  };

  const rateColor = (id: string, rating: number) => {
    const newColors = colors.map( color => 
      color.id === id ? { ...color, rating } : color    
    );
    setColors(newColors);
  }

  return (
    <>
      <ColorList colors={colors} onRemove={removeColor} onRateColor={rateColor} />
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
