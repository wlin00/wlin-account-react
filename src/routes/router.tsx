import { Outlet, createBrowserRouter } from 'react-router-dom'
import { RedirectPage } from '../components/RedirectPage'
import { Welcome1 } from '../pages/Welcome/components/Welcome1'
import { Welcome2 } from '../pages/Welcome/components/Welcome2';
import { Welcome3 } from '../pages/Welcome/components/Welcome3';
import { Welcome4 } from '../pages/Welcome/components/Welcome4';
import { WelcomeLayout } from '../pages/Welcome/Welcome';
import { NotFoundPage } from '../components/NotFoundPage';
import { BeforeRootEnter } from '../components/BeforeRootEnter';
import { Home } from '../pages/Home/Home';
import { SwrDemo } from '../components/SwrDemo';

export const routes = createBrowserRouter([
  { path: '/', element: <BeforeRootEnter/>, errorElement: <NotFoundPage /> },
  { path: 'start', element: <Home /> },
  { path: 'test', element: <SwrDemo /> },
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
])