import { useState } from 'react';
import { Star } from './Star';

type StarRatingProps = {
  earnedStars: number;
  totalStars?: number;
}

const createArray = (length: number) => [...Array(length)];

export function StarRating({ earnedStars, totalStars = 5 }: StarRatingProps) {
  const [selectedStars, setSelectedStars] = useState(earnedStars);
  
  return ( 
    <>
      { createArray(totalStars).map((_, i) => (
        <Star 
          key={i} 
          selected={selectedStars > i} 
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}
