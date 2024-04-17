import { MyHeader } from "../components/MyHeader";
import { MyFooter } from "../components/MyFooter";
import { MyMain } from "../components/MyMain";
import { Typography } from "@mui/material";


export function Proyects() {
    return (

        <>
            <MyHeader />
            <MyMain>
                <Typography variant="h2" component="h1" p={4}>
                    HI THERE!
                </Typography>
                <Typography variant="p" p={4}>
                    <ul>
                        <li>Elefante Azul - https://github.com/MartinSilvaJose/Elefante-Azul.git</li>
                        <li>Cliente-API-REST-cURL - https://github.com/MartinSilvaJose/Cliente-API-REST-Curl.git</li>
                        <li>Reservation Form - https://github.com/MartinSilvaJose/Reservation-Form.git</li>
                        <li>Working-The-Dom - https://github.com/MartinSilvaJose/Working-The-DOM.git</li>
                        <li>Connect-4 - https://github.com/MartinSilvaJose/Connect-4.git </li>
                        <li>First-Web-Site - https://github.com/MartinSilvaJose/First-Web-Site.git</li>
                    </ul>
                </Typography>

            </MyMain>
            <MyFooter />
        </>
    );
}