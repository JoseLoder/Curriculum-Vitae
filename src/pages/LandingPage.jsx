import { MyHeader } from "../components/MyHeader";
import { MyMain } from "../components/MyMain";
import { MyFooter } from "../components/MyFooter";
import { TDS } from "../components/TDS";

import { Typography } from "@mui/material";
import { HGroup } from "../components/HGroup";
import { SectionBox } from "../components/SectionBox";


export function LandingPage() {
    return (
        <>
            <MyHeader />
            <MyMain>
                <HGroup firstTitle="¡HOLA, QUÉ HAY!" secondTitle="Bienvenidos a mi Portafolio," aditionalText="aquí podrás encontrar información sobre mí y mis proyectos." />

                <SectionBox title="Presentación">
                    <Typography variant="p" component="p" sx={{ marginBottom: "10px" }}>
                        Me llamo <TDS>José Miguel</TDS> y estoy en la recta final de mi aprendizaje como <TDS>Full Stack Developer</TDS>. No obstante ya me siento preparado en todos los aspectos para formar parte de una gran empresa como es la vuestra.
                    </Typography>
                    <Typography variant="p" component="p" sx={{ marginBottom: "10px" }}>
                        <TDS>Mi historia</TDS> en lo referido al mundo del desarrollo web es curioso ya que <TDS>tenía especial interés por el Front-End</TDS>. Pero una vez terminé de entender y <TDS>posteriormente</TDS> tras realizar mi primer proyecto con <TDS>Laravel me resultó muy emocionante</TDS>.  Por lo que, he llegado a la  <TDS>conclusión</TDS> de que el <TDS>desarrollo web es mi sitio</TDS> y que me apasionan todos sus apectos.
                    </Typography>
                    <Typography variant="p" component="p" sx={{ marginBottom: "10px" }}>
                        <TDS>Es por eso que soy Desarrollador Web Full-Stack.</TDS>
                    </Typography>
                </SectionBox>

                <SectionBox title="Datos Personales">
                    <ul>
                        <li>
                            <Typography variant="p" component="p" sx={{ marginBottom: "10px" }}>
                                <TDS>Nombre:</TDS> José Miguel Martín Silva
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="p" component="p" sx={{ marginBottom: "10px" }}>
                                <TDS>Fecha de Nacimiento:</TDS> 21 de Abril de 1997
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="p" component="p" sx={{ marginBottom: "10px" }}>
                                <TDS>Dirección:</TDS> Calle Hermanos Machado, Nº 5, 2º. Vícar,
                                Almería, Andalucía.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="p" component="p" sx={{ marginBottom: "10px" }}>
                                <TDS>Móvil:</TDS>  633 338 128
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="p" component="p" sx={{ marginBottom: "10px" }}>
                                <TDS>Email:</TDS> martin.silva.jmms@gmail.com
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="p" component="p" sx={{ marginBottom: "10px" }}>
                                <TDS>Linkedln:</TDS> www.linkedin.com/in/martin-silva-jose
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="p" component="p" sx={{ marginBottom: "10px" }}>
                                <TDS>Github:</TDS> MartinSilvaJose (github.com)
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
            </MyMain >
            <MyFooter />
        </>
    );
}