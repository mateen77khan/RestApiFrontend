import { Navigate, Outlet } from "react-router-dom";
import { UseAuth } from "../auth/AuthContext";

export default function ProtectedRoute() {
    const { user } = UseAuth();
    return user ? <Outlet /> : <Navigate to="/login" replace />;
}
