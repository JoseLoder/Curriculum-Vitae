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
            <AppBar position="static">
                <Container maxWidth="lg">
                    <Toolbar>

                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            My Portfolio
                        </Typography>
                        <Box sx={{ felxgrow: 1, display: { xs: 'none', sm: 'flex' } }}>
                            <Button color="inherit" component={Link} to="/">
                                <Box mr={1}><Grade /></Box>
                                About me
                            </Button>
                            <Button color="inherit" component={Link} to="/proyects">
                                <Box mr={1}><TerminalIcon /></Box>
                                Proyects
                            </Button>
                            <Button color="inherit" component={Link} to="/experience">
                                <Box mr={1}><HikingIcon /></Box>
                                Experience
                            </Button>
                        </Box>
                        <Box sx={{ felxgrow: 1, display: { xs: 'flex', sm: 'none' } }}>
                            <Button color="inherit" component={Link} to="/"><Grade /></Button>
                            <Button color="inherit" component={Link} to="/proyects"><TerminalIcon /></Button>
                            <Button color="inherit" component={Link} to="/experience"><HikingIcon /></Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            {/* <header>
                <h1>Mi Portfolio</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/proyects">Proyects</Link>
                        </li>
                        <li>
                            <Link to="/experience">Experience</Link>
                        </li>
                    </ul>
                </nav>
            </header> */}
        </>
    );
}