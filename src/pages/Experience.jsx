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
            <HGroup firstTitle="PERFIL PROFESIONAL" secondTitle="Experiencia · Formación · Competencias" aditionalText="Full-Stack Developer | Software Engineer | Tech Lead" />
            <MyMain>
                <SectionBox title="💼 Experiencia Profesional en Tecnología" >
                    <AccordionFirstLevel icon={<WebIcon />} sector="Full-Stack Development" skills="React · TypeScript · Node.js · APIs REST · Arquitectura de Software · Microservicios">
                        <AccordionSecondLevel
                            job="Senior Full-Stack Developer & Software Architect"
                            time="Junio 2025 - Actualidad"
                            ubication="Freelance · Remoto · Málaga, España"
                            functions="Arquitectura de software end-to-end para aplicaciones empresariales, especialización en Industria 4.0 y transformación digital."
                            description={<>
                                <p><strong>Logros y responsabilidades clave:</strong></p>
                                <ul>
                                    <li><strong>Arquitectura de Software:</strong> Diseño e implementación de arquitecturas escalables para aplicaciones web complejas utilizando patrones de microservicios.</li>
                                    <li><strong>Liderazgo Técnico:</strong> Definición de estándares de desarrollo, APIs RESTful y documentación técnica siguiendo metodologías SDLC robustas.</li>
                                    <li><strong>Stack Tecnológico:</strong> React, TypeScript, Node.js, Express.js, PostgreSQL, con enfoque en performance y escalabilidad.</li>
                                    <li><strong>DevOps & Cloud:</strong> Implementación de CI/CD, containerización y despliegue en cloud para aplicaciones de alta disponibilidad.</li>
                                    <li><strong>Especialización Industrial:</strong> Desarrollo de soluciones innovadoras para la transformación digital en el sector manufacturero (Industria 4.0).</li>
                                    <li><strong>UX/UI Focus:</strong> Creación de interfaces responsive y experiencias de usuario optimizadas siguiendo principios de diseño centrado en el usuario.</li>
                                </ul>
                            </>}
                        />
                        <AccordionSecondLevel
                            job="Frontend Developer"
                            time="Febrero 2025 - Junio 2025"
                            ubication="Jaraxa Software, SL · Prácticas Profesionales · Málaga, España · Híbrido"
                            functions="Desarrollo frontend especializado en React y TypeScript para aplicaciones web empresariales."
                            description={<>
                                <p><strong>Contribuciones y logros destacados:</strong></p>
                                <ul>
                                    <li><strong>Desarrollo Frontend:</strong> Implementación de componentes React reutilizables con TypeScript, garantizando type safety y mantenibilidad del código.</li>
                                    <li><strong>Integración de APIs:</strong> Consumo eficiente de APIs REST del backend, implementando estados de carga, error handling y optimización de performance.</li>
                                    <li><strong>Colaboración Cross-funcional:</strong> Trabajo estrecho con equipos de diseño y backend para entregar features siguiendo metodologías ágiles.</li>
                                    <li><strong>Mejores Prácticas:</strong> Aplicación de principios SOLID, clean code y testing para garantizar calidad y escalabilidad del software.</li>
                                    <li><strong>UX/UI Optimization:</strong> Participación activa en la mejora de experiencia de usuario y optimización de interfaces.</li>
                                </ul>
                            </>}
                        />
                        <AccordionSecondLevel
                            job="Self-taught Full-Stack Developer"
                            time="Marzo 2024 - Febrero 2025"
                            ubication="Desarrollo Independiente · Remoto · Málaga, España"
                            functions="Formación autodidacta intensiva en tecnologías web modernas y desarrollo de proyectos personales."
                            description={<>
                                <p><strong>Proyectos y logros de aprendizaje:</strong></p>
                                <ul>
                                    <li><strong>Mastery de React:</strong> Profundización en el ecosistema React, hooks avanzados, Context API y patterns de arquitectura.</li>
                                    <li><strong>Portfolio Development:</strong> Creación de proyectos reales incluyendo este CV interactivo como demostración de habilidades técnicas.</li>
                                    <li><strong>Database Design:</strong> Diseño y modelado de bases de datos relacionales para aplicaciones de gran escala.</li>
                                    <li><strong>Metodologías Ágiles:</strong> Aplicación de Scrum, patrones de diseño y principios de clean architecture.</li>
                                    <li><strong>Continuous Learning:</strong> Constante actualización en tecnologías emergentes y mejores prácticas de la industria.</li>
                                </ul>
                            </>}
                        />
                    </AccordionFirstLevel>
                    <AccordionFirstLevel icon={<ConnectedTvIcon />} sector="Sistemas & Hardware" skills="Configuración de Sistemas · Reparación de Hardware · Documentación Técnica · Soporte IT">
                        <AccordionSecondLevel
                            job="IT Support Technician"
                            time="Octubre 2021 - Enero 2022"
                            ubication="Neotronics · Viator, Almería"
                            functions="Prácticas profesionales en soporte técnico y mantenimiento de sistemas informáticos."
                            description={<>
                                <p><strong>Competencias técnicas desarrolladas:</strong></p>
                                <ul>
                                    <li><strong>Soporte Técnico:</strong> Configuración y troubleshooting de dispositivos y sistemas informáticos.</li>
                                    <li><strong>Hardware Repair:</strong> Diagnóstico y reparación de componentes electrónicos y equipos informáticos.</li>
                                    <li><strong>Documentation:</strong> Elaboración de documentación técnica y procedimientos de mantenimiento.</li>
                                </ul>
                            </>}
                        />
                    </AccordionFirstLevel>

                </SectionBox>
                <SectionBox title="🏢 Experiencia Laboral Complementaria" >

                    <AccordionFirstLevel icon={<FactoryIcon />} sector="Logística & Operaciones" skills="Gestión de Inventario · Control de Calidad · Optimización de Procesos · Seguridad Industrial">
                        <AccordionSecondLevel
                            job="Warehouse Operations Specialist"
                            time="Noviembre 2023 - Marzo 2024"
                            ubication="Grupo Hefame · Huércal de Almería"
                            functions="Gestión de inventario farmacéutico con enfoque en precisión y cumplimiento normativo."
                        />
                        <AccordionSecondLevel
                            job="Industrial Operations Technician"
                            time="Julio 2023 - Octubre 2023"
                            ubication="Sotrafa, Grupo Armando Álvarez · El Ejido, Almería"
                            functions="Optimización de procesos de producción y control de calidad en líneas industriales."
                        />
                    </AccordionFirstLevel>
                    <AccordionFirstLevel icon={<StoreIcon />} sector="Customer Experience & Retail" skills="Customer Service · Quality Control · Time Management · Process Optimization">
                        <AccordionSecondLevel
                            job="Customer Experience Associate"
                            time="Mayo 2022 - Noviembre 2022"
                            ubication="Carrefour · El Ejido, Almería"
                            functions="Atención al cliente, control de calidad de productos y optimización de procesos de venta."
                        />
                        <AccordionSecondLevel
                            job="Sales & Customer Service Representative"
                            time="Julio 2021 - Septiembre 2021"
                            ubication="Carrefour · Rincón de la Victoria, Málaga"
                            functions="Gestión de punto de venta y atención especializada al cliente."
                        />
                    </AccordionFirstLevel>
                    <AccordionFirstLevel icon={<OutdoorGrillIcon />} sector="Hospitality & Team Leadership" skills="Team Leadership · Stress Management · Operations Management · Customer Relations">
                        <AccordionSecondLevel
                            job="Delivery Operations Coordinator"
                            time="Enero 2023 - Junio 2023"
                            ubication="Popeyes Louisiana Kitchen · Roquetas de Mar, Almería"
                            functions="Coordinación de entregas y optimización de operaciones de cocina."
                        />
                        <AccordionSecondLevel
                            job="Kitchen Manager & Team Lead"
                            time="Julio 2019 - Febrero 2020"
                            ubication="Cafe Bar Miguel · Vícar, Almería"
                            functions="Liderazgo de equipo, gestión de operaciones y responsabilidad completa del servicio."
                        />
                    </AccordionFirstLevel>
                    <AccordionFirstLevel icon={<AgricultureIcon />} sector="Research & Development" skills="Data Collection · Process Analysis · Research Methodology · Precision Work">
                        <AccordionSecondLevel
                            job="Agricultural Research Assistant"
                            time="Julio 2020 - Septiembre 2020"
                            ubication="Centro de Investigación Nuhems · El Ejido, Almería"
                            functions="Asistencia en investigación agrícola y gestión de invernaderos experimentales."
                        />
                        <AccordionSecondLevel
                            job="Data Collection Specialist"
                            time="Noviembre 2018 - Enero 2019"
                            ubication="Centro de Investigación Nuhems · El Ejido, Almería"
                            functions="Recolección y análisis de datos para desarrollo de nuevas variedades de cultivos."
                        />
                    </AccordionFirstLevel>
                </SectionBox>

                <SectionBox title="🎓 Formación Técnica y Certificaciones" >
                    <AccordionFirstLevel icon={<WebIcon />} sector="Full-Stack Development" skills="Desarrollo de Aplicaciones Web · Arquitectura de Software · DevOps">
                        <List sx={{ padding: 0 }}>
                            <ListItem>
                                <ListItemText primary="⚙️ Administración de Sistemas: Configuración y optimización de sistemas informáticos para desarrollo y producción." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="🔒 Ciberseguridad: Implementación de medidas de seguridad en aplicaciones web y gestión de vulnerabilidades." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="🌐 Infraestructura Web: Gestión de servidores de aplicaciones, deployment y configuración de entornos de desarrollo." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="🗄️ Database Management: Diseño, implementación y optimización de bases de datos relacionales." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="💻 Full-Stack Development: Desarrollo end-to-end de aplicaciones web con integración de APIs y arquitecturas modernas." />
                            </ListItem>
                        </List>
                    </AccordionFirstLevel>
                    <AccordionFirstLevel icon={<ConnectedTvIcon />} sector="IT Infrastructure" skills="Redes · Hardware · Soporte Técnico · Sistemas Operativos">
                        <List sx={{ padding: 0 }}>
                            <ListItem>
                                <ListItemText primary="🖧 Network Administration: Configuración de redes locales, troubleshooting y optimización de conectividad." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="🔧 Hardware Diagnostics: Diagnóstico avanzado de sistemas y resolución de problemas de hardware." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="📋 Project Management: Planificación de implementaciones técnicas y gestión de recursos IT." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="🖥️ Systems Integration: Montaje, configuración e integración de sistemas microinformáticos empresariales." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="🌐 Network Infrastructure: Diseño e implementación de infraestructuras de red para entornos empresariales." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="📱 Technical Consulting: Elaboración de propuestas técnicas y asesoramiento especializado a clientes." />
                            </ListItem>
                        </List>
                    </AccordionFirstLevel>
                    <AccordionFirstLevel icon={<CoPresentIcon />} sector="Certificaciones Profesionales" >
                        <List sx={{ padding: 0 }}>
                            <ListItem>
                                <ListItemText
                                    primary={[
                                        "🟨 JavaScript - Certificación Completa: ",
                                        <CustomLink
                                            key="1"
                                            href="https://openwebinars.net/cert/KrgF"
                                        >
                                            {'Nivel Fundamentals'}
                                        </CustomLink>,
                                        " → ",
                                        <CustomLink
                                            key="2"
                                            href="https://openwebinars.net/cert/mkSP"
                                        >
                                            {'Nivel Intermediate'}
                                        </CustomLink>,
                                    ]
                                    }
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary={[
                                        "🎨 Frontend Fundamentals: ",
                                        <CustomLink key="html-css" href="https://openwebinars.net/cert/wQPJE">
                                            {"HTML5 & CSS3 Certification"}
                                        </CustomLink>
                                    ]}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary={[
                                        "📱 Responsive Design: ",
                                        <CustomLink key="responsive" href="https://openwebinars.net/cert/wQw2O">
                                            {"Advanced CSS3 Layout & Animation"}
                                        </CustomLink>
                                    ]}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary={[
                                        "🎬 CSS Animation: ",
                                        <CustomLink key="animations" href="https://openwebinars.net/cert/ODP92">
                                            {"CSS3 Transforms, Transitions & Animations"}
                                        </CustomLink>
                                    ]}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary={[
                                        "📐 Modern Layout: ",
                                        <CustomLink key="flexbox" href="https://openwebinars.net/cert/PBdJq">
                                            {"Flexbox & CSS Grid Mastery"}
                                        </CustomLink>
                                    ]}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary={[
                                        "🎯 Framework Proficiency: ",
                                        <CustomLink key="bootstrap" href="https://openwebinars.net/cert/wQw2O">
                                            {"Bootstrap 4 - Responsive Framework"}
                                        </CustomLink>
                                    ]}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary={[
                                        "🌐 Server Administration: ",
                                        <CustomLink key="apache" href="https://openwebinars.net/cert/1pLp9">
                                            {"Apache 2.4 Web Server Configuration"}
                                        </CustomLink>
                                    ]}
                                />
                            </ListItem>
                        </List>
                    </AccordionFirstLevel>
                    <AccordionFirstLevel icon={<LaunchIcon />} sector="Certificaciones Complementarias">
                        <List sx={{ padding: 0 }}>
                            <ListItem>
                                <ListItemText primary="🏊‍♂️ Lifeguard Certification - Gestión de emergencias y liderazgo bajo presión" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="🚑 First Aid Certification - Respuesta rápida y toma de decisiones críticas" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="🫁 Emergency Oxygen Administration - Procedimientos técnicos especializados" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="🍽️ Food Safety Handler - Cumplimiento normativo y control de calidad" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="🚛 Forklift Operator (10T) - Operación de maquinaria pesada y seguridad industrial" />
                            </ListItem>
                        </List>
                    </AccordionFirstLevel>
                </SectionBox>
                <SectionBox title="💻 Stack Tecnológico y Herramientas" >
                    <Box
                        component={'section'}
                        sx={{
                            alignSelf: 'center',
                            display: 'flex',
                            placeContent: 'center',
                            flexWrap: "wrap",
                            gap: 3
                        }}
                    >
                        {/* 🔥 TECNOLOGÍAS CORE ACTUALES */}
                        <CardTechnology
                            url="https://reactjs.org/"
                            image="/react.png"
                            title="React"
                            description="Biblioteca JavaScript líder para interfaces de usuario modernas y aplicaciones SPA de alto rendimiento"
                            experience="2+ años de experiencia profesional desarrollando aplicaciones escalables en Jaraxa Software, SL con arquitectura de componentes reutilizables."
                        />
                        <CardTechnology
                            url="https://www.typescriptlang.org/"
                            image="/typescript.png"
                            title="TypeScript"
                            description="Superconjunto tipado de JavaScript que reduce errores en producción y mejora la mantenibilidad del código en proyectos empresariales"
                            experience="Experiencia profesional en entorno empresarial en Jaraxa Software, SL desarrollando aplicaciones React complejas con tipado avanzado."
                        />
                        <CardTechnology
                            url="https://nodejs.org/"
                            image="/nodejs.png"
                            title="Node.js"
                            description="Runtime de JavaScript de alto rendimiento para desarrollo backend escalable y aplicaciones en tiempo real"
                            experience="2+ años desarrollando APIs REST empresariales y microservicios. Especializado en arquitecturas asíncronas para alta concurrencia."
                        />
                        <CardTechnology
                            url="https://www.postgresql.org/"
                            image="/postgresql.png"
                            title="PostgreSQL"
                            description="Sistema de gestión de bases de datos objeto-relacional avanzado, líder en enterprise para aplicaciones críticas de alta performance"
                            experience="Base de datos de elección en proyectos actuales de Industria 4.0. Especializado en queries complejas, indexación avanzada y arquitecturas distribuidas."
                        />
                        <CardTechnology
                            url="https://expressjs.com/"
                            image="/express.png"
                            title="Express.js"
                            description="Framework web minimalista y de alto rendimiento para Node.js, estándar de la industria para APIs REST empresariales"
                            experience="Framework de elección para desarrollo rápido de MVPs y prototipos. Experiencia en arquitectura de APIs RESTful y middleware personalizado."
                        />

                        {/* 🚀 HERRAMIENTAS PROFESIONALES AVANZADAS */}
                        <CardTechnology
                            url="https://tanstack.com/query/latest"
                            image="/tanstack-query.png"
                            title="TanStack Query"
                            description="Biblioteca avanzada de gestión de estado servidor para React con caché inteligente, sincronización automática y optimización de rendimiento"
                            experience="Implementación moderna en aplicaciones React para optimización de UX. Especializado en cache strategies y React Suspense."
                        />
                        <CardTechnology
                            url="https://redux.js.org/"
                            image="/redux.png"
                            title="React Redux"
                            description="Biblioteca predictible de gestión de estado global para aplicaciones JavaScript complejas con arquitectura flux"
                            experience="Implementación profesional con TypeScript en Jaraxa Software, SL. Especializado en Redux Toolkit y patterns avanzados."
                        />
                        <CardTechnology
                            url="https://zod.dev/"
                            image="/zod.png"
                            title="Zod"
                            description="Biblioteca líder de validación TypeScript-first que garantiza la integridad de datos y reduce errores en tiempo de ejecución"
                            experience="Implementación profesional en Jaraxa Software, SL para validación robusta de formularios y APIs con esquemas complejos."
                        />
                        <CardTechnology
                            url="https://styled-components.com/"
                            image="/styled-components.png"
                            title="Styled Components"
                            description="Solución CSS-in-JS profesional para React que permite componentes estilizados dinámicos con theming avanzado y tipado"
                            experience="Adopción profesional desde Jaraxa Software, SL. Especializado en sistemas de theming y componentes polimórficos."
                        />

                        {/* 💼 LENGUAJES FUNDAMENTALES */}
                        <CardTechnology
                            url="https://www.javascript.com/"
                            image="/javascript.png"
                            title="JavaScript"
                            description="Lenguaje versátil y esencial para desarrollo full-stack moderno, desde frontend interactivo hasta backend con Node.js"
                            experience="3+ años de experiencia profesional. Especializado en ES6+, programación asíncrona y desarrollo en equipos multidisciplinarios."
                        />
                        <CardTechnology
                            url="https://www.java.com/es/"
                            image="/java.png"
                            title="Java"
                            description="Lenguaje enterprise orientado a objetos, fundamental para sistemas distribuidos y aplicaciones de gran escala"
                            experience="3+ años de experiencia. Actualmente mentor técnico impartiendo formación especializada en Java y JavaFX a nuevos desarrolladores."
                        />
                        <CardTechnology
                            url="https://laravel.com/"
                            image="/laravel.png"
                            title="Laravel"
                            description="Framework PHP empresarial robusto para desarrollo de aplicaciones web escalables con arquitectura MVC"
                            experience="Desarrollo avanzado con implementación completa de sistemas CRUD, autenticación y APIs RESTful certificado bajo evaluación técnica."
                        />
                        <CardTechnology
                            url="https://www.php.net/"
                            image="/php.png"
                            title="PHP"
                            description="Lenguaje de programación de uso general especializado en desarrollo web dinámico y backend robusto"
                            experience="Desarrollo desde segundo curso de DAW con evaluación técnica bajo presión. Primer contacto exitoso con desarrollo backend."
                        />

                        {/* 🎨 FRONTEND & UI/UX */}
                        <CardTechnology
                            url="https://developer.mozilla.org/en-US/docs/Web/CSS"
                            image="/css-3.png"
                            title="CSS 3"
                            description="Tecnología de estilos avanzada con Flexbox, Grid, animaciones y responsive design para experiencias visuales modernas"
                            experience="Dominio avanzado de CSS moderno con Flexbox, CSS Grid y animations. Especializado en metodologías BEM y mobile-first approach."
                        />
                        <CardTechnology
                            url="https://developer.mozilla.org/en-US/docs/Web/HTML"
                            image="/html-5.png"
                            title="HTML 5"
                            description="Lenguaje de marcado semántico estándar para estructuración web moderna con APIs avanzadas y accesibilidad"
                            experience="Base sólida en HTML semántico, accessibility standards y SEO optimization. Especializado en formularios avanzados y PWAs."
                        />
                        <CardTechnology
                            url="https://reactrouter.com/"
                            image="/react-router.png"
                            title="React Router"
                            description="Biblioteca estándar de enrutamiento declarativo para aplicaciones React SPA con navegación dinámica y code-splitting"
                            experience="Implementación en aplicaciones SPA complejas con rutas protegidas, lazy loading y optimización de bundle splitting."
                        />
                        <CardTechnology
                            url="https://getbootstrap.com/"
                            image="/bootstrap.png"
                            title="Bootstrap"
                            description="Framework CSS responsive líder de la industria para desarrollo rápido de interfaces web móviles y desktop"
                            experience="Framework fundamental en mi formación técnica para prototipado rápido y maquetación responsive profesional."
                        />

                        {/* 🛠️ HERRAMIENTAS & FRAMEWORKS COMPLEMENTARIOS */}
                        <CardTechnology
                            url="https://axios-http.com/"
                            image="/axios.png"
                            title="Axios"
                            description="Cliente HTTP empresarial robusto con interceptors, manejo de errores avanzado y soporte completo para promesas"
                            experience="Biblioteca de referencia para comunicación cliente-servidor. Especializado en interceptors, manejo de tokens JWT y retry logic."
                        />
                        <CardTechnology
                            url="https://openjfx.io/"
                            image="/javafx.png"
                            title="JavaFX"
                            description="Framework GUI moderno para Java que permite crear aplicaciones desktop ricas y multiplataforma con interfaces nativas"
                            experience="Experiencia certificada en desarrollo de aplicaciones desktop. Actualmente mentor técnico formando developers en JavaFX y patterns MVC."
                        />
                        <CardTechnology
                            url="https://www.mysql.com/"
                            image="/mysql.png"
                            title="MySQL"
                            description="Sistema de gestión de bases de datos relacional robusto para almacenamiento y gestión de datos empresariales"
                            experience="Desarrollo desde primer curso de DAW, usado como preferencia para almacenamiento de datos en proyectos personales y profesionales."
                        />
                        <CardTechnology
                            url="https://www.json.org/json-en.html"
                            image="/json.png"
                            title="Json"
                            description="Formato ligero de intercambio de datos estándar para comunicación eficiente entre cliente y servidor"
                            experience="Desarrollo desde segundo curso de DAW, usado como preferencia para intercambio de datos en proyectos full-stack."
                        />

                        {/* 🔧 HERRAMIENTAS DE DESARROLLO */}
                        <CardTechnology
                            url="https://git-scm.com/"
                            image="/git.png"
                            title="Git"
                            description="Sistema de control de versiones distribuido esencial para desarrollo colaborativo y gestión de código en equipos profesionales"
                            experience="3+ años de experiencia profesional con flujos avanzados. Especializado en Git Flow, branching strategies y desarrollo colaborativo."
                        />
                        <CardTechnology
                            url="https://github.com/"
                            image="/github.png"
                            title="GitHub"
                            description="Plataforma líder de desarrollo colaborativo con DevOps integrado, CI/CD y gestión de proyectos empresariales"
                            experience="Plataforma profesional para portfolio técnico. Experiencia en GitHub Actions, Pull Requests y code reviews para proyectos de producción."
                        />
                        <CardTechnology
                            url="https://code.visualstudio.com/"
                            image="/visual-studio-code.png"
                            title="Visual Studio Code"
                            description="IDE líder de la industria para desarrollo moderno con ecosistema extensivo de plugins y debugging avanzado"
                            experience="Entorno de desarrollo principal optimizado con extensions profesionales para máxima eficiencia en desarrollo full-stack."
                        />

                        {/* 🖥️ SISTEMAS OPERATIVOS */}
                        <CardTechnology
                            url="https://www.linux.org/"
                            image="/linux.png"
                            title="Linux"
                            description="Sistema operativo de código abierto basado en Unix, utilizado en servidores y dispositivos embebidos por su estabilidad y seguridad"
                            experience="Altamente familiarizado desde primer curso de SMR, usado para gestión de servidores empresariales, Web, DNS y correo."
                        />
                        <CardTechnology
                            url="https://www.microsoft.com/es-es/windows/"
                            image="/windows.png"
                            title="Windows"
                            description="Sistema operativo de Microsoft, el más utilizado en el mundo gracias a su facilidad de uso y compatibilidad con la mayoría de programas"
                            experience="Altamente familiarizado desde primer curso de SMR, usado para gestión de servidores empresariales, Web, DNS y correo."
                        />
                    </Box>
                </SectionBox>
            </MyMain >
            <MyFooter />
        </>
    );
}