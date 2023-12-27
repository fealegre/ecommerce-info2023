/* eslint-disable react/prop-types */
import useFetch from '../hooks/useFetch'
import Category from "./Category"

const CategoriesList = () => {
    const { data:categories, isLoading, error} = useFetch('https://api.escuelajs.co/api/v1/categories')
    return (
        <div className="container">
            {error && <div>{error}</div>}
            {isLoading &&
                <div className="d-flex align-items-center">
                    <strong>Loading...</strong>
                    <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                </div>}
            {categories && categories.map((category) => (
                <Category
                    key={category.id}
                    category={category} />
            )
            )
            }
        </div>
    )
}

export default CategoriesList