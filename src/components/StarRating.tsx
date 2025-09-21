import { Star } from './Star';

type StarRatingProps = {
  totalStars?: number;
  selectedStars: number;
  onRate?: (rating: number) => void;
  //style?: React.CSSProperties;
}

const createArray = (length: number) => [...Array(length)];

export function StarRating({ totalStars = 5, selectedStars, onRate = () => {} }: StarRatingProps) {
  // const [selectedStars, setSelectedStars] = useState(earnedStars);
  
  return ( 
    <div style={ {padding: '5px' } }>
      { createArray(totalStars).map((_, i) => (
        <Star 
          key={i} 
          selected={selectedStars > i} 
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
}
