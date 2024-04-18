import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";


export function HGroup({ firstTitle, secondTitle, aditionalText = "" }) {
    return (
        <Box sx={{ marginTop: '70px' }}>
            <Typography variant="h1" p={4}>
                {firstTitle}
            </Typography>
            <Typography variant="h3" component="h2" p={4}>
                <Typography variant="h2" color={'secondary'} component={'p'}>{secondTitle}</Typography> {aditionalText}
            </Typography>
        </Box>
    )

}

HGroup.propTypes = {
    firstTitle: PropTypes.string.isRequired,
    secondTitle: PropTypes.string.isRequired,
    aditionalText: PropTypes.string,
}