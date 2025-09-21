//import { useContext } from 'react';
import { Color } from './Color';
import { useColors } from './ColorProvider';

export function ColorList(){ 
  
  const { 
    colors, 
    addColor, 
    removeColor, 
    rateColor 
  } = useColors();

    if (!colors.length) return (<div>No Colors List. (Add a Color)</div>);

    return (
      <div>
        {
          colors.map (color => 
            <Color 
              key={color.id} 
              {...color} 
               
               onRemove={() => removeColor(color.id)} 
               onRate={rateColor}
              />)
        }
      </div>
  );
}