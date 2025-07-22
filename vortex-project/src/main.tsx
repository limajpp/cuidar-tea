import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import CreateAccount from './pages/register/Cadastro-familia.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CreateAccount />
  </StrictMode>,
)
