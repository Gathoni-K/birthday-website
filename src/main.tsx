import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'


// import google fonts
import '@fontsource/cinzel-decorative'
import '@fontsource/dancing-script'
import '@fontsource/allura'
import '@fontsource/caveat-brush'
import '@fontsource/satisfy'
import '@fontsource/great-vibes'
import '@fontsource/space-grotesk'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
