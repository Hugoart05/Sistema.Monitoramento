import { Route, Routes } from "react-router-dom";
import Login from "../pages/Account/Login";
import Register from "../pages/Account/Register";

function PublicRoutes() {
    return ( 
        <Routes>
            <Route path="/" Component={Login}/>
            <Route path="/register" Component={Register}/>
        </Routes>
     );
}

export default PublicRoutes;