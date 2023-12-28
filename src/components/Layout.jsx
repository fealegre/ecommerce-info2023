import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {

    return (
        <>
            <nav className="navbar sticky-top navbar-dark bg-dark">
                <ul className="nav justify-content-center">
                    <NavLink to="/home" className='nav-link active'>Home</NavLink>
                    <NavLink to="/login" className='nav-link active'>Login</NavLink>
                    <NavLink to="/register" className='nav-link active'>Registro</NavLink>
                    <NavLink to="/categories" className='nav-link active'>Categorias</NavLink>
                    <NavLink to="/products" className='nav-link active'>Productos</NavLink>
                </ul>
            </nav>
            <main style={{ padding: '1rem 0' }}>
                <Outlet />
            </main>
        </>

    );
};

export default Layout