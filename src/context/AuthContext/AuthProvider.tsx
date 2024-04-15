import { ReactNode, createContext, useEffect, useState } from "react";
import { Logout } from './AuthMethods.ts';
import { ApiRequest } from "../../Api/Api.ts";
import UserUtils from "../../storageUtils/UserUtils.ts";
import { useNavigate } from "react-router-dom";
import { AuthContextType, AuthDataType, SignInType } from "./AuthContextTypes.tsx";


export const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProps {
    children: ReactNode
}

function AuthProvider({ children }: AuthProps) {
    const [authData, setAuthData] = useState<AuthDataType>();
    const [isLogged, setIsLogged] = useState<boolean>(false);
    const navigation = useNavigate()

    useEffect(() => {
        function CheckAuthentication() {
            if (UserUtils.GetToken() != undefined)
                setIsLogged(true)
        }
        CheckAuthentication()
    }, [])

    async function signIn(loginData: SignInType) {
        try {
            const response = await ApiRequest<AuthDataType>('account/auth', 'post', loginData)
            if (typeof response.data !== 'undefined' && response.success) {
                setAuthData(response.data as AuthDataType)
                UserUtils.SetToken(response.data.token)
                setIsLogged(true)
                navigation("/")
            }
        } catch (error) {
            console.log(error)
        }
    }

    function logout(): void {
        Logout()
        setIsLogged(false)
    }

    return (
        <AuthContext.Provider value={{ authData, isLogged, logout, signIn }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;