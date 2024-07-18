import { useEffect, useState } from 'react'
import './App.css'
import Form from '../Form/Form'
import AllProducts from '../AllProducts/AllProducts'
import DetalleProducto from '../DetalleProducto/DetalleProducto'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'

const App = () => {

  const [listaProducto, setListaProducto] = useState([]);

  useEffect(() => {
    const verLista = async () => {
      const url = 'http://localhost:8080/api/list'
      const respuesta = await axios.get(url);
      setListaProducto(respuesta.data)
    }
    verLista();
  }, []);


  const actualizarLista = (nuevaLista) => {
    setListaProducto([...listaProducto, nuevaLista]);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Form actualizarLista={actualizarLista} />
            <AllProducts listaProducto={listaProducto} />
          </>
        } />
        <Route path='/detalle/producto/:_id' element={< DetalleProducto listaProducto={listaProducto} />} />
      </Routes>
    </>
  )
}

export default App;
