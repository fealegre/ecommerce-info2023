/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import { useAuth } from "../contexts/AuthProvider";

const Product = ({ product }) => {
    const auth = useAuth();
    const adminUser = (auth.user && auth.user.role) == 'admin'

    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={product.images[0]} className="card-img-top" alt={product.title} />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Category:<i> {product.category.name}</i></li>
                <li className="list-group-item">Stock:</li>
                <li className="list-group-item"><strong>${product.price}</strong></li>
            </ul>
            <div className="card-footer d-flex justify-content-between">
                <NavLink to={`/products/${product.id}`} className="btn btn-info">
                    <li className="material-symbols-outlined">feed</li>
                    <li>Detalles</li>
                </NavLink>
                {adminUser &&
                    <NavLink to={`/products/${product.id}`} className="btn btn-secondary">
                        <li className="material-symbols-outlined">edit</li>
                        <li>Editar</li>
                    </NavLink>
                }
                {adminUser ?
                    <NavLink to={`/products/${product.id}`} className="btn btn-info">
                        <li className="material-symbols-outlined">delete</li>
                        <li>Eliminar</li>
                    </NavLink>
                    :
                    <NavLink to={`/products/${product.id}`} className="btn btn-info">
                        <li className="material-symbols-outlined">add_shopping_cart</li>
                        <li>Carrito</li>
                    </NavLink>}                
            </div>
        </div>
    )
}

export default Product