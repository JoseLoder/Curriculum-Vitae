import React from 'react';
import ReactDOM from 'react-dom/client';

/* Material-UI */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const themeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#ff5722',
    },
  },
});


/* React Router */
import {
  // createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './ErrorPage';
import { LandingPage } from './pages/LandingPage';
import { Proyects } from './pages/Proyects';
import { Experience } from './pages/Experience';
// import App from './App';

// NEW REACT ROUTER
const router = createHashRouter([
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

// OLD REACT ROUTER
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LandingPage />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/proyects",
//     element: <Proyects />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/experience",
//     element: <Experience />,
//     errorElement: <ErrorPage />,
//   }
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={themeOptions}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
