import { MyHeader } from "../components/MyHeader";
import { MyFooter } from "../components/MyFooter";
import { MyMain } from "../components/MyMain";
import { Box } from "@mui/material";
import { CardProyect } from "../components/CardProyect";
import { HGroup } from "../components/HGroup";

export function Proyects() {
    return (

        <>
            <MyHeader />
            <MyMain>
                <HGroup
                    firstTitle="Lo más destacado . . ."
                    secondTitle="¡Todos mis Proyectos!"
                    aditionalText="Realizados con mucho esfuerzo y dedicación"
                >

                </HGroup>
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
                    <CardProyect
                        firstImage='/elefante-azul_1.png'
                        secondImage='/elefante-azul_2.png'
                        thirdImage='/elefante-azul_3.png'
                        title="Elefante Azul"
                        description="Un proyecto realizado enteramente con Laravel, simula un sitio web donde poder pedir cita y que te imprima un ticket con la hora y datos relacionados. Además si eres administrador podrás ver todas las citas."
                        code="https://github.com/MartinSilvaJose/Elefante-Azul.git"

                    />
                    <CardProyect
                        firstImage='/client-curl_1.png'
                        secondImage='/client-curl_2.png'
                        thirdImage='/client-curl_3.png'
                        title="Cliente cURL"
                        description="Un proyecto realizado con PHP, que se conecta a la API REST del Elefante Azul está hecho con php y cURL. Esta API REST administra todo lo necesario para pedir las citas e imprimir los tickets."
                        code="https://github.com/MartinSilvaJose/Cliente-API-REST-Curl.git"
                    />
                    <CardProyect
                        firstImage='/reservation-form_1.png'
                        secondImage='/reservation-form_2.png'
                        thirdImage='/reservation-form_3.png'
                        title="Reservation Form"
                        description="Un proyecto realizado con HTML, CSS y JavaScript, que simula un formulario de reserva de un hotel. Este formulario tiene validaciones y un botón de enviar que muestra un mensaje de éxito."
                        code="https://github.com/MartinSilvaJose/Reservation-Form.git"
                        demo="https://martinsilvajose.github.io/Reservation-Form/"
                    />
                    <CardProyect
                        firstImage='/working-the-dom_1.png'
                        secondImage='/working-the-dom_2.png'
                        thirdImage='/working-the-dom_3.png'
                        title="Working the DOM"
                        description="Un proyecto realizado con HTML, CSS y JavaScript,donde se pueden añadir, eliminar, modificar y eliminar datos. Cuando cliqueas en modificar puedes seleccionar las teclas de dirección del teclado para moverlo."
                        code="https://github.com/MartinSilvaJose/Working-The-DOM.git"
                        demo="https://martinsilvajose.github.io/Working-The-DOM/"
                    />
                    <CardProyect
                        firstImage='/connect-4_1.png'
                        secondImage='/connect-4_2.png'
                        thirdImage='/connect-4_3.png'
                        title="Connect 4"
                        description="Un proyecto realizado con React y JavaScript. Este juego es el clásico 4 en raya, donde puedes jugar contra un amigo, fué mi primer proyecto personal realizado con React."
                        code="https://github.com/MartinSilvaJose/Connect-4.git"
                    />
                    <CardProyect
                        firstImage='/first-web-site_1.png'
                        secondImage='/first-web-site_2.png'
                        thirdImage='/first-web-site_3.png'
                        title="First Web Site"
                        description="Un proyecto realizado con HTML y CSS, es el sitio web más grande que he hecho hasta ahora. Fué diseñado con Figma y luego implementado con HTML y CSS lleno de animaciones y totalmente responsive."
                        code="https://github.com/MartinSilvaJose/First-Web-Site.git"
                        demo="https://martinsilvajose.github.io/First-Web-Site/"
                    />
                </Box>

            </MyMain>
            <MyFooter />
        </>
    );
}