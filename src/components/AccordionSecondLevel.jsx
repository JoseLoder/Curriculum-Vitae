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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';

export function AccordionSecondLevel({ job, time, ubication, functions }) {
    return (

        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                {job}
            </AccordionSummary>
            <AccordionDetails>
                <List sx={{ padding: 0 }}>

                    <ListItem>
                        <ListItemIcon>
                            <AccessTimeFilledIcon />
                        </ListItemIcon>
                        <ListItemText primary={time} />
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <LocationOnIcon />
                        </ListItemIcon>
                        <ListItemText primary={ubication} />
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <WorkIcon />
                        </ListItemIcon>
                        <ListItemText primary={functions} />
                    </ListItem>

                </List>
            </AccordionDetails>
        </Accordion>

    )
}

AccordionSecondLevel.propTypes = {
    job: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    ubication: PropTypes.string.isRequired,
    functions: PropTypes.string.isRequired
};