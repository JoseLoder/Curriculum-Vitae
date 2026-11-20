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

import { Box, List, ListItem, ListItemText } from "@mui/material";
import { CardTechnology } from "../components/CardTechnology";
import { CustomLink } from "../components/CustomLink";


// Ordenadas de más a menos relevante para mi perfil actual
const technologies = [
    { url: "https://developer.mozilla.org/es/docs/Web/JavaScript", image: "/javascript.png", title: "JavaScript", description: "Lenguaje principal con el que trabajo, tanto en el navegador como en el servidor" },
    { url: "https://www.typescriptlang.org/", image: "/typescript.svg", title: "TypeScript", description: "JavaScript con tipado estático; lo uso para compartir contratos de datos entre API y frontend" },
    { url: "https://nodejs.org/", image: "/nodejs.png", title: "Node.js", description: "Entorno de ejecución para JavaScript en el servidor" },
    { url: "https://expressjs.com/", image: "/express.svg", title: "Express", description: "Framework minimalista de Node.js para construir APIs REST" },
    { url: "https://react.dev/", image: "/react.png", title: "React", description: "Biblioteca de JavaScript para crear interfaces de usuario basadas en componentes" },
    { url: "https://www.postgresql.org/", image: "/postgresql.svg", title: "PostgreSQL", description: "Base de datos relacional de código abierto" },
    { url: "https://www.mysql.com/", image: "/mysql.png", title: "MySQL", description: "Sistema de gestión de bases de datos relacional" },
    { url: "https://www.docker.com/", image: "/docker.svg", title: "Docker", description: "Contenedores para levantar base de datos, API y frontend con Docker Compose" },
    { url: "https://reactrouter.com/", image: "/react-router.png", title: "React Router", description: "Biblioteca para gestionar las rutas de una aplicación React" },
    { url: "https://redux.js.org/", image: "/redux.png", title: "Redux", description: "Biblioteca para gestionar el estado global de la aplicación" },
    { url: "https://git-scm.com/", image: "/git.png", title: "Git", description: "Sistema de control de versiones distribuido" },
    { url: "https://github.com/", image: "/github.png", title: "GitHub", description: "Plataforma para alojar repositorios, revisar código y automatizar despliegues" },
    { url: "https://www.linux.org/", image: "/linux.png", title: "Linux", description: "Sistema operativo de código abierto, estándar en servidores" },
    { url: "https://developer.mozilla.org/es/docs/Web/HTML", image: "/html-5.png", title: "HTML 5", description: "Lenguaje para estructurar el contenido de una página web" },
    { url: "https://developer.mozilla.org/es/docs/Web/CSS", image: "/css-3.png", title: "CSS 3", description: "Lenguaje para dar estilo y maquetar una página web" },
    { url: "https://getbootstrap.com/", image: "/bootstrap.png", title: "Bootstrap", description: "Framework CSS para maquetación responsive" },
    { url: "https://www.json.org/json-es.html", image: "/json.png", title: "JSON", description: "Formato ligero de intercambio de datos entre cliente y servidor" },
    { url: "https://www.php.net/", image: "/php.png", title: "PHP", description: "Lenguaje de servidor orientado al desarrollo web" },
    { url: "https://laravel.com/", image: "/laravel.png", title: "Laravel", description: "Framework de PHP para el desarrollo de aplicaciones web" },
    { url: "https://www.java.com/es/", image: "/java.png", title: "Java", description: "Lenguaje de propósito general orientado a objetos" },
    { url: "https://openjfx.io/", image: "/javafx.png", title: "JavaFX", description: "Biblioteca de Java para crear aplicaciones de escritorio con interfaz gráfica" },
];

