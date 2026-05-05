import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

console.log('🚀 Main.tsx loaded')
console.log('📍 Current location:', window.location.href)
console.log('🔍 Root element:', document.getElementById('root'))

try {
  const rootElement = document.getElementById('root')
  
  if (!rootElement) {
    console.error('❌ Root element not found!')
    document.body.innerHTML = '<div style="padding: 20px; color: red;">Error: Root element not found. Check console for details.</div>'
  } else {
    console.log('✅ Root element found, rendering React app...')
    
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
    
    console.log('✅ React app rendered successfully')
  }
} catch (error) {
  console.error('❌ Error rendering app:', error)
  document.body.innerHTML = `
    <div style="padding: 20px; background: #fee; border: 2px solid red; margin: 20px;">
      <h2>Application Error</h2>
      <p>${error instanceof Error ? error.message : 'Unknown error'}</p>
      <pre>${error instanceof Error ? error.stack : ''}</pre>
    </div>
  `
}