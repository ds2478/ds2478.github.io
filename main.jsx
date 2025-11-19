import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './portfolio.jsx' // Assuming you renamed the main file or pointed here
import './index.css' // Optional if you have global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