export function Experience() {
    return (
        <>
            <MyHeader />
            <HGroup firstTitle="Experiencia" secondTitle="Mi recorrido" aditionalText="profesional y académico." />
            <MyMain>
                <SectionBox title="Experiencia Laboral Relacionada" >
                    <AccordionFirstLevel icon={<WebIcon />} sector="DAW" skills="Desarrollo de Aplicaciones Web">
<AccordionSecondLevel
    job="Desarrollador Web Full-Stack · Proyecto de Fin de Grado"
    time="Febrero 2025 - Julio 2025"
    ubication="Proyecto personal · En remoto · Málaga, Andalucía, España"
    functions="Diseño y desarrollo completo de Pawn-to-Pawn, una aplicación de gestión de pedidos y producción (máquinas, materiales y productos) con acceso por roles."
    description={<>
        <p>Descripción detallada de las funciones realizadas:</p>
        <ul>
            <li>
                <strong>Arquitectura monorepo en TypeScript:</strong> separé backend, frontend y un paquete
                de <strong>tipos compartidos</strong> (<code>@pawn-to-pawn/shared</code>) con npm workspaces, de modo
                que la API y la interfaz usan los mismos contratos de datos y los errores se detectan al compilar.
            </li>
            <li>
                <strong>API REST con Node.js y Express:</strong> arquitectura en capas (rutas → controladores → modelos)
                para 5 entidades, validación de cada petición con <strong>Zod</strong> y gestión centralizada de errores
                con clases propias.
            </li>
            <li>
                <strong>Autenticación y seguridad:</strong> login con <strong>JWT en cookies HTTP-only</strong>,
                refresh tokens guardados en base de datos con renovación automática de sesión, contraseñas cifradas
                con bcrypt y middlewares de autorización para <strong>3 roles</strong> (cliente, operario, administrador).
            </li>
            <li>
                <strong>Base de datos PostgreSQL:</strong> diseño del modelo entidad-relación y relacional, consultas
                parametrizadas con <code>pg</code> y connection pooling sobre Supabase.
            </li>
            <li>
                <strong>Frontend con React 19:</strong> enrutado dinámico según el rol del usuario con React Router,
                rutas protegidas, gestión del estado del servidor y caché con <strong>TanStack Query</strong> y
                componentes reutilizables (tablas, formularios) con styled-components y Radix UI.
            </li>
            <li>
                <strong>Flujo de negocio completo:</strong> los clientes crean pedidos, los operarios los asignan y
                los pasan por <em>pendiente → preparación → completado</em> y el administrador gestiona usuarios,
                máquinas, materiales y productos.
            </li>
            <li>
                <strong>DevOps:</strong> dockericé el proyecto con <strong>Docker Compose</strong> (PostgreSQL, API y
                frontend), automaticé las tareas con un <strong>Makefile</strong> (setup, logs, backups y restauración
                de la base de datos) y desplegué en <strong>Vercel</strong>.
            </li>
            <li>
                <strong>Análisis y documentación:</strong> diagramas de casos de uso, entidad-relación y modelo de
                negocio, y documentación técnica del proyecto.
            </li>
        </ul>
        <p>
            <strong>Stack:</strong> TypeScript · React · Express · PostgreSQL · Zod · JWT · TanStack Query · styled-components · Docker
        </p>
        <p>
            <CustomLink href="https://github.com/JoseLoder/Pawn-to-Pawn" target="_blank" rel="noreferrer">Ver código en GitHub →</CustomLink>
        </p>
    </>}
/>

                        <AccordionSecondLevel
                            job="Desarrollador de Front-End · Jaraxa Software, SL"
                            time="Febrero 2025 - Junio 2025"
                            ubication="Jaraxa Software, SL · Contrato de prácticas · Málaga, Andalucía, España · Híbrido"
                            functions="Desarrollo front-end enfocado en la creación de interfaces de usuario intuitivas y funcionales para aplicaciones web."
                            description={<>
                                <p>Descripción detallada de las funciones realizadas:</p>
                                <ul>
                                    <li>Trabajo como desarrollador frontend enfocado en la creación de interfaces de usuario intuitivas y funcionales para aplicaciones web.</li>
                                    <li>Me encargo del desarrollo front-end utilizando lenguajes como TypeScript y React para diseñar y programar componentes reutilizables.</li>
                                    <li>Consumo la API REST del backend para integrar los datos de manera eficiente en las interfaces.</li>
                                    <li>Colaboro estrechamente con el equipo de diseño para maquetar y prototipar las interfaces siguiendo los patrones y especificaciones de usabilidad.</li>
                                    <li>Aplico mejores prácticas de desarrollo frontend para garantizar la mantenibilidad y escalabilidad del código.</li>
                                    <li>Participo en la optimización de la experiencia de usuario (UX) y la interfaz de usuario (UI).</li>
                                </ul>
                            </>}
                        />
                        <AccordionSecondLevel
                            job="Desarrollador Web · Desarrollos personales"
                            time="Marzo 2024 - Febrero 2025"
                            ubication="Desarrollos personales · En remoto · Málaga, Andalucía, España"
                            functions="Desarrollo autodidacta con React y el planteamiento de mi proyecto final."
                            description={<>
                                <p>Descripción detallada de las funciones realizadas:</p>
                                <ul>
                                    <li>He estado trabajando con React de manera autodidacta, profundizando en el desarrollo de aplicaciones web modernas.</li>
                                    <li>He realizado multitud de proyectos durante este período, siendo este curriculum vitae uno de los ejemplos más destacados.</li>
                                    <li>Me centré en el diseño y arquitectura de bases de datos para mi proyecto final.</li>
                                    <li>Desarrollé la lógica de negocio del proyecto industrial enfocado en la transformación #Industria-4.0 de mi proyecto final.</li>
                                    <li>Apliqué metodologías de desarrollo ágil y patrones de diseño para garantizar código escalable y mantenible.</li>
                                    <li>Experimenté con diferentes tecnologías del ecosistema React para ampliar mis conocimientos técnicos.</li>
                                </ul>
                            </>}
                        />
                    </AccordionFirstLevel>
                    <AccordionFirstLevel icon={<ConnectedTvIcon />} sector="SMR" skills="Soldadura de Componentes, Configuración de Impresoras y Reparaciones, Leer Documentación Técnica, . . .">
                        <AccordionSecondLevel
                            job="Técnico SMR · Neotronics"
                            time="Octubre 2021 - Enero 2022"
                            ubication="Neotronics. Calle de la Sierra de Grazalema. Viator, Almería."
                            functions="Formación en centros de trabajo (FCT)"
                            description={<>
                                <p>Descripción detallada de las funciones realizadas:</p>
                                <ul>
                                    <li>Asistencia técnica en la configuración de dispositivos.</li>
                                    <li>Reparación de componentes electrónicos.</li>
                                    <li>Documentación de procesos y procedimientos.</li>
                                </ul>
                            </>}
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
                    <AccordionFirstLevel icon={<FactoryIcon />} sector="Industria" skills="Responsabilidad en la Seguridad, Apoyo con el Equipo, Control de la Fatiga, Trabajo Sistemático y Metódico, . . . ">
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
                            functions="Preparación de pedidos de bobinas de plástico agrícola."
                        />
                    </AccordionFirstLevel>
                    <AccordionFirstLevel icon={<StoreIcon />} sector="Reponedor" skills="Atención al Cliente, Resolución de Problemas, División de tareas, Gestión del tiempo, Control de Calidad, Control de Stock,  . . .">
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

                <SectionBox title="Formación Académica y Cursos" >
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
                                            {"Transformaciones, Transiciones y Animaciones con CSS 3"}
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
                                            {"Bootstrap 4: Maquetación Responsive y Layout"}
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
                        {technologies.map((tech) => (
                            <CardTechnology key={tech.title} {...tech} />
                        ))}
                    </Box>
                </SectionBox>
            </MyMain >
            <MyFooter />
        </>
    );
}