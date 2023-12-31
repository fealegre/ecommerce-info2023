/* eslint-disable react/prop-types */
import useFetch from "../hooks/useFetch"
import Product from "./Product"

const ProductList = () => {
    const { data: products, isLoading, error } = useFetch('https://api.escuelajs.co/api/v1/products')
    return (
        <>

            {error &&
                <div>
                    {error}
                </div>}
            {isLoading &&
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        
                    </div>
                </div>
            }
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