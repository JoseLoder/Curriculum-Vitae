// Este componente es para destacar partes del texto con el color secundario
import { Typography } from "@mui/material";
import PropTypes from "prop-types";

export function TDS({ children }) {
    return (
        <Typography color="secondary" component="strong">
            {children}
        </Typography>
    );
}

TDS.propTypes = {
    children: PropTypes.node,
};