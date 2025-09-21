import { useState } from 'react';
import { Star } from './Star';

type StarRatingProps = {
  earnedStars?: number;
  totalStars?: number;
  selectedStars: number;
  //style?: React.CSSProperties;
}

const createArray = (length: number) => [...Array(length)];

export function StarRating({ totalStars = 5, selectedStars = 0 }: StarRatingProps) {
  // const [selectedStars, setSelectedStars] = useState(earnedStars);
  
  return ( 
    <div style={ {padding: '5px' } }>
      { createArray(totalStars).map((_, i) => (
        <Star 
          key={i} 
          selected={selectedStars > i} 
          // onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
}
