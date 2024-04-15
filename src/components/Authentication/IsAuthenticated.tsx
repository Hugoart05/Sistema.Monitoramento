import { AuthContext } from "../../context/AuthContext/AuthProvider";
import { AuthContextType} from "../../context/AuthContext/AuthContextTypes";
import { useContext } from "react";

interface AuthProps{
    children: React.ReactNode
}

function IsAuthenticated(props:AuthProps) {
    const auth = useContext<AuthContextType | undefined>(AuthContext)
    return auth?.isLogged ? props.children : null
}
export default IsAuthenticated;