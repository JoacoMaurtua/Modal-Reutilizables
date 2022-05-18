import React, { useState } from 'react';
import Modal from './components/Modal/Modal.js';
import './App.scss';

function App() {
  const [estadoModal1, cambiarEstadoModal1] = useState(false);

  return (
    <>
      <div className="contenedor-botones">
        <button
          className="boton"
          onClick={() => cambiarEstadoModal1(!estadoModal1)}
        >
          Modal 1
        </button>
      </div>
      <Modal estado={estadoModal1} cambiarEstado={cambiarEstadoModal1}>
        <div className="contenido">
          <h1>Ventana Modal</h1>
          <p>Reutilizable y con opciones de personalizaciones</p>
          <button
            className="boton"
            onClick={() => cambiarEstadoModal1(!estadoModal1)}
          >
            Aceptar
          </button>
        </div>
      </Modal>
    </>
  );
}

export default App;
