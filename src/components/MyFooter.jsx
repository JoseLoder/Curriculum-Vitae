import { Box, Typography } from "@mui/material";


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
                <strong> Jose Miguel Martín Silva </strong> <br />
                <strong> Full Stack Developer </strong> <br />
                <strong> Call: </strong> +34 633 338 128 <br />
                <strong> Email: </strong> martin_silva_jose@hotmail.com
            </Typography>
            <Typography align="center" color="textSecondary" component="p">
                <strong> © 2024 created with: </strong><br />
                JavaScript <br />
                React <br />
                Material-UI
            </Typography>
        </Box>
    );
}