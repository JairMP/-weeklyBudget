import React, { useState } from 'react'
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Formulario = ({ guardarGasto, guardarCrearGasto }) => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, agregarError] = useState(false);

    //Usuario Agrega Gasto
    const agregarGasto = e => {
        e.preventDefault();

        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
            agregarError(true);
            return;
        }

        agregarError(false);

        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        guardarGasto(gasto);
        guardarCrearGasto(true);

        guardarNombre('');
        guardarCantidad(0);
        e.target.reset();
    }

    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus Gastos Aqui</h2>
            {error ? <Error mensaje="Ambos campos Son Obligatorios o Presupuesto Incorrecto" /> : null}

            <div className="campo">
                <label>Nombre del Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
                />
            </div>
            <button
                type="submit"
                className="button-primary u-full-width"
            >Agregar Gasto</button>
        </form>
    );
}

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired,
}

export default Formulario;