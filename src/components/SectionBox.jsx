import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export function SectionBox({ title, children }) {
    return (
        <Box component='section' width={'90%'} m={4}>
            <Typography variant="h4" component="h3" sx={{ marginBottom: "40px", color: 'primary.main' }} >
                {title}
            </Typography>
            <Box component='article' margin={'10px 20px 30px 30px'}>
                {children}
            </Box>
        </Box>
    )
}

SectionBox.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
}