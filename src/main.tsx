import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/router';
import 'virtual:uno.css'
import './global.scss'
import './assets/stylesheets/vars.scss'
// import 'virtual:svgsprites'

const div = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(div)

root.render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>
)
