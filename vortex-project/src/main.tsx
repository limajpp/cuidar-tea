import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import CreateAccount from './pages/register/Cadastro-familia.tsx'
import Login from './pages/login/Login.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    < Login/>
  </StrictMode>,
)
