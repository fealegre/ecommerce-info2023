/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
/* eslint-disable react/prop-types */
const ProductDetail = () => {
    const { id } = useParams()
    const { data: detail, isLoading, error } = useFetch(`https://api.escuelajs.co/api/v1/products/${id}`)    

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
            <div className="item">
                {detail && <h1>{detail.title}</h1>}
            </div>
        </>
    )

}

export default ProductDetail