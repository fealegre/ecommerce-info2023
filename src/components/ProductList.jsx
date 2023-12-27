/* eslint-disable react/prop-types */
import useFetch from "../hooks/useFetch"
import Product from "./Product"

const ProductList = () => {
    const { data:products, isLoading, error} = useFetch('https://api.escuelajs.co/api/v1/products')
    return (
        <div className="container">
            {error && <div>{error}</div>}
            {isLoading &&
                <div className="d-flex align-items-center">
                    <strong>Loading...</strong>
                    <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                </div>}
            {products && products.map((product) => (
                <Product
                    key={product.id}
                    product={product} />
            )
            )

            }
        </div>
    )
}

export default ProductList