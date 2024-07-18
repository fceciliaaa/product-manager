import { Link } from "react-router-dom";

const AllProducts = ({ listaProducto }) => {


  return (
    <>
      <h2>All Products</h2>
      {listaProducto.map((producto, index) => {
        return (
          <p key={index}>
            <Link to={`/detalle/producto/${producto._id}`}> {producto.title} </Link>
          </p>
        )
      })}
    </>
  )
}

export default AllProducts;