import { useContext, createContext, useState } from 'react';
import colorData from '../data/color-data.json';
import { v4 } from 'uuid';


export type Color = {
  id: string;
  title: string;
  color: string;
  rating: number;
}

export interface ColorsContextValue {
  colors: Color[];
  addColor?: (title: string, color: string) => void;
  removeColor?: (id: string) => void;
  rateColor?: (id: string, rating: number) => void;
}


const ColorContext = createContext<ColorsContextValue>({
  colors: [],
  addColor: () => {},
  removeColor: () => {},
  rateColor: () => {},
});

// to use this context 
export function useColors() {
  return useContext(ColorContext);
}

export function ColorProvider({ children }: { children: React.ReactNode }) {
  const [colors, setColors] = useState(colorData);

  const addColor = (title: string, color: string) => 
    setColors([
      ...colors, 
      { 
        id: v4(),
        rating: 0,
        title,
        color
      }
    ]);

    const rateColor = (id: string, rating: number) => 
      setColors(
        colors.map( color => (color.id === id ? { ...color, rating } : color ))
      );

    const removeColor = (id: string) => 
      setColors(
        colors.filter( color => color.id !== id)
      );

  return (
    <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }} >
      {children}
    </ColorContext.Provider>
  );
}