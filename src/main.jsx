import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css'
import { RouterProvider } from 'react-router-dom'
import { routers } from './routes/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routers} />
)
