import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import Product from "./Product"

const CategoryProducts = () => {
    const { id } = useParams()
    const { data: products, isLoading, error } = useFetch(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
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

export default CategoryProducts