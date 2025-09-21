import { useContext } from 'react';
import { Color } from './Color';
import { ColorContext } from '../main';

/* interface ColorItem {
  id: string;
  title: string;
  rating: number;
  color: string;
} */

/* interface ColorListProps {
  colors?: ColorItem[];
  onRemove: (id: string) => void;
  onRateColor: (id: string, rating: number) => void;
} */

export function ColorList(){ 
  
  const { colors } = useContext(ColorContext);

    if (!colors.length) return (<div>No Colors List. (Add a Color)</div>);

    return (
      <div>
        {
          colors.map (color => 
            <Color 
              key={color.id} 
              {...color} 
              // onRemove={() => removeColor(color.id)} 
              // onRate={rateColor}
              />)
        }
      </div>
  );
}