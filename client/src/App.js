import React from 'react';
import Modal from './components/Modal/Modal.js';
import './App.scss';

function App() {
  return (
    <>
      <div className="contenedor-botones">
        <button className="boton">Modal 1</button>
      </div>
      <Modal>
        <div className="contenido">
          <h1>Ventana Modal</h1>
          <p>Reutilizable y con opciones de personalizaciones</p>
          <button className="boton">Aceptar</button>
        </div>
      </Modal>
    </>
  );
}

export default App;
