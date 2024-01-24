import { useState } from "react";
import axios from 'axios';

const Register = () => {
    const apiUrl = "https://api.escuelajs.co/api/v1/";
    const dataURL = `${apiUrl}users/`;
    const imageURL = `${apiUrl}files/upload`;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        avatar: null,
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

                console.log("Avatar cargado:", response.data);
                return response.data.location;
            }
        } catch (error) {
            console.error("Error durante la carga del avatar:", error);
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
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="user-name">Name:</label>
                    <input
                        type="text"
                        id="user-name"
                        name="name"
                        placeholder="John Doe"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="user-email">Email:</label>
                    <input
                        type="email"
                        id="user-email"
                        name="email"
                        placeholder="example@yahoo.com"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-control mt-2">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-control mt-2">
                    <label htmlFor="user-avatar">Avatar:</label>
                    <input
                        type="file"
                        id="user-avatar"
                        name="avatar"
                        onChange={handleInputChange}
                    />
                </div>
                <button type='submit' className="btn btn-primary mt-2">Submit</button>
            </form>
        </div>
    );
};

export default Register;
