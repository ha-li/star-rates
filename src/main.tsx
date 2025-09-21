import { createContext } from 'react'
import { createRoot } from 'react-dom/client'
import colorData from './data/color-data.json';
import './index.css'
import App from './App.tsx'


export type Color = {
  id: string;
  title: string;
  color: string;
  rating: number;
}

export interface ColorsContextValue {
  colors: Color[];
}

export const ColorContext = createContext<ColorsContextValue>({
  colors: []
});

createRoot(document.getElementById('root')!)
.render(
  <ColorContext.Provider value={{ colors: colorData as Color[] }}>
    <App />
  </ColorContext.Provider>,
)
