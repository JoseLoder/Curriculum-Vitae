import { Box } from "@mui/material";
import PropTypes from "prop-types";

export function MyMain({ children }) {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            height: "100vh",
        }} component={'main'}>
            {children}
        </Box>
    );
}

MyMain.propTypes = {
    children: PropTypes.node,
};