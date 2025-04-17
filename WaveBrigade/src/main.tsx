import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import About from './Views/About.tsx'

import { HeroUIProvider } from '@heroui/react'

createRoot(document.getElementById('root')!).render(

    <HeroUIProvider>
      <About />
    </HeroUIProvider>

)
