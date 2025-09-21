import { FaTrash } from 'react-icons/fa';
import { StarRating } from './StarRating';
import { useColors } from './ColorProvider';

type ColorProps = {
  id: string;
  title: string;
  rating: number;
  color: string;
  // onRemove: (id: string) => void;
  // onRate: (id: string, rating: number) => void;
}


export function Color ({ id, title, rating, color }: ColorProps) {
  const { rateColor, removeColor } = useColors();
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={()=>removeColor(id)}><FaTrash /></button>
      <div style={{ height: 50, backgroundColor: color }} />
        <StarRating 
          selectedStars={rating} 
          onRate={(rating: number) => rateColor(id, rating)}
        />
    </section>
  );
}