/* eslint-disable react/no-unescaped-entities */
import { NavLink } from 'react-router-dom';
const NoMatch = () => {    
    return (<div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
            <h1 className="display-1 fw-bold">404</h1>
            <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
            <p className="lead">
                The page you're looking for doesn't exist.
            </p>
            <NavLink to="/home" className='btn btn-primary'>Go Home</NavLink>
        </div>
    </div>);
};

export default NoMatch