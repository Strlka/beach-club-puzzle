import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { system } from './theme.ts'
import { ColorModeProvider } from './components/ui/color-mode.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <ColorModeProvider forcedTheme="light">
        <App />
      </ColorModeProvider>
    </ChakraProvider>
  </StrictMode>,
)
