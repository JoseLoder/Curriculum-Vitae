// Este componente es para destacar partes del texto con el color principal
import { Typography } from "@mui/material";
import PropTypes from "prop-types";

export function TD({ children }) {
    return (
        <Typography color="primary" component="strong">
            {children}
        </Typography>
    );
}

TD.propTypes = {
    children: PropTypes.node,
};