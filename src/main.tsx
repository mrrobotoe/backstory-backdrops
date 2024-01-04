import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';

import { RootLayout } from './ui/routes/RootLayout';

// import { ErrorPage } from './ui/routes/ErrorPage';

import './styles/style.css'
import 'blaze-slider/dist/blaze.css'


// import { Menu } from './ui/routes/Menu';
import { HomePage } from './ui/routes/HomePage';
import { BalloonsPage } from './ui/routes/BalloonsPage';

const router = createHashRouter([
  {
    element: <RootLayout />,
    errorElement: <>Oops, something happened!</>,
    children: [
      {
        path: "/",
        element:  <HomePage />
      },
      {
        path: "balloons",
        element: <BalloonsPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
