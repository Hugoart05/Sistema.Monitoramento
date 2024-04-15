import {  createContext,  useEffect,  useState } from "react";
import { ReactTypeChild } from "../Types/React";
import { ApiRequest } from "../Api/Api";

interface CondominioProvider {
    condominios: Condominio[]
    useReload: () => void
}

export const CondDataContext = createContext<CondominioProvider | undefined>(undefined)

function CondProvider({ children }: ReactTypeChild)  {
    const [condominios, setCondominios] = useState<Condominio[]>([] as Condominio[])
    useEffect(()=>{BuscarTodosOsCondominios()},[])
    async function BuscarTodosOsCondominios() {
        const response = await ApiRequest<Condominio[]>('/sheet/getvalues', 'get')
        if (typeof response.data !== 'undefined' && response.success) {
            setCondominios(response.data as Condominio[])
            return
        }
    }
    function useReload(): void {
       BuscarTodosOsCondominios()
    }
    return (
        <CondDataContext.Provider value={{ useReload, condominios}} >
            {children}
        </CondDataContext.Provider>
    );
}
export default CondProvider;