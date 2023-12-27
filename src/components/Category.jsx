/* eslint-disable react/prop-types */

const Category = ({ category }) => {

    return (
        <>
            <div className="item">
                <p>{category.name}</p>
                <img src={category.image} alt={category.name} />                
            </div >
        </>
    )
}

export default Category