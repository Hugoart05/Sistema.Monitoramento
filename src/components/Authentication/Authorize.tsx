import { ReactNode, useContext } from "react";
import { AuthContextType } from "../../context/AuthContext/AuthContextTypes";
import { AuthContext } from "../../context/AuthContext/AuthProvider";

function Authorize(children:ReactNode) {
    const auth = useContext<AuthContextType | undefined>(AuthContext)
    return auth?.isLogged ? {children} : null
}

export default Authorize;