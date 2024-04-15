import { createSignalRContext } from "react-signalr";
import { Hub } from "react-signalr/lib/signalr/types";
import UserUtils from "../storageUtils/UserUtils";
import { ReactTypeChild } from "../Types/React";

export const SignalRContext = createSignalRContext<Hub<string, string>>()

export const SignalRProvider = ({ children }: ReactTypeChild) => {
    const token: string | null = UserUtils.GetToken()
    if(!token)
        return children
   
    return (
        <SignalRContext.Provider
            connectEnabled={!!token}
            accessTokenFactory={() => token}
            dependencies={[token]}
            url={'https://localhost:7103/monit'}
        >
            {children}
        </SignalRContext.Provider>
    )

}