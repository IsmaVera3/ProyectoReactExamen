import { useState } from 'react';

function Formulario({ onAgregarUsuario }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAgregarUsuario({ name: nombre, apellido }); 
    setNombre('');
    setApellido('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Nombre" 
        value={nombre} 
        onChange={(e) => setNombre(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Apellido" 
        value={apellido} 
        onChange={(e) => setApellido(e.target.value)} 
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
