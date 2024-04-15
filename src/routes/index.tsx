import { useContext } from "react";
import { AuthContext } from "../context/AuthContext/AuthProvider";
import PrivateRoute from "./PrivateRoute";
import PublicRoutes from "./PublicRoutes";

function RoutesDefine() {

    const Auth = useContext(AuthContext)

    return Auth?.isLogged ? <PrivateRoute/> : <PublicRoutes/>
}

export default RoutesDefine;