import { createRoot } from 'react-dom/client'
import { ColorProvider } from './components/ColorProvider';
import './index.css'
import App from './App.tsx'


createRoot(document.getElementById('root')!)
.render(
  <ColorProvider >
    <App />
  </ColorProvider>
)
