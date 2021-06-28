import React, { Fragment, useState } from 'react'
import Error from './Error'
import Formulario from './Formulario';
import PropTypes from 'prop-types';


const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {
    
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    //Funcion que lee El Presupuesto
    const definirPresupuesto = (e) => {
        guardarCantidad(parseInt(e.target.value, 10));

    }
    //submit para el presupuesto
    const agregarPresupuesto = e =>{
        e.preventDefault();
        if(cantidad < 1 || isNaN(cantidad)){
            guardarError(true);
            return;
        }

        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);

    }

    return (
        <Fragment>
            <h2>Coloca tu Presupuesto</h2>
            {error ? <Error mensaje="El presupuesto es Incorrecto" />  :null}
            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu Presupuesto"
                    onChange={definirPresupuesto}
                />
                <button
                    type="submit"
                    className="button-primary u-full-width"
                >Definir Presupuesto</button>
            </form>
        </Fragment>

    );
}

Formulario.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired,
}

export default Pregunta;