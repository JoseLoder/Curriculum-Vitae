import { useRouteError, useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

export default function ErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate();
    console.error(error);

    return (
        <Box
            component="main"
            id="error-page"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                p: 4,
                textAlign: 'center',
            }}
        >
            <Typography variant="h2" component="h1" color="secondary">
                ¡Vaya!
            </Typography>
            <Typography variant="h5" component="p">
                No hemos encontrado esta página o ha ocurrido un error inesperado.
            </Typography>
            {(error?.statusText || error?.message) && (
                <Typography color="text.secondary" component="p">
                    <i>{error.statusText || error.message}</i>
                </Typography>
            )}
            <Button variant="contained" onClick={() => navigate('/')}>
                Volver al inicio
            </Button>
        </Box>
    );
}
