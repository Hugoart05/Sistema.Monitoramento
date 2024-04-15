import { ChangeEvent, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CondDataContext } from "../../context/CondProviderData";
import *  as G from '../../GlobalStyles/style'
import Monitor from "../../components/Monitor";
import { MonitorProperties } from "../../Types/Monit";
import * as C from './style'

function Dispositivos() {
    const { id } = useParams()
    const context = useContext(CondDataContext)
    const [search, setSearch] = useState<string>('')
    const [monitoring, setMonitoring] = useState<MonitorProperties>()

    let condominioSelected
    if (context && id)
        condominioSelected = context?.condominios.find(x => x.id === parseInt(id))

    console.log(condominioSelected)
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value)
    }

    return (
        <div className="container-fluid ">
            <div className="container">
                <Monitor 
                    isMonitoring={monitoring?.isMonitoring}
                    ip={monitoring?.ip}
                    nome={monitoring?.nome}
                    deviceType={monitoring?.deviceType}
                    pingResult={monitoring?.pingResult}
                />
                <div className="row pt-3 mb-3">
                    <G.ChangeArea>
                        <G.Label altura={'5px'}> Buscar</G.Label>
                        <G.Input onChange={handleChange} value={search} />
                    </G.ChangeArea>
                </div>
            </div>
            <div className="container d-flex justify-content-center">
                <C.ListArea className="row ">
                    <div className="col-12 d-flex flex-column gap-1  justify-content-center ">
                        {condominioSelected?.dispositivos?.map((condominio) => (

                            <div
                                key={condominio.id}
                                className="card shadow text-decoration-none"
                                onClick={()=>setMonitoring({
                                    ip:condominio.ip,
                                    isMonitoring: true,
                                    nome:condominio.nome,
                                })}
                            >
                                <div className="card-body p-2 ps-4">
                                    <p className="card-text">{condominio.nome}</p>
                                    <p className="card-text">{condominio.ip}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </C.ListArea>
            </div>
        </div>
    );
}

export default Dispositivos;