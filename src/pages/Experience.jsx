import { MyHeader } from "../components/MyHeader";
import { MyFooter } from "../components/MyFooter";
import { MyMain } from "../components/MyMain";
import { Typography } from "@mui/material";

export function Experience() {
    return (
        <>
            <MyHeader />
            <MyMain>
                <Typography variant="h2" component="h1" p={4}>
                    HI THERE!
                </Typography>
                <Typography variant="p" p={4}>
                    <ul>
                        <li>Experiencia laboral relacionada</li>
                        <li>Formación académica, cursos y otras acreditaciones</li>
                        <li>Técnologias</li>
                        <li>Experiencia laboral no relacionada</li>
                    </ul>
                </Typography>
            </MyMain>
            <MyFooter />
        </>
    );
}