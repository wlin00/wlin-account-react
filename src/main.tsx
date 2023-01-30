import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const div = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(div)
const routes = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/test',
    element: <div>123</div>
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>
)
