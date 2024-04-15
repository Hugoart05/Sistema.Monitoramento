import React, { useContext, useState } from "react";
import { AuthContextType, AuthDataType, SignInType } from "../../context/AuthContext/AuthContextTypes";
import { AuthContext } from "../../context/AuthContext/AuthProvider";
import * as C from "./style";
import * as G from '../../GlobalStyles/style.ts'
import { Link } from "react-router-dom";

interface ChangeType {
    event: React.ChangeEvent<HTMLInputElement>
    name: string
}

function Login() {
    const auth = useContext<AuthContextType | undefined>(AuthContext);
    const [login, setLogin] = useState<SignInType>({ email: '', password: '' })

    function handleChange({event, name}: ChangeType) {
        setLogin(prev => ({
            ...prev,
            [name]: event.target.value
        }))
    }

    return (
        <C.Container>
            <C.LoginBox className="shadow">
                <div className="mb-5">
                    <h1 className="text-center text-primary">ListaPro</h1>
                </div>
                <G.ChangeArea>
                    <G.Input
                        onChange={(event) => handleChange({event: event, name:'email'})}
                        value={login.email}
                    />
                    <G.Label altura={true ? '5px': '15px'}>
                        Email
                    </G.Label>
                </G.ChangeArea>
                <G.ChangeArea>
                    <G.Input
                        onChange={(event) => handleChange({event: event, name:'password'})}
                        value={login.password}
                    />
                    <G.Label altura={true ? '5px': '15px'}>
                        Password
                    </G.Label>
                </G.ChangeArea>
                <C.Button type="submit" onClick={() =>auth?.signIn(login)}>
                    Login
                </C.Button>
                <Link to={'/register'} className="text-center">ainda não tem uma conta? Clique aqui</Link>
            </C.LoginBox>
        </C.Container>
    );
}

export default Login;