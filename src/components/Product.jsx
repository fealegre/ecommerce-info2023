/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
const Product = ({ product }) => {
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
            <div className="card-footer d-grid gap-2 d-md-block">
                <NavLink to={`/products/${product.id}`} className="btn btn-info btn-sm">Detalle</NavLink>
                <NavLink to={`/products/${product.id}`} className="btn btn-secondary btn-sm">Editar</NavLink>
            </div>
        </div>
    )
}

export default Product