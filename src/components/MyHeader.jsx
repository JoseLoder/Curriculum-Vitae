import {
    AppBar,
    Button,
    Toolbar,
    Typography,
    Box,
    IconButton,
} from "@mui/material";

import TerminalIcon from '@mui/icons-material/Terminal';
import HikingIcon from '@mui/icons-material/Hiking';
import DownloadIcon from '@mui/icons-material/Download';

import { Link, useLocation } from "react-router-dom";
import { Grade } from "@mui/icons-material";
import { ThemeToggleButton } from "../ThemeToggleButton";
import { assetUrl } from "../utils/assetUrl";

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
                    <Button
                        href={assetUrl("cv_jose-martin_full-stack.pdf")}
                        download="CV_José-Martín_Full-Stack.pdf"
                        variant="contained"
                        color="secondary"
                        startIcon={<DownloadIcon/>}
                    >
                        Descargar CV
                    </Button>
                    <Box sx={{ flexGrow: 1 }}/>
                    <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
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
                            to="/projects"
                            sx={getButtonStyles("/projects")}
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
                    <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                        <IconButton
                            color="inherit"
                            component={Link}
                            to="/"
                            sx={getButtonStyles("/")}
                        >
                            <Grade />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            component={Link}
                            to="/projects"
                            sx={getButtonStyles("/projects")}
                        >
                            <TerminalIcon />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            component={Link}
                            to="/experience"
                            sx={getButtonStyles("/experience")}
                        >
                            <HikingIcon />
                        </IconButton>
                    </Box>
                </Toolbar>

            </AppBar>
        </>
    );
}
