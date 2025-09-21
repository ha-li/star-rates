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
}

export function ColorList({ colors = [] }: ColorListProps) {
  if (!colors.length) return (<div>No Colors List.</div>);

  return (
    <div>
      {
        colors.map (color => <Color key={color.id} {...color} />)
      }
    </div>
  );
}