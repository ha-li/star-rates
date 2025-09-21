// import React from 'react';
import { Color } from './Color';

interface ColorItem {
  id: string;
  title: string;
  rating: number;
  color: string;
}

interface ColorListProps {
  colors?: ColorItem[];
  onRemove: (id: string) => void;
  onRateColor: (id: string, rating: number) => void;
}

export function ColorList({ 
  colors = [], 
  onRemove = () => {}, 
  onRateColor = () => {} }: ColorListProps) {
  
    if (!colors.length) return (<div>No Colors List. (Add a Color)</div>);

    return (
      <div>
        {
          colors.map (color => 
            <Color 
              key={color.id} 
              {...color} 
              onRemove={() => onRemove(color.id)} 
              onRate={onRateColor}
              />)
        }
      </div>
  );
}