import React, { useEffect, useState } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';
function App() {
  //Definir state
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarComponente, setMostrarComponente] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [crearGasto, setCrearGasto] = useState(false);
  //UseEffect que actualiza el restante

  useEffect(() => {

    //Agrega el nuevo presupuesto
      if(crearGasto){
        setGastos([...gastos, gasto]);
      }

      //Resta el presupuesto actual

      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante)


      //Resetear a false
      setCrearGasto(false)
  }, [gasto])

  //Funcion que se va ejecutar cuándo agreguemos un nuevo gasto


  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <hr />

        <div className="contenido-principal contenido">
          {mostrarComponente ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setMostrarComponente={setMostrarComponente}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario setGasto={setGasto} setCrearGasto={setCrearGasto} />
              </div>

              <div className="one-half column"> 
                <Listado gastos={gastos} />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
