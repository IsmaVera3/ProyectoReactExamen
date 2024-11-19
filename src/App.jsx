import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Formulario from './components/Formulario';

function App() {


  useEffect(() => {
    fetchUsuarios();
  }, []);

  const agregarUsuario = async (nuevoUsuario) => {
    try {
      await axios.post('http://localhost:3000/usuario', nuevoUsuario);
      fetchUsuarios();
    } catch (error) {
      console.error('Error al enviar datos', error);
    }
  };

  if (!usuarios) {
    return <p>Cargando datos...</p>;
  }

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <Formulario onAgregarUsuario={agregarUsuario} />
      <Busqueda onBuscarUsuario={fetchUsuarios}/>
    </div>
  );
}

export default App;
