import { useSelector } from "react-redux"
import { Navigate } from "react-router"
import { getIsLogin } from "redux/Auth/auth-selectors"

const PrivateRouter = ({ children }) => {
    const isUserLogin = useSelector(getIsLogin)

    if (!isUserLogin) {
        return <Navigate to='/' />
    }
    
    return children
};

export default PrivateRouter;