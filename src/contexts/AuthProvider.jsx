/* eslint-disable react/prop-types */
import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("site") || "");
    const navigate = useNavigate();
    const loginAction = (input) => {
        fetch("https://api.escuelajs.co/api/v1/auth/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(input),
            }
        )
            .then(res => {
                if (!res.ok) {
                    alert('No existe este usuario');
                    throw Error('No existen datos para este recurso');
                    
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                setToken(data.access_token);
                localStorage.setItem("site", data.access_token);

                const fetchOptions = {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('site')}`,
                    },
                };

                fetch('https://api.escuelajs.co/api/v1/auth/profile', fetchOptions)
                    .then(res => {
                        if (!res.ok) {
                            throw Error('No existen datos para este recurso');
                        }
                        return res.json()
                    })
                    .then(data => {
                        console.log(data)
                        setUser(data)
                    })
                    .catch(err => {
                        console.error(err);
                    })
                navigate("/dashboard");
            })
            .catch(err => {
                console.error(err);
            })


    }

    const logOut = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("site");
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};
