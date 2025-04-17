import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import About from './Views/About.tsx'

import { HeroUIProvider } from '@heroui/react'
import React, { StrictMode } from 'react'

createRoot(document.getElementById('root')!).render(

    <HeroUIProvider>
      <About />
    </HeroUIProvider>

)
