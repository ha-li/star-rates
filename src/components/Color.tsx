import { FaTrash } from 'react-icons/fa';
import { StarRating } from './StarRating';

type ColorProps = {
  id: string;
  title: string;
  rating: number;
  color: string;
  onRemove: (id: string) => void;
  onRate: (id: string, rating: number) => void;
}

export function Color ({ id, title, rating, color, onRemove, onRate }: ColorProps) {
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}><FaTrash /></button>
      <div style={{ height: 50, backgroundColor: color }} />
        <StarRating 
          selectedStars={rating} 
          onRate={(rating: number) => onRate(id, rating)}
        />
    </section>
  );
}