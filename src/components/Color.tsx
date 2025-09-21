import { FaTrash } from 'react-icons/fa';
import { StarRating } from './StarRating';

type ColorProps = {
  id: string;
  title: string;
  rating: number;
  color: string;
  // onRemove: (id: string) => void;
  // onRate: (id: string, rating: number) => void;
}


/* const removeColor = (id: string) => {
  const newColors = colors.filter(color => color.id !== id);
  setColors(newColors);
};

const rateColor = (id: string, rating: number) => {
  const newColors = colors.map( color => 
    color.id === id ? { ...color, rating } : color    
  );
  setColors(newColors);
}       */

export function Color ({ title, rating, color }: ColorProps) {
  return (
    <section>
      <h1>{title}</h1>
      <button><FaTrash /></button>
      <div style={{ height: 50, backgroundColor: color }} />
        <StarRating 
          selectedStars={rating} 
          // onRate={(rating: number) => rateColor(id, rating)}
        />
    </section>
  );
}