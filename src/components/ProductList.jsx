/* eslint-disable react/prop-types */
import useFetch from "../hooks/useFetch"
import Product from "./Product"
import { useAuth } from "../contexts/AuthProvider";
import AddProduct from "./AddProduct";


const ProductList = () => {
    const auth = useAuth();
    const adminUser = (auth.user && auth.user.role) == 'admin'
    const { data: products, isLoading, error } = useFetch('https://api.escuelajs.co/api/v1/products')

    return (
        <div className="container">
            <AddProduct />
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
        </div>
    )
}

export default ProductList