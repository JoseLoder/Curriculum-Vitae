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
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { LandingPage } from './pages/LandingPage';
import { Proyects } from './pages/Proyects';
import { Experience } from './pages/Experience';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/proyects",
    element: <Proyects />,
  },
  {
    path: "/experience",
    element: <Experience />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={themeOptions}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
