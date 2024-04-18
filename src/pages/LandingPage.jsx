import { MyHeader } from "../components/MyHeader";
import { MyMain } from "../components/MyMain";
import { MyFooter } from "../components/MyFooter";
import { TDS } from "../components/TDS";

import { Box, Typography } from "@mui/material";
import { TD } from "../components/TD";
import { HGroup } from "../components/HGroup";


export function LandingPage() {
    return (
        <>
            <MyHeader />
            <MyMain>
                <HGroup firstTitle="¡HOLA, QUÉ HAY!" secondTitle="Bienvenidos a mi Portafolio," aditionalText="aquí podrás encontrar información sobre mí y mis proyectos." />
                <Typography variant="p" p={4}>
                    <Box component='section'>
                        <Typography variant="h4" component="h3" sx={{ marginBottom: "10px" }} >
                            Presentación
                        </Typography>
                        <Box component='article' margin={'10px 20px 30px 30px'}>
                            <Typography variant="p" component="p" sx={{ marginBottom: "10px" }}>
                                Me llamo <TDS>José Miguel</TDS> y estoy en la recta final de mi aprendizaje como <TDS>Full Stack Developer</TDS>. No obstante ya me siento preparado en todos los aspectos para formar parte de una gran empresa como es la vuestra.
                            </Typography>
                            <Typography variant="p" component="p" sx={{ marginBottom: "10px" }}>
                                <TDS>Mi historia</TDS> en lo referido al mundo del desarrollo web es curioso ya que <TDS>tenía especial interés por el Front-End</TDS>. Pero una vez terminé de entender y <TDS>posteriormente</TDS> tras realizar mi primer proyecto con <TDS>Laravel me resultó muy emocionante</TDS>.  Por lo que, he llegado a la  <TDS>conclusión</TDS> de que el <TDS>desarrollo web es mi sitio</TDS> y que me apasionan todos sus apectos.
                            </Typography>
                            <Typography variant="p" component="p" sx={{ marginBottom: "10px" }}>
                                <TDS>Es por eso que soy Desarrollador Web Full-Stack.</TDS>
                            </Typography>
                        </Box>

                        <Box component='section' >
                            <Typography variant="h4" component="h3" sx={{ marginBottom: "10px" }} >
                                Datos Personales
                            </Typography>
                            <ul>
                                <li>
                                    <Typography variant="p" component="p" sx={{ marginBottom: "10px" }}>
                                        <TD>Nombre:</TD> José Miguel Martín Silva
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="p" component="p" sx={{ marginBottom: "10px" }}>
                                        <TD>Fecha de Nacimiento:</TD> 21 de Abril de 1997
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="p" component="p" sx={{ marginBottom: "10px" }}>
                                        <TD>Dirección:</TD> Calle Hermanos Machado, Nº 5, 2º. Vícar,
                                        Almería, Andalucía.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="p" component="p" sx={{ marginBottom: "10px" }}>
                                        <TD>Móvil:</TD>  633 338 128
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="p" component="p" sx={{ marginBottom: "10px" }}>
                                        <TD>Email:</TD> martin.silva.jmms@gmail.com
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="p" component="p" sx={{ marginBottom: "10px" }}>
                                        <TD>Linkedln:</TD> www.linkedin.com/in/martin-silva-jose
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="p" component="p" sx={{ marginBottom: "10px" }}>
                                        <TD>Github:</TD> MartinSilvaJose (github.com)
                                    </Typography>
                                </li>

                            </ul>

                        </Box>

                        <Box component='section'>
                            <Typography variant="h4" component="h3" sx={{ marginBottom: "10px" }} >
                                Otros Datos
                            </Typography>
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

                        </Box>
                    </Box>
                </Typography>
            </MyMain >
            <MyFooter />
        </>
    );
}