import { MyHeader } from "../components/MyHeader";
import { MyFooter } from "../components/MyFooter";
import { MyMain } from "../components/MyMain";
import { Box } from "@mui/material";
import { CardProject } from "../components/CardProject";
import { HGroup } from "../components/HGroup";
import { FeaturedProject } from "../components/FeaturedProject";
import { SectionBox } from "../components/SectionBox";

export function Projects() {
    return (

        <>
            <MyHeader />
            <MyMain>
                <HGroup
                    firstTitle="Proyectos"
                    secondTitle="Lo que he construido"
                    aditionalText="De APIs REST con Node.js y TypeScript a mis primeros pasos con HTML."
                />
                <Box
                    component={'section'}
                    sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'center', width: '100%', px: { xs: 2, md: 5 }, mb: 4 }}
                >
                    <FeaturedProject
                        label="Proyecto destacado · Proyecto de Fin de Grado"
                        title="Pawn-to-Pawn"
                        subtitle="Aplicación full-stack de gestión de pedidos y producción con control de acceso por roles"
                        description="Monorepo en TypeScript con una API REST en Express, frontend en React y un paquete de tipos compartidos. Los clientes crean pedidos, los operarios los asignan y los llevan de pendiente a preparación y a completado, y el administrador gestiona usuarios, productos, materiales y máquinas."
                        highlights={[
                            "API REST con Express en capas (rutas → controladores → modelos) para 5 entidades, con validación de cada petición mediante Zod y gestión centralizada de errores.",
                            "Autenticación con JWT en cookies HTTP-only, refresh tokens persistidos en base de datos con renovación automática y contraseñas cifradas con bcrypt.",
                            "Autorización por middlewares para 3 roles: cliente, operario y administrador.",
                            "Tipos compartidos entre API y frontend (@pawn-to-pawn/shared) con npm workspaces: los cambios de contrato se detectan al compilar.",
                            "PostgreSQL con consultas parametrizadas y connection pooling; entorno completo con Docker Compose y un Makefile para setup, logs y backups.",
                        ]}
                        stack={["TypeScript", "Node.js", "Express", "PostgreSQL", "Zod", "JWT", "React 19", "TanStack Query", "styled-components", "Docker", "Vercel"]}
                        code="https://github.com/JoseLoder/Pawn-to-Pawn"
                    />
                </Box>
                <SectionBox title="Otros proyectos" />
                <Box
                    component={'section'}
                    sx={{
                        alignSelf: 'center',
                        display: 'flex',
                        placeContent: 'center',
                        flexWrap: "wrap",
                        m: 5,
                        gap: 5
                    }}
                >
                    <CardProject
                        firstImage='/elefante-azul_1.png'
                        secondImage='/elefante-azul_2.png'
                        thirdImage='/elefante-azul_3.png'
                        title="Elefante Azul - Laravel"
                        description="Un proyecto realizado con Laravel, es un sitio web para pedir cita devolviendo un ticket con la hora y datos relacionados. Además si eres administrador podrás ver todas las citas."
                        code="https://github.com/joseloder/Elefante-Azul.git"

                    />
                    <CardProject
                        firstImage='/client-curl_1.png'
                        secondImage='/client-curl_2.png'
                        thirdImage='/client-curl_3.png'
                        title="Cliente cURL - PHP"
                        description="Un proyecto realizado con PHP, que se conecta a la API REST del Elefante Azul hecho con PHP y cURL. Esta API REST administra todo lo necesario para pedir las citas e imprimir los tickets."
                        code="https://github.com/joseloder/Cliente-API-REST-Curl.git"
                    />
                    <CardProject
                        firstImage='/reservation-form_1.png'
                        secondImage='/reservation-form_2.png'
                        thirdImage='/reservation-form_3.png'
                        title="Reservation Form - JS Vanilla"
                        description="Un proyecto realizado con HTML, CSS y JavaScript, que simula un formulario de reserva de un hotel. Este formulario tiene validaciones y un botón de enviar que muestra un mensaje de éxito."
                        code="https://github.com/joseloder/Reservation-Form.git"
                        demo="https://joseloder.github.io/Reservation-Form/"
                    />
                    <CardProject
                        firstImage='/working-the-dom_1.png'
                        secondImage='/working-the-dom_2.png'
                        thirdImage='/working-the-dom_3.png'
                        title="Working the DOM - JS Vanilla"
                        description="Un proyecto realizado con HTML, CSS y JavaScript con funcionalidad CRUD utilizando el DOM. Cuando modificas puedes alterar la posición del registro con las flechas."
                        code="https://github.com/joseloder/Working-The-DOM.git"
                        demo="https://joseloder.github.io/Working-The-DOM/"
                    />
                    <CardProject
                        firstImage='/connect-4_1.png'
                        secondImage='/connect-4_2.png'
                        thirdImage='/connect-4_3.png'
                        title="Connect 4 - React"
                        description="Un proyecto realizado con React y JavaScript. Este juego es el clásico 4 en raya, donde puedes jugar contra un amigo, fue mi primer proyecto personal realizado con React."
                        code="https://github.com/joseloder/Connect-4.git"
                        demo="https://joseloder.github.io/Connect-4/"
                    />
                    <CardProject
                        firstImage='/api-cat-and-dog_1.png'
                        secondImage='/api-cat-and-dog_2.png'
                        thirdImage='/api-cat-and-dog_3.png'
                        title="Api Cats and Dogs - React"
                        description="Un proyecto realizado con React, JavaScript y CSS, es una aplicación que consume una API de gatos y perros. Puedes ver las fotos de los gatos y perros y cambiar entre ellos."
                        code="https://github.com/joseloder/Api-Cat-and-Dog.git"
                        demo="https://joseloder.github.io/Api-Cat-and-Dog/"
                    />
                    <CardProject
                        firstImage='/api-game-of-thrones_1.png'
                        secondImage='/api-game-of-thrones_2.png'
                        thirdImage='/api-game-of-thrones_3.png'
                        title="Api Game of Thrones - React"
                        description="Un proyecto realizado con React y consume la API de Game of Thrones. Puedes seleccionar los personajes más influyentes de la serie y sus frases más icónicas."
                        code="https://github.com/joseloder/Api-Game-of-Thrones.git"
                        demo="https://joseloder.github.io/Api-Game-of-Thrones/"
                    />
                    <CardProject
                        firstImage='/api-detect-lenguage_1.png'
                        secondImage='/api-detect-lenguage_2.png'
                        thirdImage='/api-detect-lenguage_3.png'
                        title="Api Detect Language - React"
                        description="Un proyecto realizado con React y consume una API un tanto compleja ya que requiere de instalación previa. Consiste en detectar el idioma del texto introducido."
                        code="https://github.com/joseloder/Api-Detect-Lenguage.git"
                        demo="https://joseloder.github.io/Api-Detect-Lenguage/"
                    />
                    <CardProject
                        firstImage='/api-pokemon_1.png'
                        secondImage='/api-pokemon_2.png'
                        thirdImage='/api-pokemon_3.png'
                        title="Api Pokémon - React"
                        description="Un proyecto realizado con React el cual consume la pokeAPI, en este caso nos irá mostrando los pokemons de 30 en 30 con la funcionalidad de scroll infinito."
                        code="https://github.com/joseloder/Api-Pokemon.git"
                        demo="https://joseloder.github.io/Api-Pokemon/"
                    />
                    <CardProject
                        firstImage='/crud-javafx_1.png'
                        secondImage='/crud-javafx_2.png'
                        thirdImage='/crud-javafx_3.png'
                        title="CRUD JavaFX - Java"
                        description="Este proyecto fue realizado para impartir una clase de adaptación de un proyecto Java basado en MVC donde la vista es realizada con JavaFX y es totalmente independiente del modelo."
                        code="https://github.com/joseloder/CRUDJavaFX-Terminado"
                    />
                </Box>

            </MyMain>
            <MyFooter />
        </>
    );
}
