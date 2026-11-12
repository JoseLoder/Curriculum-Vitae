import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Chip,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import PropTypes from "prop-types";

// Tarjeta ancha para el proyecto principal del portfolio
export function FeaturedProject({ label, title, subtitle, description, highlights, stack, code, demo = "" }) {
    return (
        <Card
            component="article"
            sx={{
                width: '100%',
                maxWidth: 1000,
                borderLeft: 6,
                borderColor: 'secondary.main',
            }}
        >
            <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                <Typography variant="overline" color="secondary">
                    {label}
                </Typography>
                <Typography variant="h4" component="h3" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    {subtitle}
                </Typography>
                <Typography variant="body1" sx={{ my: 2 }}>
                    {description}
                </Typography>

                <List dense sx={{ mb: 2 }}>
                    {highlights.map((item) => (
                        <ListItem key={item} disableGutters alignItems="flex-start">
                            <ListItemIcon sx={{ minWidth: 32, mt: '2px' }}>
                                <CheckCircleOutlineIcon color="primary" fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                        </ListItem>
                    ))}
                </List>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {stack.map((tech) => (
                        <Chip key={tech} label={tech} size="small" variant="outlined" color="primary" />
                    ))}
                </Box>
            </CardContent>

            <CardActions sx={{ px: { xs: 2, md: 4 }, pb: 3, gap: 1 }}>
                <Button variant="contained" startIcon={<GitHubIcon />} href={code} target="_blank" rel="noreferrer">
                    Ver código
                </Button>
                {demo && (
                    <Button variant="outlined" color="secondary" startIcon={<LaunchIcon />} href={demo} target="_blank" rel="noreferrer">
                        Demo
                    </Button>
                )}
            </CardActions>
        </Card>
    );
}

FeaturedProject.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
    code: PropTypes.string.isRequired,
    demo: PropTypes.string,
};
