import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { TDS } from "./TDS";

export function CardTechnology({ url, image, title, description, experience }) {
    // image = "https://joseloder.github.io/Curriculum-Vitae" + image;
    // TO LOCALHOST
    image = "http://localhost:5173/Curriculum-Vitae" + image;
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea href={url}>
                <CardMedia
                    component="img"
                    height="140"
                    sx={{ objectFit: "contain" }}
                    image={image}
                    alt={"Image " + title + " logo"}
                />
                <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <div>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </div>
                    {experience && (
                        <div style={{ marginTop: 'auto' }}>
                            <Typography variant="body2" sx={{ textAlign: 'center', marginTop: 2, marginBottom: 1 }}>
                                <TDS>Experiencia</TDS>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {experience}
                            </Typography>
                        </div>
                    )}
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

CardTechnology.propTypes = {
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    experience: PropTypes.string
}
