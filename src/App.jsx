import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import ErrorPage from "./ErrorPage";
import { Proyects } from "./pages/Proyects";
import { Experience } from "./pages/Experience";
import { ThemeContext } from "./contexts/ThemeContext";

export const App = () => {

  const [mode, setMode] = useState('dark');

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: '#2196f3',
      },
      secondary: {
        main: '#ff5722',
      },
    },
  });
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

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};