import { MyHeader } from "../components/MyHeader";
import { MyFooter } from "../components/MyFooter";
import { MyMain } from "../components/MyMain";
import { Typography } from "@mui/material";
import { ExperienceNoRelated } from "../components/ExperienceNoRelated";

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
                        <ul>
                            <li>Sistemas Microinformáticos y Redes {"(SMR)"}</li>
                            <ul>
                                <ExperienceNoRelated
                                    desempeño="Técnico SMR"
                                    duracion="Octubre 2021-Enero 2022"
                                    ubicacion="Neotronics. Calle de la Sierra de Grazalema. Viator, Almería."
                                    funcion="Formación en centros de trabajo (FCT)"
                                />
                            </ul>
                        </ul>
                        <li>Formación académica, cursos y otras acreditaciones</li>
                        <ul>
                            <li>FPGM SISTEMAS MICROINFORMÁTICOS Y REDES {"(SMR)"}</li>
                            <ul>
                                <li>
                                    Instalar, configurar y mantener servicios multiusuario, aplicaciones y dispositivos compartidos en un entorno de red local.
                                </li>

                                <li>
                                    Diagnosticar disfunciones en sistemas y redes mediante pruebas funcionales.
                                </li>
                                <li>
                                    Determinar la logística asociada a las operaciones de instalación, configuración y mantenimiento de diversos sistemas microinformáticos.
                                </li>
                                <li>
                                    Montar y configurar ordenadores y periféricos.
                                </li>

                                <li>
                                    Replantear el cableado y la electrónica de redes locales en pequeños entornos y su conexión con redes de área extensa.
                                </li>

                                <li>
                                    Instalar y configurar software básico y de aplicación, redes locales cableadas, inalámbricas o mixtas y conectadas a redes públicas.
                                </li>

                                <li>
                                    Elaborar documentación técnica y administrativa del sistema, elaborar presupuestos y asesorar al cliente.
                                </li>
                            </ul>
                            <li>FPGS DESARROLLO DE APLICACIONES WEB {"(DAW)"}</li>
                            <ul>
                                <li>
                                    Configurar y explotar sistemas informáticos, adaptando la configuración lógica del sistema según las necesidades de uso y los criterios establecidos.
                                </li>

                                <li>
                                    Aplicar técnicas y procedimientos relacionados con la seguridad en sistemas, servicios y aplicaciones, cumpliendo el plan de seguridad.
                                </li>
                                <li>
                                    Gestionar servidores de aplicaciones adaptando su configuración en cada caso para permitir el despliegue de aplicaciones web.
                                </li>
                                <li>
                                    Gestionar bases de datos, interpretando su diseño lógico y verificando integridad, consistencia, seguridad y accesibilidad de los datos.
                                </li>

                                <li>
                                    Desarrollar aplicaciones web con acceso a bases de datos utilizando lenguajes, objetos de acceso y herramientas de mapeo adecuados a las especificaciones.
                                </li>
                            </ul>
                            <li>Cursos OpenWebinar{"(TODO: Linkear enlaces a los diplomas en OpenWebinar con su curso)"}</li>
                            <ul>
                                <li>
                                    Servidor Web con Apache 2.4.
                                </li>

                                <li>
                                    HTML 5 y CSS 3.
                                </li>
                                <li>
                                    Maquetación Web con CSS 3.
                                </li>
                                <li>
                                    Responsive Web Design.
                                </li>

                                <li>
                                    FlexBox y CSS Grid.
                                </li>
                                <li>
                                    Bootstrap 4: Maquetación Resposive y Layout
                                </li>
                                <li>
                                    JavaScript principiante e intermedio.
                                </li>
                            </ul>
                            <li>
                                Titulación de socorrista.
                            </li>
                            <li>
                                Titulación de primeros auxilios.
                            </li>
                            <li>
                                Titulación de reconocimiento, uso y manejo del equipo de oxigenoterapia.
                            </li>
                            <li>
                                Titulación de manipulador de alimentos.
                            </li>
                            <li>
                                Certificado de homologación en operador de carretillas de manutención de hasta 10.000 KG.
                            </li>
                        </ul>
                        <li>Tecnologías</li>
                        <ul>
                            <li>HTML 5</li>
                            <li>CSS 3</li>
                            <li>Json</li>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>PHP</li>
                            <li>MySQL</li>
                            <li>Node.js</li>
                            <li>React</li>
                            <li>React Redux</li>
                            <li>React Route</li>
                            <li>Laravel</li>
                            <li>Bootstrap 4</li>
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>Visual Studio Code</li>
                            <li>Linux</li>
                            <li>Windows</li>
                        </ul>
                        <li>Experiencia laboral no relacionada</li>
                        <ul>
                            <li>Agraria</li>
                            <ul>
                                <ExperienceNoRelated
                                    desempeño="Peón Agrícola"
                                    duracion="Julio 2020-Septiembre 2020"
                                    ubicacion="Centro de investigación de semillas Nuhems. El Ejido, Almería."
                                    funcion="Labores agrícolas de los invernaderos externos e internos. "
                                />
                                <ExperienceNoRelated
                                    desempeño="Peón Agrícola"
                                    duracion="Noviembre 2018-Enero 2019"
                                    ubicacion="Centro de investigación de semillas Nuhems. El Ejido, Almería."
                                    funcion="Pesajes y control del desarrollo del pepino Squisito."
                                />
                            </ul>
                            <li>Hostelería</li>
                            <ul>
                                <ExperienceNoRelated
                                    desempeño="Repartidor"
                                    duracion="Enero 2023-Junio 2023"
                                    ubicacion="Popeyes Louisiana Kitchen. CC El Gran plaza. Roquetas de Mar, Almería. "
                                    funcion="Labores de reparto y preparación de pedidos. (Apoyo en cocina y limpieza.) "
                                />
                                <ExperienceNoRelated
                                    desempeño="Encargado de cocina"
                                    duracion="Julio 2019-Febrero 2020"
                                    ubicacion="Cafe Bar Miguel, Vicar, Almería."
                                    funcion=" Mantenimiento, preparación, elaboración y responsable del servicio."
                                />
                                <ExperienceNoRelated
                                    desempeño="Ayudante de cocina"
                                    duracion="Enero 2019-Mayo 2020"
                                    ubicacion="Cafe Bar La Lonja, Roquetas de Mar, Almería."
                                    funcion="Encargado de la plancha."
                                />

                                <ExperienceNoRelated
                                    desempeño="Cocinero"
                                    duracion="Noviembre 2017-Agosto 2018"
                                    ubicacion="Cafe Bar Miguel, Vicar, Almería."
                                    funcion="Preparación y elaboración de tapas."
                                />

                                <ExperienceNoRelated
                                    desempeño="Ayudante de cocina"
                                    duracion="Julio 2017-Septiembre 2017"
                                    ubicacion="Hotel Zoraida Park, Roquetas de Mar, Almería."
                                    funcion="Encargado del Office y pinche del pasillo frío."
                                />
                            </ul>
                            <li>Industria</li>
                            <ul>
                                <ExperienceNoRelated
                                    desempeño="Mozo de almacén"
                                    duracion="Noviembre 2023-Marzo 2024"
                                    ubicacion="Grupo Hefame. Calle El Nogal, 16, Huércal de Almería, Almería."
                                    funcion="Preparación y reposición de pedidos de productos farmacéuticos"
                                />
                                <ExperienceNoRelated
                                    desempeño="Operario industrial"
                                    duracion="Julio 2023-Octubre 2023"
                                    ubicacion="Sotrafa, Grupo Armando Álvarez. Carretera Nacional 340, El Ejido, Almería."
                                    funcion="Preparación de pedidos de bovinas de plástico agrícola. "
                                />

                            </ul>
                            <li>Reponedor</li>
                            <ul>
                                <ExperienceNoRelated
                                    desempeño="Frutero"
                                    duracion="Mayo 2022-Noviembre 2022"
                                    ubicacion="Hipermercado Carrefour. CC El Copo. El Ejido, Almería."
                                    funcion="Labores de reposición, atención al cliente y control de calidad del género (Apoyo en pescadería y charcutería). "
                                />
                                <ExperienceNoRelated
                                    desempeño="Frutero"
                                    duracion="Julio 2021-Septiembre 2021"
                                    ubicacion="Hipermercado Carrefour. CC Rincón de la Victoria, Málaga. "
                                    funcion="Labores de reposición, atención al cliente y control de calidad del género. "
                                />
                            </ul>
                        </ul>
                    </ul>

                </Typography>
            </MyMain >
            <MyFooter />
        </>
    );
}