import { NavLink } from "react-router-dom"

/* eslint-disable react/prop-types */
const Category = ({ category }) => {

    return (
        <NavLink to={`${category.id}/products`} className="list-group-item" >
            <div className="card" style={{ width: '15rem', height: '15rem' }}>
                <h4 className="card-title">{category.name}</h4>
                <img src={category.image} className="card-img-bottom" alt={category.name} />
            </div>
        </NavLink>
    )
}

export default Category