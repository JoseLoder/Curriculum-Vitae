import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import ErrorPage from "./ErrorPage";
import { Projects } from "./pages/Projects";
import { Experience } from "./pages/Experience";
import { ThemeContext } from "./contexts/ThemeContext";
import { responsiveFontSizes } from "@mui/material"
export const App = () => {

  const [mode, setMode] = useState('dark');

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = responsiveFontSizes(createTheme({
    palette: {
      mode,
      primary: {
        main: '#2196f3',
      },
      secondary: {
        main: '#ff5722',
      },
    },
  }));
  const router = createHashRouter([
    {
      path: "/",
      element: <LandingPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/projects",
      element: <Projects />,
      errorElement: <ErrorPage />,
    },
    {
      // Ruta antigua: se mantiene para no romper enlaces ya compartidos
      path: "/proyects",
      element: <Navigate to="/projects" replace />,
    },
    {
      path: "/experience",
      element: <Experience />,
      errorElement: <ErrorPage />,
    }
  ]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};