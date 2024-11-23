import { Navigate } from "react-router-dom";
import LoadingSpinner from "../components/Shared/LoadingSpinner";
import useRole from "../hooks/useRole";


const SellerRoute = ({children}) => {
    const [role, isLoading] = useRole();
    
    if(isLoading) return <LoadingSpinner></LoadingSpinner>
    
    if(role === 'seller') return children;
    return <Navigate to='/dashboard'></Navigate>

};

export default SellerRoute;