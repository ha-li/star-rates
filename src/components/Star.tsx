import { FaStar } from 'react-icons/fa';

type StarProps = {
  // key: number;
  selected?: boolean;
  onSelect?: () => void;
}

export function Star({ selected = false, onSelect = () => {} }: StarProps ) {
  return (<FaStar color={selected ? 'red' : 'grey'} 
    onClick={onSelect} 
    />)
}

