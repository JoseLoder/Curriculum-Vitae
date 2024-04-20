import { useRouteError, useHistory } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    const history = useHistory();
    console.error(error);

    const redirectToLandingPage = () => {
        history.push('/landingpage');
    }

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <button onClick={redirectToLandingPage}>Go to Landing Page</button>
        </div>
    );
}