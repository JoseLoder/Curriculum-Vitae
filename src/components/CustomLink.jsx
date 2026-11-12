import PropTypes from 'prop-types';
import { Link } from '@mui/material';


export function CustomLink({ href, children, ...props }) {
    return (
        <Link href={href}
            {...props}
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
    target: PropTypes.string,
    rel: PropTypes.string,
}
