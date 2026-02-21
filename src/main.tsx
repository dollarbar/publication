import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import '@/styles/fonts3.css'
import '@/styles/index.css'
//import './App3.css'
//import '@/styles/index.css'
//import App from './App.tsx'                   //App
//import App from './App2.tsx'                  //App 2
//import App from './App3.tsx'                  //App 3
//import App from './App4.tsx';                //App 4   --> JUNK
import App from './App5.tsx'                  //App 5

//import '@/styles/index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
