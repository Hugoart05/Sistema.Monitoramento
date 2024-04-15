//outros imports
import { Route,  Routes } from "react-router-dom";
import { SignalRProvider } from "../context/SignalRProvider";

//imports decomponentes de rota
import Feed from "../pages/Feed";
import Dispositivos from "../pages/Dispositivos";
import Condominios from "../pages/Condominios";
import User from "../pages/User";
import CondProvider from "../context/CondProviderData";

function PrivateRoute() {
    return (

        <SignalRProvider>
            <CondProvider>
                <Routes>
                    <Route path="/">
                        <Route index Component={Feed} />
                        <Route path="/user" Component={User} />
                    </Route>
                    <Route path="/condominios" >
                        <Route index Component={Condominios} />
                        <Route path=":id" Component={Dispositivos} />
                    </Route>
                </Routes>
            </CondProvider>
        </SignalRProvider>

    );
}

export default PrivateRoute;