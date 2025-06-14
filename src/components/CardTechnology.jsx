import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import PropTypes from "prop-types";

export function CardTechnology({ url, image, title, description }) {
    image = "https://joseloder.github.io/Curriculum-Vitae" + image;
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea href={url}>
                <CardMedia
                    component="img"
                    height="140"
                    // TO LOCALHOST
                    // image={"http://localhost:5173/Curriculum-Vitae" + image}

                    // TO GITHUB PAGES
                    image={image}
                    alt={"Image " + title + " logo"}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
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
}
