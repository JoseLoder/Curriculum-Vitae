import { MyHeader } from "../components/MyHeader";
import { MyMain } from "../components/MyMain";
import { MyFooter } from "../components/MyFooter";

import { Typography } from "@mui/material";

export function LandingPage() {
    return (
        <>
            <MyHeader />
            <MyMain>
                <Typography variant="h2" component="h1" p={4}>
                    HI THERE!
                </Typography>
                <Typography variant="p" p={4}>
                    <ul>
                        <li>Presentación</li>
                        <li>Datos personales</li>
                        <li>Otros datos</li>
                    </ul>
                </Typography>
            </MyMain>
            <MyFooter />
        </>
    );
}