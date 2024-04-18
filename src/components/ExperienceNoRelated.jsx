import PropTypes from 'prop-types';

export function ExperienceNoRelated({ desempeño, duracion, ubicacion, funcion }) {

    return (
        <>
            <li>{desempeño}</li>
            <ul>
                <li>{duracion}</li>
                <li>{ubicacion}</li>
                <li>{funcion}</li>
            </ul>
        </>
    );

}

ExperienceNoRelated.propTypes = {
    desempeño: PropTypes.string.isRequired,
    duracion: PropTypes.string.isRequired,
    ubicacion: PropTypes.string.isRequired,
    funcion: PropTypes.string.isRequired,
};