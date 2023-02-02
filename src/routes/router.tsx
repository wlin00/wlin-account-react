import { Outlet, createBrowserRouter } from 'react-router-dom'
import { RedirectPage } from '../components/RedirectPage'
import { Welcome1 } from '../pages/Welcome/components/Welcome1'
import { Welcome2 } from '../pages/Welcome/components/Welcome2';
import { Welcome3 } from '../pages/Welcome/components/Welcome3';
import { Welcome4 } from '../pages/Welcome/components/Welcome4';
import { WelcomeLayout } from '../pages/Welcome/Welcome';
import { NotFoundPage } from '../components/NotFoundPage';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Outlet/>, // Outlet 类似vue中的 <RouterView />
    errorElement: <NotFoundPage/>,
    children: [
      { index: true, element: <RedirectPage/> },
      {
        path: 'welcome',
        element: <WelcomeLayout />,
        children: [
          { index: true, element: <RedirectPage/> },
          {
            path: '1',
            element: <Welcome1 />
          },
          {
            path: '2',
            element: <Welcome2 />
          },
          {
            path: '3',
            element: <Welcome3 />
          },
          {
            path: '4',
            element: <Welcome4 />
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