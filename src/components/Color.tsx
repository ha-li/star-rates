import { StarRating } from './StarRating';

type ColorProps = {
  title: string;
  rating: number;
  color: string;
}

export function Color ({ title, rating, color }: ColorProps) {
  return (
    <section>
      <h1>{title}</h1>
      <div style={{ height: 50, backgroundColor: color }} />
        <StarRating selectedStars={rating} />
    </section>
  );
}