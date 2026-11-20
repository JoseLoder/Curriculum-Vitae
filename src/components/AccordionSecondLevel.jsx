import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import PropTypes from "prop-types";
import { useId } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';

export function AccordionSecondLevel({ job, time, ubication, functions, description }) {
    const id = useId();
    return (

        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${id}-content`}
                id={`${id}-header`}
            >
                {job}
            </AccordionSummary>
            <AccordionDetails sx={{ px: { xs: 1, sm: 2 } }}>
                <List sx={{ padding: 0 }}>

                    <ListItem sx={{ px: { xs: 0, sm: 2 } }}>
                        <ListItemIcon sx={{ minWidth: { xs: 36, sm: 56 } }}>
                            <AccessTimeFilledIcon />
                        </ListItemIcon>
                        <ListItemText primary={time} />
                    </ListItem>

                    <ListItem sx={{ px: { xs: 0, sm: 2 } }}>
                        <ListItemIcon sx={{ minWidth: { xs: 36, sm: 56 } }}>
                            <LocationOnIcon />
                        </ListItemIcon>
                        <ListItemText primary={ubication} />
                    </ListItem>

                    <ListItem sx={{ px: { xs: 0, sm: 2 } }}>
                        <ListItemIcon sx={{ minWidth: { xs: 36, sm: 56 } }}>
                            <WorkIcon />
                        </ListItemIcon>
                        <ListItemText primary={functions} />
                    </ListItem>
                    {description && (
                        <ListItem sx={{ px: { xs: 0, sm: 2 } }}>
                            <ListItemText primary={description} />
                        </ListItem>
                    )}

                </List>
            </AccordionDetails>
        </Accordion>

    )
}

AccordionSecondLevel.propTypes = {
    job: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    ubication: PropTypes.string.isRequired,
    functions: PropTypes.string.isRequired,
    description: PropTypes.node
};
