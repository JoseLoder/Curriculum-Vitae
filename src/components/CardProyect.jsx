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

export function CardProyect({ title, description, code, demo = "", firstImage, secondImage, thirdImage }) {
    const images = [

        // TO LOCALHOST
        // "http://localhost:5173/Curriculum-Vitae" + firstImage,
        // "http://localhost:5173/Curriculum-Vitae" + secondImage,
        // "http://localhost:5173/Curriculum-Vitae" + thirdImage,

        // TO GITHUB PAGES
        "https://martinsilvajose.github.io/Curriculum-Vitae" + firstImage,
        "https://martinsilvajose.github.io/Curriculum-Vitae" + secondImage,
        "https://martinsilvajose.github.io/Curriculum-Vitae" + thirdImage,
    ];
    const [image, setImage] = useState(images[0]);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            i = (i + 1) % images.length;
            setImage(images[i]);
        }, 5000);
        return () => clearInterval(interval)
    }, []);


    return (
        <Card sx={{ width: 250 }}>

            <CardMedia
                component="img"
                height="140"
                image={image}
                alt={'Image ' + title + ' Proyect'}
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
                <Button size="small" color="primary" href={code}>
                    Code
                </Button>
                <Button size="small" color="secondary" href={demo} disabled={!demo}>
                    Demo
                </Button>
            </CardActions>
        </Card>
    )
}

CardProyect.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    demo: PropTypes.string,
    firstImage: PropTypes.string,
    secondImage: PropTypes.string,
    thirdImage: PropTypes.string,
}