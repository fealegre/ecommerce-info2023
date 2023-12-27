/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

/* eslint-disable react/prop-types */
const ProductDetail = () => {
    const { id } = useParams()
    const [detail, setDetail] = useState(null)

    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setDetail(data)
            })
    }, [])

    return (        
        <div className="item">
            {detail && <h1>{detail.title}</h1>}
        </div>
    )

}

export default ProductDetail