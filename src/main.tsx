import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './assets/styles/global-styles.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </BrowserRouter>
)
