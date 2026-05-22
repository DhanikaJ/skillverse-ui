import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
    const token = localStorage.getItem("authToken");
    const hasValidToken =
        !!token && token !== "null" && token !== "undefined" && token.trim() !== "";

    if (!hasValidToken) {
        localStorage.removeItem("authToken");
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
}

export default ProtectedRoute;