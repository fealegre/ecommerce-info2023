/* eslint-disable react/prop-types */
import useFetch from '../hooks/useFetch'
import Category from "./Category"

const CategoriesList = () => {
    const { data: categories, isLoading, error } = useFetch('https://api.escuelajs.co/api/v1/categories')
    return (
        <div className="container">
            {error && <div>{error}</div>}
            {isLoading &&
                <div className="text-center">
                    <div className="spinner" role="status">
                    </div>
                </div>}
            <h1>Categorias</h1>
            <div className="container">
                {categories && categories.map((category) => (
                    <Category
                        key={category.id}
                        category={category} />
                )
                )
                }
            </div>
        </div>
    )
}

export default CategoriesList