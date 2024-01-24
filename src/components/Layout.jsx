import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from "../contexts/AuthProvider";


const Layout = () => {
    const auth = useAuth();


    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-info">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/home">INFOCOMMERCE</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/home" className="nav-link active" aria-current="page" href="#">Home</NavLink>
                            </li>
                            {!auth.user && <li className="nav-item">
                                <NavLink to="/register" className="nav-link active" href="#">Registro</NavLink>
                            </li>}
                            <li className="nav-item">
                                <NavLink to="/categories" className="nav-link active" href="#">Categorias</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/products" className="nav-link active" href="#">Productos</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav justify-content-end">
                            {auth.user
                                ? <li className="nav-item"><NavLink to="/dashboard" className='nav-link active'>Dashboard</NavLink></li>
                                : <li className="nav-item"><NavLink to="/login" className='nav-link active'>Login</NavLink></li>}

                        </ul>
                    </div>
                </div>
            </nav>
            <main style={{ padding: '1rem 0' }}>
                <Outlet />
            </main>
        </>
    )
};

export default Layout