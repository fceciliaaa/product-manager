import React, { useState } from 'react'
import axios from 'axios';

const Form = ({ actualizarLista }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");


  const agregarALista = async (e) => {
    e.preventDefault();
    try {
      const nuevoProducto = { title, price, description };
      const url = 'http://localhost:8080/api/new'
      const respuesta = await axios.post(url, nuevoProducto); //nuevoProducto sería el body que recibe el post

      actualizarLista(respuesta.data);
      setTitle("");
      setPrice("");
      setDescription("")

    } catch {
      console.log("Algo salio mal")
    }
  }


  return (
    <>
      <h2>Product Manager</h2>

      <form onSubmit={agregarALista}>

        <div>
          <label > Title </label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </div><br />

        <div>
          <label> Price </label>
          <input type="text" value={price} onChange={e => setPrice(e.target.value)} />
        </div><br />

        <div>
          <label> Description </label>
          <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
        </div><br />

        <button type='submit'> Create </button>
      </form>
    </>
  )
}

export default Form;