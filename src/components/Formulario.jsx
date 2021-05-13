import React, { useState } from "react";
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Error from "./Error";


const Formulario = ({setGasto, setCrearGasto}) => {
  const [nombreGasto, setNombreGasto] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  //Cuando el usuario agrega un gasto

  const agregarGasto = (e) => {
    e.preventDefault();

    //Validar
    if (cantidad < 1 || isNaN(cantidad) || nombreGasto.trim() === "") {
      setError(true);
      return;
    }

    setError(false);

    //Construir el gasto Será de tipo objeto

    const gasto = {
        nombreGasto,
        cantidad,
        id: shortid.generate()
    }
    // console.log(gasto)

    //Pasarlo al componente principal

    setGasto(gasto)
    setCrearGasto(true)

    //Resetear el formulario

    setNombreGasto('');
    setCantidad(0);
  };
  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aquí</h2>
      {error ? (
        <Error mensaje="Ambos campos son obligatorios o Presupuesto Incorrecto" />
      ) : null}
      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombreGasto}
          onChange={(e) => setNombreGasto(e.target.value)}
          autoFocus
        />
      </div>
      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={(e) => setCantidad(parseInt(e.target.value))}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar gasto"
      />
    </form>
  );
};

Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setCrearGasto: PropTypes.func.isRequired,
}


export default Formulario;
