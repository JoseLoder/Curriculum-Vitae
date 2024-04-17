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
            </MyMain>
            <MyFooter />
        </>
    );
}