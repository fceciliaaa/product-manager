import { useNavigate, useParams } from 'react-router-dom'

const DetalleProducto = ({ listaProducto }) => {
  const { _id } = useParams();
  const navegacion = useNavigate();

  const productoSeleccionado = listaProducto.find((producto) => producto._id == _id);


  return (
    <>
      <h2>Detalle del producto</h2>
      <p>Precio: $ {productoSeleccionado.price}</p>
      <p>Descripcion: {productoSeleccionado.description}</p>
      <button onClick={() => navegacion('/')}> Volver a la pagina principal </button>
    </>
  )
}


export default DetalleProducto;