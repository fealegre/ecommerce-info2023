/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import { useAuth } from "../contexts/AuthProvider";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { useState } from 'react';


const Product = ({ product }) => {
    const auth = useAuth();
    const adminUser = (auth.user && auth.user.role) == 'admin'
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const handleDelete = async ()=>{
        try {
            await axios.delete(`https://api.escuelajs.co/api/v1/products/${product.id}`);
            console.log(`Product: ${product.id} deleted OK`);
        }

        catch (error) {
            console.error(error);
        }

        handleClose();
        window.location.href = "/products";     

    }
    
    

    return (
        <div className="card" style={{ width: '18rem' }}>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>¿Confirma eliminar producto?</Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleDelete}>
                        Eliminar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>
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

                <NavLink to={`/products/${product.id}`} className="btn btn-secondary">
                    <li className="material-symbols-outlined">edit</li>
                    <li>Editar</li>
                </NavLink>


                <Button className="btn btn-info" onClick={handleShow}>
                    <li className="material-symbols-outlined">delete</li>
                    <li>Eliminar</li>
                </Button>

                <NavLink to={`/products/${product.id}`} className="btn btn-info">
                    <li className="material-symbols-outlined">add_shopping_cart</li>
                    <li>Carrito</li>
                </NavLink>
            </div>
        </div>
    )
}

export default Product