import { Link } from "react-router-dom";

export function MyHeader() {
    return (
        <>
            <header>
                <h1>Mi Portfolio</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/proyects">Proyects</Link>
                        </li>
                        <li>
                            <Link to="/experience">Experience</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}