import { useState } from 'react'
import axios from 'axios';


/* 
[POST] https://api.escuelajs.co/api/v1/products/
# Body
{
  "title": "New Product",
  "price": 10,
  "description": "A description",
  "categoryId": 1,
  "images": ["https://placeimg.com/640/480/any"]
} */

export default function AddProduct() {

    const apiUrl = "https://api.escuelajs.co/api/v1/";
    const dataURL = `${apiUrl}products/`;
    const imageURL = `${apiUrl}files/upload`;

    const [formData, setFormData] = useState({
        title: "",
        price: 0.0,
        description: "",
        image: null,
    });

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === 'file' ? e.target.files[0] : value,
        }));
    };

    const handleFileUpload = async () => {
        try {
            if (formData.avatar) {
                const formDataFile = new FormData();
                formDataFile.append('file', formData.avatar);
                formDataFile.append('fileName', formData.avatar.name);

                const response = await axios.post(imageURL, formDataFile, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });

                console.log("Imagen de producto cargada:", response.data);
                return response.data.location;
            }
        } catch (error) {
            console.error("Error durante la carga de la imagen:", error);
            throw error;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Cargar el archivo y obtener la URL del avatar
            const avatarUrl = await handleFileUpload();

            // Realizar el registro del usuario con la URL del avatar
            const userData = await axios.post(dataURL, {
                ...formData,
                avatar: avatarUrl,
            }, {
                headers: { "Content-Type": "application/json" },
            });

            console.log("Usuario registrado:", userData.data);
        } catch (error) {
            console.error("Error durante el registro:", error);
        }
    };

    return (
        <div className="container-fluid">            
            <form className="collapse" id="productForm" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="user-name">Nombre del producto</label>
                    <input
                        className="form-control"
                        type="text"
                        id="product-title"
                        name="title"
                        placeholder="Pantalon jean"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="user-email">Precio</label>
                    <input
                        className="form-control"
                        type="number"
                        id="product-price"
                        name="price"
                        placeholder="1200"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password">Descripción</label>
                    <input
                        className="form-control"
                        type="text"
                        id="product-desc"
                        name="description"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password">Categoría</label>
                    <input
                        className="form-control"
                        type="text"
                        id="product-cat"
                        name="categorie"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="user-avatar">Imagen del producto</label>
                    <input
                        className="form-control"
                        type="file"
                        id="product-img"
                        name="avatar"
                        onChange={handleInputChange}
                    />
                </div>
                <button type='submit' className="btn btn-primary mt-2">Submit</button>
            </form>
        </div>
    )
}
