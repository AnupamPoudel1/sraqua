import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAtuh from "../hooks/useAuth";

const RequireAuth = () => {
    const { auth } = useAtuh();
    const location = useLocation();
    return (
        auth?.user
            ? <Outlet />
            : <Navigate to='/' state={{ from: location }} replace />
    )
}

export default RequireAuth
