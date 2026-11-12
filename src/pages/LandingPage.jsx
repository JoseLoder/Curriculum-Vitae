import { MyHeader } from "../components/MyHeader";
import { MyMain } from "../components/MyMain";
import { MyFooter } from "../components/MyFooter";
import { TDS } from "../components/TDS";

import { Box, ImageListItem, ImageListItemBar, Typography } from "@mui/material";
import { HGroup } from "../components/HGroup";
import { SectionBox } from "../components/SectionBox";
import { CustomLink } from "../components/CustomLink";
import { assetUrl } from "../utils/assetUrl";

export function LandingPage() {
    return (
        <>
            <MyHeader />
            <MyMain>
                <HGroup firstTitle="¡HOLA, QUÉ HAY!" secondTitle="Soy José Miguel," aditionalText="desarrollador Full-Stack con JavaScript y TypeScript." />

                <SectionBox title="Presentación">
                    <Typography variant="p" component="p" sx={{ marginBottom: "10px" }}>
                        Me llamo <TDS>José Miguel</TDS> y soy <TDS>desarrollador web Full-Stack</TDS>, titulado en Desarrollo de Aplicaciones Web (DAW). Trabajo con <TDS>JavaScript y TypeScript</TDS>: <TDS>Node.js y Express</TDS> en el backend y <TDS>React</TDS> en el frontend.
                    </Typography>
                    <Typography variant="p" component="p" sx={{ marginBottom: "10px" }}>
                        Hice las prácticas en <TDS>Jaraxa Software</TDS> como desarrollador frontend con React y TypeScript. Como proyecto de fin de grado desarrollé <CustomLink href="https://github.com/JoseLoder/Pawn-to-Pawn" target="_blank" rel="noreferrer">Pawn-to-Pawn</CustomLink>, una aplicación de gestión de pedidos y producción con una API REST en Express, PostgreSQL, autenticación con JWT y Docker.
                    </Typography>
                    <Typography variant="p" component="p" sx={{ marginBottom: "10px" }}>
                        Empecé interesado por el front-end, pero lo que más me motiva es el <TDS>backend</TDS>: diseñar APIs, modelar bases de datos y resolver la lógica de negocio. Busco mi primera oportunidad como <TDS>desarrollador backend con Node.js o Full-Stack con JavaScript</TDS>.
                    </Typography>
                </SectionBox>

                <Box sx={{ display: "flex", flexDirection: { xs: 'column', md: 'row' } }} >


                    <ImageListItem sx={{ width: { xs: 250, md: 500 }, marginLeft: { xs: 0, md: 10 }, marginBottom: 10, alignSelf: 'center' }}>
                        <img
                            srcSet={`${assetUrl("foto-personal-250.png")} 500w, ${assetUrl("foto-personal-500.png")} 1000w`}
                            src={assetUrl("foto-personal-250.png")}
                            alt='José Miguel Martín Silva'
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title='José Miguel Martín Silva'
                            subtitle='Desarrollador Web Full-Stack'
                        />
                    </ImageListItem>


                    <Box sx={{ marginLeft: { xs: 0, lg: 5 } }}>
                        <SectionBox title="Datos Personales">
                            <ul>
                                <li>
                                    <Typography variant="p" component="p" sx={{ marginBottom: "10px" }}>
                                        <TDS>Nombre:</TDS> José Miguel Martín Silva
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="p" component="p" sx={{ marginBottom: "10px" }}>
                                        <TDS>Email:</TDS> <CustomLink href="mailto:martin.silva.jmms@gmail.com">martin.silva.jmms@gmail.com</CustomLink>
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="p" component="p" sx={{ marginBottom: "10px" }}>
                                        <TDS>LinkedIn:</TDS> <CustomLink href="https://www.linkedin.com/in/joseloder" target="_blank" rel="noreferrer">www.linkedin.com/in/joseloder</CustomLink>
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="p" component="p" sx={{ marginBottom: "10px" }}>
                                        <TDS>Europass:</TDS> <CustomLink href="https://europa.eu/europass/eportfolio/api/eprofile/shared-profile/jos%C3%A9+miguel-mart%C3%ADn+silva/e9f60dde-793a-49a6-9d18-5117a5365cb9?view=html" target="_blank" rel="noreferrer">Mi perfil Europass</CustomLink>
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="p" component="p" sx={{ marginBottom: "10px" }}>
                                        <TDS>Github:</TDS> <CustomLink href="https://github.com/joseloder" target="_blank" rel="noreferrer">JoseLoder</CustomLink>
                                    </Typography>
                                </li>
                            </ul>
                        </SectionBox>

                        <SectionBox title="Otros Datos">
                            <ul>
                                <li>
                                    <Typography variant="p" component="p" sx={{ marginBottom: "10px" }}>
                                        Carnet de conducir A y B.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="p" component="p" sx={{ marginBottom: "10px" }}>
                                        Vehículo propio.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="p" component="p" sx={{ marginBottom: "10px" }}>
                                        Movilidad geográfica.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="p" component="p" sx={{ marginBottom: "10px" }}>
                                        Responsable.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="p" component="p" sx={{ marginBottom: "10px" }}>
                                        Ganas de trabajar y de avanzar, tanto profesionalmente como académicamente.
                                    </Typography>
                                </li>
                            </ul>
                        </SectionBox>

                    </Box>
                </Box>
            </MyMain >
            <MyFooter />
        </>
    );
}
