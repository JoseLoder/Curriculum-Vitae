import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Avatar,
    ListItem,
    ListItemAvatar,
    ListItemText
} from "@mui/material";
import PropTypes from "prop-types";
import { useId } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TDS } from "./TDS";


export function AccordionFirstLevel({ icon, sector, skills, children }) {
    const id = useId();
    return (
        <Accordion sx={{ alignSelf: 'center', width: '80%', backgroundColor: 'divider' }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${id}-content`}
                id={`${id}-header`}
            >
                <ListItem sx={{ padding: 0 }}>
                    <ListItemAvatar >
                        <Avatar sx={{ backgroundColor: 'primary.main' }}>
                            {icon}
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={<TDS>{sector}</TDS>} secondary={skills} />
                </ListItem>
            </AccordionSummary>
            <AccordionDetails>
                {children}
            </AccordionDetails>
        </Accordion>
    )
}
AccordionFirstLevel.propTypes = {
    icon: PropTypes.element.isRequired,
    sector: PropTypes.string.isRequired,
    skills: PropTypes.string,
    children: PropTypes.node,
}