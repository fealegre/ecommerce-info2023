import { useState } from "react";
import axios from "axios";

const AddProduct = () => {
    const apiUrl = "https://api.escuelajs.co/api/v1/";
    const dataURL = `${apiUrl}products/`;
    const imageURL = `${apiUrl}files/upload`;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [categoryId, setCategoryId] = useState(0);
    const [images, setImages] = useState([]);

    
    const handleInputImagesChange = (e) => {
        const { files } = e.target;

        setImages([...images,...files]);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Convertir las imágenes a FormData
        const formData = new FormData();
        Array.from(images).forEach((image) => {
            formData.append("file", image);
        });
        console.log(formData);

        // Subir las imágenes al endpoint de archivos
        const imageUploadPromises = Array.from(images).map(() => {
            return axios.post(imageURL, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
        });

        const imageResponses = await Promise.all(imageUploadPromises);

        // Obtener las URLs de las imágenes
        const urls = imageResponses.map((response) => response.data.location);

        // Agregar las URLs al objeto del producto
        const product = {
            title,
            price,
            description,
            categoryId,
            images: urls,
        };

        // Enviar el producto al endpoint
        const response = await axios.post(dataURL, product);
        console.log('Product added successfully:', response.data);

        // Redirigir a la página de productos
        // window.location.href = "/products";
    };

    return (
        <div>
            <h1>Agregar Producto</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Título:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label htmlFor="price">Precio:</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <label htmlFor="description">Descripción:</label>
                <textarea
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <label htmlFor="category">Categoría:</label>
                <select
                    id="category"
                    name="category"
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                >
                    <option value="">Seleccione una categoría</option>
                    <option value="1">Categoría 1</option>
                    <option value="2">Categoría 2</option>
                </select>

                <label htmlFor="images">Imágenes:</label>
                <input
                    type="file"
                    id="images"
                    name="images"
                    multiple
                    onChange={handleInputImagesChange}
                />

                <button type="submit">Agregar Producto</button>
            </form>
        </div>
    );
};

export default AddProduct;
