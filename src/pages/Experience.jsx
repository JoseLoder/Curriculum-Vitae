import { MyHeader } from "../components/MyHeader";
import { MyFooter } from "../components/MyFooter";
import { MyMain } from "../components/MyMain";
import { HGroup } from "../components/HGroup";
import { SectionBox } from "../components/SectionBox";
import { AccordionFirstLevel } from "../components/AccordionFirstLevel";
import { AccordionSecondLevel } from "../components/AccordionSecondLevel";

import AgricultureIcon from '@mui/icons-material/Agriculture';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import FactoryIcon from '@mui/icons-material/Factory';
import StoreIcon from '@mui/icons-material/Store';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import WebIcon from '@mui/icons-material/Web';
import LaunchIcon from '@mui/icons-material/Launch';

import { Box, List, ListItem, ListItemText } from "@mui/material";
import { CardTechnology } from "../components/CardTechnology";
import { CustomLink } from "../components/CustomLink";


export function Experience() {
    return (
        <>
            <MyHeader />
            <HGroup firstTitle="! ALLÁ VAMOS !" secondTitle="Mi Recorrido . . ." aditionalText="En el mundo Profesional y Académico" />
            <MyMain>
                <SectionBox title="Experiencia Laboral Relacionada" >
                    <AccordionFirstLevel icon={<ConnectedTvIcon />} sector="SMR" skills="Soldadura de Componentes, Configuración de Impresoras y Reparaciones, Leer Documentación Técnica, . . .">
                        <AccordionSecondLevel
                            job="Técnico SMR"
                            time="Octubre 2021 - Enero 2022"
                            ubication="Neotronics. Calle de la Sierra de Grazalema. Viator, Almería."
                            functions="Formación en centros de trabajo (FCT)"
                        />
                    </AccordionFirstLevel>

                </SectionBox>
                <SectionBox title="Experiencia Laboral No Relacionada" >

                    <AccordionFirstLevel icon={<AgricultureIcon />} sector="Agraria" skills="Trabajo duro, Resistencia, Constancia, Determinación, . . . ">
                        <AccordionSecondLevel
                            job="Peón Agrícola"
                            time="Julio 2020 - Septiembre 2020"
                            ubication="Centro de investigación de semillas Nuhems. El Ejido, Almería."
                            functions="Labores agrícolas de los invernaderos externos e internos."
                        />
                        <AccordionSecondLevel
                            job="Peón Agrícola"
                            time="Noviembre 2018 - Enero 2019"
                            ubication="Centro de investigación de semillas Nuhems. El Ejido, Almería."
                            functions="Pesajes y control del desarrollo del pepino Squisito."
                        />
                    </AccordionFirstLevel>
                    <AccordionFirstLevel icon={<OutdoorGrillIcon />} sector="Hostelería" skills="Responsabilidad, Trabajo en equipo, Control del estrés, Organización y Limpieza, . . . ">
                        <AccordionSecondLevel
                            job="Repartidor"
                            time="Enero 2023 - Junio 2023"
                            ubication="Popeyes Louisiana Kitchen. CC El Gran plaza. Roquetas de Mar, Almería."
                            functions="Labores de reparto y preparación de pedidos. (Apoyo en cocina y limpieza.)"
                        />
                        <AccordionSecondLevel
                            job="Encargado de cocina"
                            time="Julio 2019 - Febrero 2020"
                            ubication="Cafe Bar Miguel, Vicar, Almería."
                            functions="Mantenimiento, preparación, elaboración y responsable del servicio."
                        />
                        <AccordionSecondLevel
                            job="Ayudante de cocina"
                            time="Enero 2019 - Mayo 2020"
                            ubication="Cafe Bar La Lonja, Roquetas de Mar, Almería."
                            functions="Encargado de la plancha."
                        />
                        <AccordionSecondLevel
                            job="Cocinero"
                            time="Noviembre 2017 - Agosto 2018"
                            ubication="Cafe Bar Miguel, Vicar, Almería."
                            functions="Preparación y elaboración de tapas."
                        />
                        <AccordionSecondLevel
                            job="Ayudante de cocina"
                            time="Julio 2017 - Septiembre 2017"
                            ubication="Hotel Zoraida Park, Roquetas de Mar, Almería."
                            functions="Encargado del Office y pinche del pasillo frío."
                        />
                    </AccordionFirstLevel>
                    <AccordionFirstLevel icon={<FactoryIcon />} sector="Industria" skills="Responsabilidad en la Seguridad, Apoyo con el Equipo, Control de la Fátiga, Trabajo Sistemático y Metódico, . . . ">
                        <AccordionSecondLevel
                            job="Mozo de almacén"
                            time="Noviembre 2023 - Marzo 2024"
                            ubication="Grupo Hefame. Calle El Nogal, 16, Huércal de Almería, Almería."
                            functions="Preparación y reposición de pedidos de productos farmacéuticos."
                        />
                        <AccordionSecondLevel
                            job="Operario industrial"
                            time="Julio 2023 - Octubre 2023"
                            ubication="Sotrafa, Grupo Armando Álvarez. Carretera Nacional 340, El Ejido, Almería."
                            functions="Preparación de pedidos de bovinas de plástico agrícola."
                        />
                    </AccordionFirstLevel>
                    <AccordionFirstLevel icon={<StoreIcon />} sector="Reponedor" skills="Atención al Cliente, Resolución de Problemas, División de tareas, Gestión del tiempo, Control de Cálidad, Control de Stock,  . . .">
                        <AccordionSecondLevel
                            job="Frutero"
                            time="Mayo 2022 - Noviembre 2022"
                            ubication="Hipermercado Carrefour. CC El Copo. El Ejido, Almería."
                            functions="Labores de reposición, atención al cliente y control de calidad del género (Apoyo en pescadería y charcutería)."
                        />
                        <AccordionSecondLevel
                            job="Frutero"
                            time="Julio 2021 - Septiembre 2021"
                            ubication="Hipermercado Carrefour. CC Rincón de la Victoria, Málaga."
                            functions="Labores de reposición, atención al cliente y control de calidad del género."
                        />
                    </AccordionFirstLevel>
                </SectionBox>

                <SectionBox title="Formación Académica, Cursos y Otras Acreditaciones" >
                    <AccordionFirstLevel icon={<WebIcon />} sector="DAW" skills="Desarrollo de Aplicaciones Web">
                        <List sx={{ padding: 0 }}>
                            <ListItem>
                                <ListItemText primary="Configurar y explotar sistemas informáticos, adaptando la configuración lógica del sistema según las necesidades de uso y los criterios establecidos." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Aplicar técnicas y procedimientos relacionados con la seguridad en sistemas, servicios y aplicaciones, cumpliendo el plan de seguridad." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Gestionar servidores de aplicaciones adaptando su configuración en cada caso para permitir el despliegue de aplicaciones web." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Gestionar bases de datos, interpretando su diseño lógico y verificando integridad, consistencia, seguridad y accesibilidad de los datos." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Desarrollar aplicaciones web con acceso a bases de datos utilizando lenguajes, objetos de acceso y herramientas de mapeo adecuados a las especificaciones." />
                            </ListItem>
                        </List>
                    </AccordionFirstLevel>
                    <AccordionFirstLevel icon={<ConnectedTvIcon />} sector="SMR" skills="Sistemas Microinformáticos y Redes">
                        <List sx={{ padding: 0 }}>
                            <ListItem>
                                <ListItemText primary="Instalar, configurar y mantener servicios multiusuario, aplicaciones y dispositivos compartidos en un entorno de red local." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Diagnosticar disfunciones en sistemas y redes mediante pruebas funcionales." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Determinar la logística asociada a las operaciones de instalación, configuración y mantenimiento de diversos sistemas microinformáticos." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Montar y configurar ordenadores y periféricos." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Replantear el cableado y la electrónica de redes locales en pequeños entornos y su conexión con redes de área extensa." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Instalar y configurar software básico y de aplicación, redes locales cableadas, inalámbricas o mixtas y conectadas a redes públicas." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Elaborar documentación técnica y administrativa del sistema, elaborar presupuestos y asesorar al cliente." />
                            </ListItem>
                        </List>
                    </AccordionFirstLevel>
                    <AccordionFirstLevel icon={<CoPresentIcon />} sector="Cursos de OpenWebinar" >
                        <List sx={{ padding: 0 }}>
                            <ListItem>
                                <ListItemText
                                    primary={[
                                        "JavaScript ",
                                        <CustomLink
                                            key="1"
                                            href="https://openwebinars.net/cert/KrgF"
                                        >
                                            {'Principiante'}
                                        </CustomLink>,
                                        " e ",
                                        <CustomLink
                                            key="2"
                                            href="https://openwebinars.net/cert/mkSP"
                                        >
                                            {'Intermedio'}
                                        </CustomLink>,
                                    ]
                                    }
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary={
                                        <CustomLink href="https://openwebinars.net/cert/wQPJE">
                                            {"HTML 5 y CSS 3"}
                                        </CustomLink>
                                    }
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary={
                                        <CustomLink href="https://openwebinars.net/cert/wQw2O">
                                            {"Maquetación Web con CSS 3"}
                                        </CustomLink>
                                    }
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary={
                                        <CustomLink href="https://openwebinars.net/cert/ODP92">
                                            {"Transformaciones, Transitiones y Animaciones con CSS 3"}
                                        </CustomLink>
                                    }
                                />
                            </ListItem>

                            <ListItem>
                                <ListItemText
                                    primary={
                                        <CustomLink href="https://openwebinars.net/cert/wQw2O">
                                            {"Responsive Web Design"}
                                        </CustomLink>
                                    }
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary={
                                        <CustomLink href="https://openwebinars.net/cert/PBdJq">
                                            {"FlexBox y CSS Grid"}
                                        </CustomLink>
                                    }
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary={
                                        <CustomLink href="https://openwebinars.net/cert/wQw2O">
                                            {"Bootstrap 4: Maquetación Resposive y Layout"}
                                        </CustomLink>
                                    }
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary={
                                        <CustomLink href="https://openwebinars.net/cert/1pLp9">
                                            {"Servidor Web con Apache 2.4"}
                                        </CustomLink>
                                    }
                                />
                            </ListItem>
                        </List>
                    </AccordionFirstLevel>
                    <AccordionFirstLevel icon={<LaunchIcon />} sector="Otros Cursos">
                        <List sx={{ padding: 0 }}>
                            <ListItem>
                                <ListItemText primary="Titulación de Socorrista" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Titulación de Primeros Auxilios" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Titulación de Reconocimiento, Uso y Manejo del Equipo de Oxigenoterapia" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Titulación de Manipulador de Alimentos" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Certificado de Homologación en Operador de Carretillas de Manutención de hasta 10.000 KG" />
                            </ListItem>
                        </List>
                    </AccordionFirstLevel>
                </SectionBox>
                <SectionBox title="Tecnologías" >
                    <Box
                        component={'section'}
                        sx={{
                            alignSelf: 'center',
                            display: 'flex',
                            placeContent: 'center',
                            flexWrap: "wrap",
                            gap: 5
                        }}
                    >
                        <CardTechnology
                            url="https://reactjs.org/"
                            image="/react.png"
                            title="React"
                            description="Es una biblioteca de JavaScript para crear interfaces de usuario"
                        />
                        <CardTechnology
                            url="https://laravel.com/"
                            image="/laravel.png"
                            title="Laravel"
                            description="Es un framework de código abierto de PHP para el desarrollo de aplicaciones web"
                        />
                        <CardTechnology
                            url="https://www.java.com/es/"
                            image="/java.png"
                            title="Java"
                            description="Es un lenguaje de programación de propósito general que se adapta especialmente a la programación orientada a objetos"
                        />
                        <CardTechnology
                            url="https://www.javascript.com/"
                            image="/javascript.png"
                            title="JavaScript"
                            description="Es un lenguaje de programación que se utiliza para crear contenido interactivo en páginas web"
                        />
                        <CardTechnology
                            url="https://www.php.net/"
                            image="/php.png"
                            title="PHP"
                            description="Es un lenguaje de programación de uso general que se adapta especialmente al desarrollo web"
                        />
                        <CardTechnology
                            url="https://developer.mozilla.org/en-US/docs/Web/HTML"
                            image="/html-5.png"
                            title="HTML 5"
                            description="Es el código que se utiliza para estructurar y desplegar una página web y sus contenidos"
                        />
                        <CardTechnology
                            url="https://developer.mozilla.org/en-US/docs/Web/CSS"
                            image="/css-3.png"
                            title="CSS 3"
                            description="Es el código que se utiliza para dar estilo a una página web y sus contenidos"
                        />
                        <CardTechnology
                            url="https://openjfx.io/"
                            image="/javafx.png"
                            title="JavaFX"
                            description="Es una biblioteca de software de gráficos y multimedia que permite a los desarrolladores de Java crear aplicaciones de escritorio con una interfaz gráfica de usuario rica y moderna"
                        />
                        <CardTechnology
                            url="https://www.json.org/json-en.html"
                            image="/json.png"
                            title="Json"
                            description="Es un formato ligero de intercambio de datos entre un servidor y un cliente o entre dos servidores"
                        />
                        <CardTechnology
                            url="https://www.mysql.com/"
                            image="/mysql.png"
                            title="MySQL"
                            description="Es un sistema de gestión de bases de datos relacional, este sistema se utiliza para almacenar y gestionar los datos de un sitio web o aplicación"
                        />
                        <CardTechnology
                            url="https://nodejs.org/"
                            image="/nodejs.png"
                            title="Node.js"
                            description="Es un entorno de ejecución para JavaScript que permite ejecutar código JavaScript en el servidor"
                        />
                        <CardTechnology
                            url="https://redux.js.org/"
                            image="/redux.png"
                            title="React Redux"
                            description="Es una biblioteca de JavaScript para manejar el estado de la aplicación"
                        />
                        <CardTechnology
                            url="https://reactrouter.com/"
                            image="/react-router.png"
                            title="React Route"
                            description="Es una biblioteca de JavaScript para manejar las rutas de la aplicación"
                        />
                        <CardTechnology
                            url="https://getbootstrap.com/"
                            image="/bootstrap.png"
                            title="Bootstrap 4"
                            description="Es un framework de código abierto para el desarrollo de aplicaciones web"
                        />
                        <CardTechnology
                            url="https://git-scm.com/"
                            image="/git.png"
                            title="Git"
                            description="Es un sistema de control de versiones distribuido"
                        />
                        <CardTechnology
                            url="https://github.com/"
                            image="/github.png"
                            title="GitHub"
                            description="Es una plataforma de desarrollo colaborativo de software para alojar proyectos utilizando el sistema de control de versiones Git"
                        />
                        <CardTechnology
                            url="https://code.visualstudio.com/"
                            image="/visual-studio-code.png"
                            title="Visual Studio Code"
                            description="Es un editor de código fuente desarrollado por Microsoft para Windows, Linux y macOS"
                        />
                        <CardTechnology
                            url="https://www.linux.org/"
                            image="/linux.png"
                            title="Linux"
                            description="Es un sistema operativo de código abierto, basado en Unix, que se utiliza en servidores y dispositivos embebidos gracias a su estabilidad y seguridad"
                        />
                        <CardTechnology
                            url="https://www.microsoft.com/es-es/windows/"
                            image="/windows.png"
                            title="Windows"
                            description="Es un sistema operativo de Microsoft, el más utilizado en el mundo gracias a su facilidad de uso y compatibilidad con la mayoría de los programas"
                        />
                    </Box>
                </SectionBox>
            </MyMain >
            <MyFooter />
        </>
    );
}