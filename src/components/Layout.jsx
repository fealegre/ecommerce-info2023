import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
    
    return (
        <>
            <nav
                style={{
                    borderBottom: 'solid 1px',
                    paddingBottom: '1rem',
                }}
            >
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <NavLink to="/home" className='nav-link active'>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/login" className='nav-link active'>Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/register" className='nav-link active'>Registro</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/categories" className='nav-link active'>Categorias</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/products" className='nav-link active'>Productos</NavLink>
                    </li>
                </ul>
            </nav>
            <main style={{ padding: '1rem 0' }}>
                <Outlet />
            </main>
        </>

    );
};

export default Layout