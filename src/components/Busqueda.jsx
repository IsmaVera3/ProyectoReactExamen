import { useState } from "react";

function Busqueda( {onBuscarUsuarios} ){
    const [usuarios, setUsuarios] = useState([]);

    const fetchUsuarios = async () => {
      try {
        const response = await axios.get('http://localhost:3000/usuario');
        setUsuarios(response.data);
      } catch (error) {
        console.error('No se pudo conectar con la API', error);
      }
    };
}