import {
    AppBar,
    Button,
    Toolbar,
    Typography,
    Box,
} from "@mui/material";

import TerminalIcon from '@mui/icons-material/Terminal';
import HikingIcon from '@mui/icons-material/Hiking';

import { Link, useLocation } from "react-router-dom";
import { Grade } from "@mui/icons-material";
import { ThemeToggleButton } from "../ThemeToggleButton";

export function MyHeader() {
    const location = useLocation();

    // Función para determinar si un enlace está activo
    const isActive = (path) => location.pathname === path;

    // Función para obtener los estilos del botón basado en si está activo
    const getButtonStyles = (path) => ({
        '&:hover': {
            color: 'secondary.main',
        },
        color: isActive(path) ? 'secondary.main' : 'inherit',
    });
    return (
        <>
            <AppBar position="fixed">

                <Toolbar>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'secondary.main' }}>
                        J.M.M.S
                    </Typography>
                    <Box sx={{ felxgrow: 1, display: { xs: 'none', sm: 'flex' } }}>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/"
                            sx={getButtonStyles("/")}
                        >
                            <Box mr={1}><Grade /></Box>
                            Sobre mí
                        </Button>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/proyects"
                            sx={getButtonStyles("/proyects")}
                        >
                            <Box mr={1}><TerminalIcon /></Box>
                            Proyectos
                        </Button>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/experience"
                            sx={getButtonStyles("/experience")}
                        >
                            <Box mr={1}><HikingIcon /></Box>
                            Experiencia
                        </Button>
                    </Box>
                    <ThemeToggleButton />
                    <Box sx={{ felxgrow: 1, display: { xs: 'flex', sm: 'none' } }}>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/"
                            sx={getButtonStyles("/")}
                        >
                            <Grade />
                        </Button>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/proyects"
                            sx={getButtonStyles("/proyects")}
                        >
                            <TerminalIcon />
                        </Button>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/experience"
                            sx={getButtonStyles("/experience")}
                        >
                            <HikingIcon />
                        </Button>
                        <ThemeToggleButton />
                    </Box>
                </Toolbar>

            </AppBar>
        </>
    );
}
