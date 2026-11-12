import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";

import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import { assetUrl } from "../utils/assetUrl";

export function CardProject({ title, description, code, demo = "", firstImage, secondImage, thirdImage }) {
    const images = [firstImage, secondImage, thirdImage].filter(Boolean).map(assetUrl);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (images.length < 2) return;
        const interval = setInterval(() => {
            setIndex((i) => (i + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <Card sx={{ width: 250 }}>

            <CardMedia
                component="img"
                height="140"
                image={images[index]}
                alt={'Captura del proyecto ' + title}
            />
            <CardContent sx={{ height: 200 }}>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>

            <CardActions>
                <Button size="small" color="primary" href={code} target="_blank" rel="noreferrer">
                    Código
                </Button>
                <Button size="small" color="secondary" href={demo} target="_blank" rel="noreferrer" disabled={!demo}>
                    Demo
                </Button>
            </CardActions>
        </Card>
    )
}

CardProject.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    demo: PropTypes.string,
    firstImage: PropTypes.string,
    secondImage: PropTypes.string,
    thirdImage: PropTypes.string,
}
