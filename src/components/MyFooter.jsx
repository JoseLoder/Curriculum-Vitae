import { Box, Link, Typography } from "@mui/material";


export function MyFooter() {
    return (
        <Box sx={{
            backgroundColor: (theme) =>
                theme.palette.mode === "light"
                    ? theme.palette.grey[200]
                    : theme.palette.grey[800],
            p: 2,
            display: "flex",
            justifyContent: "space-around",
            gap: 2,
        }} component="footer">
            <Typography align="center" color="textSecondary" component="p">
                <strong> José Martín</strong> <br />
                <strong> Full Stack Developer </strong> <br />
                <strong> Email: </strong> <Link href="mailto:martin.silva.jmms@gmail.com" color="inherit">martin.silva.jmms@gmail.com</Link>
            </Typography>
            <Typography align="center" color="textSecondary" component="p">
                <strong> © {new Date().getFullYear()} · Hecho con: </strong><br />
                JavaScript <br />
                React <br />
                Material-UI
            </Typography>
        </Box>
    );
}