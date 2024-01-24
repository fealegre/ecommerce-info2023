import { useAuth } from "../contexts/AuthProvider";

const Dashboard = () => {
    const auth = useAuth();
    return (
        <div className="container-fluid">
            <div>
                <h1>Welcome! {auth.user?.name}</h1>
                <h2>Email: {auth.user?.email}</h2>
                <h2>Role: {auth.user?.role}</h2>
                <img src={auth.user?.avatar} className="img-thumbnail" alt={auth.user?.name} />
            </div>
            <div className="">
                <button onClick={() => auth.logOut()} className="btn btn-primary mt-2">
                    Logout
                </button>
            </div>
        </div>

    );
};

export default Dashboard;