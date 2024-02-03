/* eslint-disable react/prop-types */
import useFetch from "../hooks/useFetch"
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Product from "./Product"
import { useAuth } from "../contexts/AuthProvider";
import AddProduct from "./AddProduct";
import { useState } from "react";


const ProductList = () => {
    const auth = useAuth();
    const adminUser = (auth.user && auth.user.role) == 'admin'
    const { data: products, isLoading, error } = useFetch('https://api.escuelajs.co/api/v1/products')

    const [open, setOpen] = useState(false);

    return (
        <>
            {adminUser &&
                <div className="container">
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                    >
                        Agregar producto
                    </Button>
                    <Collapse in={open}>
                        <div id="example-collapse-text">
                            <AddProduct />
                        </div>
                    </Collapse>
                </div>}
            {error &&
                <div>
                    {error}
                </div>}
            {isLoading &&
                <div className="text-center">
                    <div className="spinner" role="status">
                    </div>
                </div>
            }
            <h1>Todos los Productos</h1>
            <div className="container">
                {products && products.map((product) => (
                    <Product
                        key={product.id}
                        product={product} />
                ))}
            </div>
        </>
    )
}

export default ProductList