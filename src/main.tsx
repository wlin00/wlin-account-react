import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { NavLink, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { RedirectPage } from './components/RedirectPage'

const div = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(div)
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Outlet/>, // Outlet 类似vue中的 <RouterView />
    errorElement: <RedirectPage/>,
    children: [
      { index: true, element: <RedirectPage/> },
      {
        path: 'welcome',
        element: <Outlet />,
        children: [
          { index: true, element: <RedirectPage/> },
          {
            path: '1',
            element: (
              <div>1 <NavLink to="/welcome/2">下一页</NavLink></div>
            )
          },
          {
            path: '2',
            element: (
              <div>2 <NavLink to="/welcome/3">下一页</NavLink></div>
            )
          },
          {
            path: '3',
            element: (
              <div>3 <NavLink to="/welcome/4">下一页</NavLink></div>
            )
          },
          {
            path: '4',
            element: (
              <div>4 <NavLink to="/start">下一页</NavLink></div>
            )
          },
        ]
      },
      {
        path: 'start',
        element: <div>start</div>
      }
    ]
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>
)
