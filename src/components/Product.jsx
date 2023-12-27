/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
const Product = ({ product }) => {
    return (
        <div className="item">
            <NavLink to={`/products/${product.id}`}>
                <p>{product.title}</p>
                <img src={product.images[0]} alt={product.title} />
            </NavLink>
            <p>{product.description}</p>
            <h3>${product.price}</h3>

        </div>
    )
}

export default Product