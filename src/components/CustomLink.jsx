import PropTypes from 'prop-types';
import { Link } from '@mui/material';


export function CustomLink({ href, children }) {
    return (
        <Link href={href}
            sx={{
                textDecoration: 'none',
                '&:hover': {
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    color: 'secondary.main',
                }
            }}
        >
            {children}
        </Link>
    )
}

CustomLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}