import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';

import ErrorPage from './ErrorPage';
import { LandingPage } from './pages/LandingPage';
import { Proyects } from './pages/Proyects';
import { Experience } from './pages/Experience';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/proyects",
    element: <Proyects />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/experience",
    element: <Experience />,
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
