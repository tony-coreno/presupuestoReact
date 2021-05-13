import React, { useState } from "react";
import PropTypes from 'prop-types';
import Error from './Error';

const Pregunta = ({setPresupuesto, setRestante, setMostrarComponente}) => {
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  //Función que lee el presupuesto

  //Función para agregar presupuesto
  const agregarPresupuesto = (e) => {
    e.preventDefault();

    //Validar

    if(cantidad < 1 || isNaN(cantidad)){
        setError(true);
        return;
    }
    //Si se pasa la validación
    setError(false);
    //Ya pasamos la validación ahora asignamos el presupuesto que nos llega por medio del input
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setMostrarComponente(false);
    
  };
  return (
    <>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje="Hubo un error en el Presupuesto" /> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={(e) => setCantidad(parseInt(e.target.value))}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </>
  );
};

Pregunta.propTypes = {
    setPresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    setMostrarComponente: PropTypes.func.isRequired,
}

export default Pregunta;
