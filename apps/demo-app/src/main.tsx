import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Import Tailwind (must be first for proper cascade)
import './tailwind.css'

// Import design system tokens and styles
import '@ds/tokens'
import '@ds/ui/styles.css'

import App from './App'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
