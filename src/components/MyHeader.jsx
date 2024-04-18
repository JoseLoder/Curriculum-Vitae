import {
    AppBar,
    Button,
    Container,
    Toolbar,
    Typography,
    Box,
} from "@mui/material";

import TerminalIcon from '@mui/icons-material/Terminal';
import HikingIcon from '@mui/icons-material/Hiking';

import { Link } from "react-router-dom";
import { Grade } from "@mui/icons-material";

export function MyHeader() {
    return (
        <>
            <AppBar position="fixed">
                <Container maxWidth="lg">
                    <Toolbar>

                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'primary.main' }}>
                            J.M.M.S
                        </Typography>
                        <Box sx={{ felxgrow: 1, display: { xs: 'none', sm: 'flex' } }}>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/"
                                sx={{
                                    '&:hover': {
                                        color: 'secondary.main',
                                    },
                                }}
                            >
                                <Box mr={1}><Grade /></Box>
                                Sobre mí
                            </Button>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/proyects"
                                sx={{
                                    '&:hover': {
                                        color: 'secondary.main',
                                    },
                                }}
                            >
                                <Box mr={1}><TerminalIcon /></Box>
                                Proyectos
                            </Button>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/experience"
                                sx={{
                                    '&:hover': {
                                        color: 'secondary.main',
                                    },
                                }}
                            >
                                <Box mr={1}><HikingIcon /></Box>
                                Experiencia
                            </Button>
                        </Box>
                        <Box sx={{ felxgrow: 1, display: { xs: 'flex', sm: 'none' } }}>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/"
                                sx={{
                                    '&:hover': {
                                        color: 'secondary.main',
                                    },
                                }}
                            >
                                <Grade />
                            </Button>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/proyects"
                                sx={{
                                    '&:hover': {
                                        color: 'secondary.main',
                                    },
                                }}
                            >
                                <TerminalIcon />
                            </Button>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/experience"
                                sx={{
                                    '&:hover': {
                                        color: 'secondary.main',
                                    },
                                }}
                            >
                                <HikingIcon />
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}